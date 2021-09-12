import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File | null) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    const ftu: string | Blob = fileToUpload as string | Blob;
    const fileName = fileToUpload?.name;
    formData.append('fileKey', ftu, fileName);
  }

}
