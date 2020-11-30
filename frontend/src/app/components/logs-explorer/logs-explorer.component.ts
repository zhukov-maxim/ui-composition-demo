import { Component, Input, OnInit } from '@angular/core';

import { FileContent, LogsService } from '../../services/logs/logs.service';

enum DataLoadingState {
  Initial,
  Loading,
  Failed,
  Loaded
}

@Component({
  selector: 'z-logs-explorer',
  templateUrl: './logs-explorer.component.html',
  styleUrls: ['./logs-explorer.component.scss']
})
export class LogsExplorerComponent implements OnInit {
  @Input() height = '400px';

  public dataLoadingState = DataLoadingState;

  public filesListState: DataLoadingState = DataLoadingState.Initial;
  public filesList: string[] | undefined = undefined;

  public fileContentState: DataLoadingState = DataLoadingState.Initial;
  public fileContent: FileContent | undefined = undefined;

  public selectedFileName: string | undefined = undefined;

  constructor(
    private logsService: LogsService
  ) { }

  ngOnInit(): void {
    this.loadFilesList();
  }

  loadFilesList(): void {
    this.filesListState = DataLoadingState.Loading;

    this.logsService.getFilesList().subscribe(
      (data) => {
        this.filesListState = DataLoadingState.Loaded;
        this.filesList = data;

        if (this.filesList.length) {
          const firstFileName = this.filesList[0];

          this.selectFile(firstFileName);
        }
      }
    );
  }

  selectFile(fileName: string): void {
    this.selectedFileName = fileName;
    this.loadFileContent(fileName);
  }

  loadFileContent(fileName: string): void {
    this.fileContentState = DataLoadingState.Loading;

    this.logsService.getFileContent(fileName).subscribe(
      (data) => {
        this.fileContentState = DataLoadingState.Loaded;
        this.fileContent = data;
      }
    );
  }

  get style(): { [klass: string]: any; } {
    return {
      height: this.height
    };
  }

  downloadSelectedFile(): void {
    alert('File save dialog.');
  }
}
