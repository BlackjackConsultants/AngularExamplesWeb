import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

interface contact { name: string; }

/**
 * @title Basic select
 */
@Component({
  selector: 'angular-material.component',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AngularMaterialComponent implements OnInit {
  isPrivate = true;
  animal: string | undefined;
  name = 'Angular 5';

  selectedOptions: string[] = [];

  searchOptions: string[] = [
    'Dogs',
    'Cats',
    'Birds',
    'Snakes'
  ];
  returnRecordsIn: string = this.searchOptions[1];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  filterOptions: {
    text: string,
    value: string,
    selected: boolean
  }[] = [
    {
      text: 'Add questions to new test',
      value: 'filter1',
      selected: false
    },
    {
      text: 'Add questions to existing test',
      value: 'filter2',
      selected: false
    },
    {
      text: 'Delete questions of existing test',
      value: 'filter3',
      selected: false
    },
  ];

  public person!: contact;

  ngOnInit() {
    const atest = this.foods;
    // tslint:disable-next-line: no-console
    console.debug(atest.length);
  }

  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/images/flashcards.svg'));
    iconRegistry.addSvgIcon('quickBooksIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/images/quickBooksIcon.svg'));
  }
  handleSelection(event: { option: { selected: any; value: any; }; source: { options: { toArray: () => any[]; }; }; }) {
    if (event.option.selected) {
      event.source.options.toArray().forEach(element => {
        if (element.value != event.option.value) {
          element.selected = false;
        }
      });
    }
  }

  onclick() {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.person = {
      name: 'Felipe'
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}
