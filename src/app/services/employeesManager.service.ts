import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { HttpBaseService } from './httpbase.service';
import { EmployeeDto } from '../dtos/employee';

@Injectable()
export class EmployeesManagerService extends HttpBaseService {

    protected apiUrl = 'http://localhost:5040/api';

    constructor (protected http: Http, protected toastrService: ToastrService) {
        super(http, toastrService);
    }

    public getAllEmployees(): Promise<EmployeeDto[]> {
        return this.http
            .get(`${this.apiUrl}/Employees`, { headers: this.getHeaders() })
            .toPromise()
            .then(r => r.json() as EmployeeDto[])
            .catch(e => this.handleError(e));
    }

    public getEmployeeById(id: number): Promise<EmployeeDto> {
        return this.http
            .get(`${this.apiUrl}/Employees/${id}`, { headers: this.getHeaders() })
            .toPromise()
            .then(r => r.json() as EmployeeDto)
            .catch(e => this.handleError(e));
    }
}
