import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(items: any[], searchText: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLocaleLowerCase();

  //   return items.filter(it => {
  //     return it.toLocaleLowerCase().includes(searchText);
  //   });
  // }

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

  // transform(value: any, input: any): any {
  //   if (input) {
  //     return value.filter((val:any) => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
  //   } else {
  //     return value;
  //   }
  //  }

  // transform(value: any, args?: any): any {
  //   if(!value)return null;
  //   if(!args)return value;

  //   args = args.toLowerCase();

  //   return value.filter(function(data: any){
  //       return JSON.stringify(data).toLowerCase().includes(args);
  //   });
  // }
}
