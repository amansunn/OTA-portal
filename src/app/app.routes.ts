import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';

export const routes: Routes = [ 
    {
        path: '',
        component: HomeComponent  
    },
    {path:'bloglist',
     component: BlogComponent},
     {
        path: 'blogright',
        component: BlogRightSidebarComponent
     }
];
