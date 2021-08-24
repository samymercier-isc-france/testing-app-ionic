import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LotteryPageComponent } from './pages/lottery-page/lottery-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: LoginPageComponent},
  {path: 'home', component: MainPageComponent, children: [
    {path: '', component: HomeWelcomeComponent},
    {path: 'lottery', component: LotteryPageComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
