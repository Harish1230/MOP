import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-postdeployment',
  templateUrl: './postdeployment.component.html',
  styleUrls: ['./postdeployment.component.sass']
})
export class PostdeploymentComponent implements OnInit {

  postDeploymentForm = new FormGroup({
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
    console.log(this.postDeploymentForm.value);
    if(this.dashboardService.updateData)
    {
    this.delete(this.dashboardService.updateData)
    this.dashboardService.updateData=null
    }
    this.dashboardService.postDeployment.push(this.postDeploymentForm.value)
    this.postDeploymentForm.reset()
  }
  delete(data)
  {
    this.dashboardService.postDeployment.splice(this.dashboardService.postDeployment.indexOf(data),1);
  }
  edit(data)
  {
   this.postDeploymentForm.setValue(data) 
   this.dashboardService.updateData=data
  }
}
