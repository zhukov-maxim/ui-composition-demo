import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FileContent } from '../services/logs/logs.service';

@Component({
  selector: 'z-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent {
  @Input() fileContent: FileContent | undefined = undefined;
  @Output() downloadClick = new EventEmitter<void>();

  public onDownloadClick(): void {
    console.log('FilePreviewComponent - onDownloadClick');

    // this.downloadClick.emit();
  }
}
