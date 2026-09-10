import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Hero } from '@app/sections/hero/hero';
import { Services } from '@app/sections/services/services';
import { About } from '@app/sections/about/about';
import { Contact } from '@app/sections/contact/contact';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Footer, Hero, Services, About, Contact],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
