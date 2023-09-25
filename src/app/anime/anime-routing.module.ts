import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePosterComponent } from './anime-poster/anime-poster.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { EditAnimeComponent } from './edit-anime/edit-anime.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';

const routes: Routes = [{path:'',component:AnimeListComponent,pathMatch:"full"},
{path:"add",component:AddAnimeComponent, pathMatch:"full"},
{path:"edit/:id",component:EditAnimeComponent, pathMatch:"full"},
{path:":id",component:AnimeDetailsComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
