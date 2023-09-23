import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimePosterComponent } from './anime-poster/anime-poster.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnimeListComponent } from './anime-list/anime-list.component';


@NgModule({
  declarations: [
    AnimePosterComponent,
    AnimeListComponent,
    
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
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    
  ]
})
export class AnimeModule { }
