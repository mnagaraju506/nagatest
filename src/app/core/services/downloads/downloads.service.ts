import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DownloadsService {
  public fileTransferObject: FileTransferObject = this.fileTransfer.create();

  constructor(private fileTransfer: FileTransfer, private file: File, private http: HttpClient) {}

  public async downloadPDFFile(sourceUrl: string, targetPath: string): Promise<void> {
    this.fileTransferObject.download(sourceUrl, targetPath).then(
      (entry) => {
        // console.log('Download complete: ' + entry.toURL());
      },
      (error) => {
        // handle error
      }
    );
  }

  // tslint:disable-next-line: no-any
  public readJsonFile(sourceUrl: string): Observable<any> {
    return this.http.get(sourceUrl);
  }
}
