import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { routing } from './app.routing';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatExpansionModule} from '@angular/material/expansion';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { NgsRevealModule } from 'ngx-scrollreveal';
 // Import the SlickCarouselModule from the correct package



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpClientModule,
        NzAvatarModule,
        NzSelectModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatExpansionModule,
        NzUploadModule,
        NzModalModule,
        MatIconModule,
        MatButtonToggleModule,
        MatTooltipModule,
    ],
    providers: [
    
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
