import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
public affectedDatabase = []
public preDeployment = []
public postDeployment =[]
public deployment = []
public updateData:any=null;
  constructor() { }
}
