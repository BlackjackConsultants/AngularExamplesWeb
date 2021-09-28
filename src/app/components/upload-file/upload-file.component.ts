import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploadFileComponent implements OnInit {
  fileToUpload!: File | null;
  files: any = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(event: any) {
    // todo: this function was changed on upgrade to 12
    let files = event.target.files;
    this.fileToUpload = files?.item(0) as File;
    let output = document.getElementById('output'); // note this is not angular way to work with html
    if (output != null) {
      (output as any).src = URL.createObjectURL(files[0]);
      output.onload = function() {
        URL.revokeObjectURL((output as any).src) // free memory
      }
    }

  }

  upload() {
    this.fileUploadService.postFile(this.fileToUpload);
  }

  saveFile() {
    const c: Contact = new Contact();
    c.FirstName = 'jorge';
    c.LastName = 'perez';
    c.Age = 51;
    c.Occupation = 'software developer';
    const blob = new Blob([JSON.stringify(c)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'hello world.txt');
  }
}
