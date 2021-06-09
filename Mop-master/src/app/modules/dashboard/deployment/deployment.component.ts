import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.sass']
})
export class DeploymentComponent implements OnInit {

  deploymentForm = new FormGroup({
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
    console.log(this.deploymentForm.value);
    if(this.dashboardService.updateData)
    {
    this.delete(this.dashboardService.updateData)
    this.dashboardService.updateData=null
    }
    this.dashboardService.deployment.push(this.deploymentForm.value)
    this.deploymentForm.reset()
  }
  delete(data)
  {
    this.dashboardService.deployment.splice(this.dashboardService.deployment.indexOf(data),1);
  }
  
  edit(data)
  {
   this.deploymentForm.setValue(data) 
   this.dashboardService.updateData=data
  }
}
