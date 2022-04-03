import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { ErrorComponent } from './error/error.component';
import { ListOfCropsComponent } from './list-of-crops/list-of-crops.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'login', component:LoginComponent},
  {path:'order', component:ListOfCropsComponent,canActivate:[RouteGuardService]},
  {path:'crops/:cropName', component:CropDetailsComponent,canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
