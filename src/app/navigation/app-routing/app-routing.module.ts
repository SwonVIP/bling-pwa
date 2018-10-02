// Import all dependencies
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Custom dependencies
import {WelcomeComponent} from '../../pages/welcome/welcome.component';
import {HomeComponent} from '../../pages/home/home.component';

/**
 * defines general routing paths for the app and pre app pages which features login functions
 * @author ebm-papst 2018 Team Web Development Services (pascheff)
 */

const routes: Routes = [

  // Defines routes which redirect to Components
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: WelcomeComponent}

];
// Public interface of the class
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
