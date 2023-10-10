import { Component } from '@angular/core';
import { Galleries } from './constans/galleries.constant';
import { IGallery } from './interfaces/IGallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue: string;
  title:string;
  description:string;
  galleries: IGallery[];
  item: any;
  searchText: any;
  selectedOption=1;
  constructor(){
    this.title="Moje podróże.";
    this.description="Gdzie kiedy i czemu mnie tam wywiało?";
    this.galleries = Galleries;
    this.searchValue = '';

  }



}
