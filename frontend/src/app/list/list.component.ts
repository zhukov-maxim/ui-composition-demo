import { Component, Input } from '@angular/core';

@Component({
  selector: 'z-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: string[] | undefined = undefined;
  @Input() selectedItem: string | undefined = undefined;

  getItemStyle(item: string): { [klass: string]: any; } {
    return {
      fontWeight: item === this.selectedItem ? 'bold' : 'normal'
    };
  }
}
