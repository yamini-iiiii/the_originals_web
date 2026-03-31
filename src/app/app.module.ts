import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceOverviewComponent } from './pages/service-overview/service-overview.component';
import { ServiceTypeComponent } from './pages/service-type/service-type.component';
import { JobOpeningsComponent } from './pages/job-openings/job-openings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    WorksComponent,
    AboutComponent,
    CareersComponent,
    UpdatesComponent,
    ContactFormComponent,
    ServicesComponent,
    ServiceOverviewComponent,
    ServiceTypeComponent,
    JobOpeningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
