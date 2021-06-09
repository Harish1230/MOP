import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-predeployment',
  templateUrl: './predeployment.component.html',
  styleUrls: ['./predeployment.component.sass']
})
export class PredeploymentComponent implements OnInit {

  preDeploymentForm = new FormGroup({
    task : new FormControl(''),
    prime : new FormControl(''),
    duration : new FormControl(''),
    startDate : new FormControl(''),
    endDate : new FormControl('')
  })
  constructor(public dashboardService:DashboardService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.preDeploymentForm.value);
    if(this.dashboardService.updateData)
    {
    this.delete(this.dashboardService.updateData)
    this.dashboardService.updateData=null
    }
    this.dashboardService.preDeployment.push(this.preDeploymentForm.value)
    this.preDeploymentForm.reset()
  }
  delete(data)
  {
    this.dashboardService.preDeployment.splice(this.dashboardService.preDeployment.indexOf(data),1);
  }
  
  edit(data)
  {
   this.preDeploymentForm.setValue(data)
   this.dashboardService.updateData=data
  }
}
