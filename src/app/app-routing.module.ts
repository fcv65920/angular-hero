import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //空路徑“完全匹配”的 URL 重新導向到路徑為 '/dashboard' 的路由。
  { path: '' , redirectTo: 'dashboard', pathMatch: 'full' },

  // 表示 :id 是一個佔位符，它表示某個特定英雄的 id。
  { path: 'detail/:id' , component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
