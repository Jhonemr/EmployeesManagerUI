import { Component } from '@angular/core';
import { EmployeesManagerService } from './services/employeesManager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Employees Manager App';
  public employeeId: any;
  public columnDefinitions: any[];
  public rowData: any[];
  public tableConfig: any;
  public isExecuting = false;

  constructor(private employeesManagerService: EmployeesManagerService) {
    this.columnDefinitions = [
      { title: 'Id', name: 'id' },
      { title: 'Name', name: 'name' },
      { title: 'Contract Type', name: 'contractTypeName' },
      { title: 'Role Name', name: 'roleName' },
      { title: 'Role Description', name: 'roleDescription' },
      { title: 'Hourly Salary', name: 'hourlySalary' },
      { title: 'Monthly Salary', name: 'monthlySalary' },
      { title: 'Annual Salary', name: 'annualSalary' }
    ];

    this.tableConfig = {
      paging: true,
      sorting: { columns: this.columnDefinitions },
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    };
  }

  ngOnInit() {
  }

  public getEmployees() {
    this.isExecuting = true;
    if (this.employeeId == null || this.employeeId === undefined || this.employeeId === '') {
      this.employeesManagerService.getAllEmployees()
        .then(employees => {
          if (employees !== null) {
            this.rowData = employees;
          } else {
            this.rowData = [];
          }
          this.isExecuting = false;
        }).catch(
          error => {
            console.log('handleServerError: ', error);
            this.isExecuting = false;
        });
    } else {
      this.employeesManagerService.getEmployeeById(this.employeeId)
        .then(employees => {
          if (employees !== null) {
            this.rowData = [employees];
          } else {
            this.rowData = [];
          }
          this.isExecuting = false;
        }).catch(
          error => {
            console.log('handleServerError: ', error);
            this.isExecuting = false;
        });
    }
  }
}
