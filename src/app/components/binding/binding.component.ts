import { Component, OnInit, Input, ViewEncapsulation, SecurityContext } from '@angular/core';
import { AnimalEnum } from 'src/app/enums/AnimalEnum';
import { Occupation } from 'src/app/models/occupation';
import { DomSanitizer } from '@angular/platform-browser';

enum AgentStatus {
    available = 1 ,
    busy = 2,
    away = 3,
    offline = 0
}
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BindingComponent implements OnInit {
  occupations!: Occupation[];
  occupationSelected!: string;
  occupationSelected2!: number;
  animal!: AnimalEnum;
  interpolationNewLines!: string;
  // public AnimalEnum = AnimalEnum;   //THIS IS THE TRICK!!!! :D
  // public AnimalEnum = AnimalEnum;   //THIS IS THE TRICK!!!! :D
  imgUrl!: string;
  color = 'red';
  width = 20;
  options!: string[];
  optionSelected!: string;
  myValue: AgentStatus = 0;
  myValue1: AnimalEnum = AnimalEnum.Cat;
  AgentStatus: typeof AgentStatus = AgentStatus;
  AnimalEnum: typeof AnimalEnum = AnimalEnum;
  isOffline!: boolean;
  isReadonly!: boolean;
  _twoWayBind!: string;
  get twoWayBind() {
    return this._twoWayBind;
  }
  set twoWayBind(val: string) {
    this._twoWayBind = val;
  }

  constructor(private sanitizer: DomSanitizer) { }

  get name(): string {
    const retVal = this.sanitizer.sanitize(SecurityContext.HTML, 'jorge & perez') as string;
    return retVal;
  }


  ngOnInit() {
    this.animal = AnimalEnum.None;
    this.imgUrl = '../../assets/images/flashcards.svg'
    // enum binding
    const options = Object.keys(AgentStatus);
    this.options = options.slice(options.length / 2);
    this.interpolationNewLines = 'this<br/>is<br/>a<br/>test';
    this.occupations = [
      { id: 1, name: 'Astrounaut' },
      { id: 2, name: 'Engineer' },
      { id: 3, name: 'Teacher' }
    ];
  }

  showDog() {
    this.animal = AnimalEnum.Dog;
  }

  showCat() {
    this.animal = AnimalEnum.Cat;
  }

  parseValue(value: any) {
    this.myValue = AgentStatus[value] as any;
    this.myValue1 = AnimalEnum[value] as any;
    this.isOffline = this.myValue === AgentStatus.offline;
  }

  onSelectClick() {
    this.optionSelected = 'busy';
    this.occupationSelected = this.occupations[1].name as any;
    this.occupationSelected2 = this.occupations[1].id as any;
  }
}
