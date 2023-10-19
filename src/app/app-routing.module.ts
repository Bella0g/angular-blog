import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
    { path: 'home', component:  MainComponent},
    { path: 'about', component: AboutComponent },
    { path: 'post', component: PostDetailsComponent },
    { path: 'admin', component: AdminComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }