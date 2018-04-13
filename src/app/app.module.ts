import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { EmployeesManagerService } from './services/employeesManager.service';
import { FormsModule } from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    HttpModule
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    Ng2TableModule
  ],
  providers: [
    EmployeesManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
