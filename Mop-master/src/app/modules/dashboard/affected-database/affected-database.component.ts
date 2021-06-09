import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-affected-database',
  templateUrl: './affected-database.component.html',
  styleUrls: ['./affected-database.component.sass']
})
export class AffectedDatabaseComponent implements OnInit {

  affectedDatabaseForm = new FormGroup({
    application : new FormControl(''),
    database_Host_Instance_Name : new FormControl(''),
    databaseType : new FormControl(''),
    ApprovedBy : new FormControl(''),
    dBManagedBy : new FormControl('')
  })
  constructor(public dashboardService:DashboardService) { }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.affectedDatabaseForm.value);
    if(this.dashboardService.updateData)
    {
    this.delete(this.dashboardService.updateData)
    this.dashboardService.updateData=null
    }
    this.dashboardService.affectedDatabase.push(this.affectedDatabaseForm.value)
    this.affectedDatabaseForm.reset()
  }

  delete(data)
  {
    this.dashboardService.affectedDatabase.splice(this.dashboardService.affectedDatabase.indexOf(data),1);
  }
  
  edit(data)
  {
   this.affectedDatabaseForm.setValue(data) 
   this.dashboardService.updateData=data
  }
}

