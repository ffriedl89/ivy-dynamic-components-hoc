import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comic/comic.component';
import { ComicsComponent } from './comics/comics.component';
import { withRoute } from './utils/utils';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'comics',
    pathMatch: 'full'
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'comic/:comicId',
    component: withRoute(ComicComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
