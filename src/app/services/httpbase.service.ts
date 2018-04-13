import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpBaseService {

    constructor(protected http: Http, protected toastrService: ToastrService) {
    }

    /**
     * Handles the errors returned by the server
     */
    protected handleError(error: Response | any):  Promise<any> {
        let errMsg: string;
        if (error instanceof Response) {
          try {
            const body = error.json() || '';
            if (body.type && body.type === 'handled') {
              errMsg = body.messages;
              this.toastHandledErrors(body.messages, body.parameters);
            } else {
              const err = body.error || JSON.stringify(body);
              errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
              this.toastUnhandledError();
            }
          } catch (e) {
            if (error['_body'] !== undefined && error['_body'] !== null) {
              errMsg = error['_body'];
              if (error['status'] === 409) {
                this.toastrService.warning(errMsg);
              } else {
                this.toastrService.error(errMsg);
              }
            } else {
              this.toastUnhandledError();
              errMsg = `${error.status} - ${error.statusText}`;
            }
          }
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private toastUnhandledError(): void {
        this.toastrService.error('Internal Server Error');
    }

    /**
     * Prints handled error messages on the screen
     * @param messages
     */
    private toastHandledErrors(messages: string[], parameters: any): void {
      messages.forEach(msg => {
        this.toastrService.warning(msg);
      });
    }

    /**
     * Gets an application/json header
     */
    protected getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
