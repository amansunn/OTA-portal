import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent implements OnInit {


  @Input() activeSection!:string;
  navList!:Link[];
  ngOnInit(): void {
    
  }
  

}
