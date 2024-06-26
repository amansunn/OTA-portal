import { Component, HostListener, Inject, NgModule,OnInit, Renderer2  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DOCUMENT } from '@angular/common';
import {WINDOW} from './service/service'
import { BlogComponent } from "./blog/blog.component";
import { BlogRightSidebarComponent } from "./blog-right-sidebar/blog-right-sidebar.component";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        CarouselModule
        //...
    ],
    //...
})
export class AppModule { }


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        HeaderComponent,
        FooterComponent,
        HomeComponent, BlogComponent, BlogRightSidebarComponent]
})
export class AppComponent {
  title = 'OTM';
  activeSection!: string;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.updateActiveSection(offset);
  }
  updateActiveSection(offset: number): void {
    const sections = this.document.querySelectorAll('.section');
    
    sections.forEach(section => {
      const sectionOffset = section.getBoundingClientRect().top + this.window.pageYOffset - this.window.innerHeight / 2;
      const sectionHeight = section.clientHeight;

      if (offset >= sectionOffset && offset < sectionOffset + sectionHeight) {
        this.activeSection = section.id;
        console.log(`Active section: ${this.activeSection}`);
      }
    });
  }
  
}
