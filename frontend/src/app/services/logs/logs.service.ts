import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FilesService {
  getFilesList: () => Observable<string[]>;
  getFileContent: (fileName: string) => Observable<FileContent>;
}

export interface FileContent {
  date: string;
  log: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogsService implements FilesService {
  constructor(
    private http: HttpClient
  ) { }

  getFilesList(): Observable<string[]> {
    console.log('LogsService - getFilesList');

    const filesListUrl = 'http://localhost:4201/dates';

    return this.http.get<string[]>(filesListUrl);
  }

  getFileContent(fileName: string): Observable<FileContent> {
    console.log('LogsService - getFileContent');
    console.log(fileName);

    const fileContentBaseUrl = 'http://localhost:4201/logs/';
    const fileContentUrl = fileContentBaseUrl + fileName;

    return this.http.get<FileContent>(fileContentUrl);
  }
}
