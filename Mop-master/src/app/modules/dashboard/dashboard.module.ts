import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AffectedDatabaseComponent } from './affected-database/affected-database.component';
import { PredeploymentComponent } from './predeployment/predeployment.component';
import { PostdeploymentComponent } from './postdeployment/postdeployment.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { SortablejsModule } from 'ngx-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    DashboardComponent,
    AffectedDatabaseComponent,
    PredeploymentComponent,
    PostdeploymentComponent,
    DeploymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule
  ],
  exports: [
    DashboardComponent,
    AffectedDatabaseComponent,
    PredeploymentComponent,
    PostdeploymentComponent,
    DeploymentComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers : [DashboardService,DatePipe]
})
export class DashboardModule { }
