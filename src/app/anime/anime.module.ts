import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimePosterComponent } from './anime-poster/anime-poster.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { MatSelectionList } from '@angular/material/list';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { EditAnimeComponent } from './edit-anime/edit-anime.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AnimePosterComponent,
    AnimeListComponent,
    AddAnimeComponent,
    EditAnimeComponent,
    AnimeDetailsComponent,
    LikeDislikeComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatListModule,
    MatOptionModule,
    MatBadgeModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class AnimeModule {}
