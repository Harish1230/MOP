import { Component, OnInit } from '@angular/core';
import { Packer } from 'docx';
import { DashboardService } from './dashboard.service';
import { DocumentCreator } from './doc/generate-doc';
import { saveAs } from 'file-saver-es';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardService:DashboardService) { }
  dashboardForm = new FormGroup({
    tmop : new FormControl(''),
    cmop : new FormControl(''),
    dmop : new FormControl('')
  })
  ngOnInit(): void {
  }
  public download(): void {
    if(this.dashboardService.affectedDatabase.length>0 && this.dashboardForm.valid)
    {
    const documentCreator = new DocumentCreator();
    let affectedData=[]
    affectedData.push(["Application(s)","Database Host: Instance Name","Database Type","Approved by DBA/DBC","DB Managed By (i.e. Vendor)"])
    this.dashboardService.affectedDatabase.forEach(element => {
      affectedData.push(Object.values(element))
    });
    let deploymentData=[]
    deploymentData.push(["Task","Prime","Duration","Start Date","End Date"])
    this.dashboardService.deployment.forEach(element => {
      deploymentData.push(Object.values(element))
    });
    let preDeploymentData=[]
    preDeploymentData.push(["Task","Prime","Duration","Start Date","End Date"])
    this.dashboardService.preDeployment.forEach(element => {
      preDeploymentData.push(Object.values(element))
    });
    let postDeploymentData=[]
    postDeploymentData.push(["Task","Prime","Duration","Start Date","End Date"])
    this.dashboardService.postDeployment.forEach(element => {
      postDeploymentData.push(Object.values(element))
    });
    let data={"Affected-Data":affectedData,"Deployment":deploymentData,"Pre-Deployment":preDeploymentData,"Post-Deployment":postDeploymentData}
    const doc = documentCreator.create(data,this.dashboardForm.value);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
  }
}
