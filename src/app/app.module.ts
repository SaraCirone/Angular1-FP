import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './components/users/users.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { DettagliUtenteComponent } from './components/dettagli-utente/dettagli-utente.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "addPost",
                component: AddPostComponent
            }
        ]
    },
    {
        path: "activePosts",
        component: ActivePostComponent
    },
    {
        path: "inactivePosts",
        component: InactivePostComponent
    },
    {
        path: "active-posts/:id",
        component: DettagliPostComponent
    },
    {
        path: "inactive-posts/:id",
        component: DettagliPostComponent
    },
    {
        path: "userPage",
        component: UsersComponent,
        children: [
            {
                path: ":id",
                component: DettagliUtenteComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
]


@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    NavbarComponent,
    InactivePostComponent,
    HomeComponent,
    ActivePostComponent,
    MaiuscoloPipe,
    HighlightDirective,
    UsersComponent,
    DettagliPostComponent,
    DettagliUtenteComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
