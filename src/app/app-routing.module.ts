import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';

const routes: Routes = [
  { path: "home", component: MyportfolioComponent },
  { path: "**", component: MyportfolioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
