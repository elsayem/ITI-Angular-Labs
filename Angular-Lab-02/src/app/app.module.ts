import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Lab-01-Component/navbar/navbar.component';
import { FooterComponent } from './Components/Lab-01-Component/footer/footer.component';
import { AsideComponent } from './Components/Lab-01-Component/aside/aside.component';
import { SliderComponent } from './Components/Lab-01-Component/slider/slider.component';
import { HomeComponent } from './Components/Lab-01-Component/home/home.component';
import { EventBindingComponent } from './Components/Lab-02-Component/event-binding/event-binding.component';
import { StudentFormComponent } from './Components/Lab-02-Component/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { SliderImgComponent } from './Components/Lab-02-Component/slider-img/slider-img.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    SliderComponent,
    HomeComponent,
    EventBindingComponent,
    StudentFormComponent,
    SliderImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
