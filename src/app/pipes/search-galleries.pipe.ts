import { Galleries } from './../constans/galleries.constant';
import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../interfaces/IGallery';

@Pipe({
  name: 'searchGalleries'
})
export class SearchGalleriesPipe implements PipeTransform {

  galleries: any;
  args: any;

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    
    this.galleries=value;
    
  }
  
  onSearchValue(){
    this.galleries=Galleries;

    if(this.args){
      this.galleries=this.galleries.filter((gallery:IGallery)=>(
        (gallery.title.indexOf(this.args)!==-1)||(gallery.description.indexOf(this.args)!==-1)));
      } else{
        this.galleries=this.args;
      }
      return this.galleries;    
  }
}
