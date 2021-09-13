import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSidenavModule,  } from '@angular/material/SideNav';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ContactService } from 'src/app/service/contact.service';
import { StepDirective1, StepDirective2, StepDirective3, StepDirective4, StepDirective5 } from 'src/app/directive/step-directive.directive';
import { AppComponent } from './components/app/app.component';
import { FlexLayoutColumnComponent } from './components/flex-layout-column/flex-layout-column.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { AngularRoutingComponent } from './components/angular-routing/angular-routing.component';
import { RouterNamedOutletComponent } from './components/router-named-outlet/router-named-outlet.component';
import { MessaginServiceComponent } from './components/messagin-service/messagin-service.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { DynamicTemplateComponent } from './components/dynamic-template/dynamic-template.component';
import { TemplateAndContainersComponent } from './components/template-and-containers/template-and-containers.component';
import { ResponsiveStepperComponent } from './components/responsive-stepper/responsive-stepper.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { AnimationBounceComponent } from './components/animation-bounce/animation-bounce.component';
import { AngularFormsComponent } from './components/angular-forms/angular-forms.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { BindingComponent } from './components/binding/binding.component';
import { CssComponent } from './components/css/css.component';
import { CssAspectRatioComponent } from './components/css-aspect-ratio/css-aspect-ratio.component';
import { MessagingService } from './components/messagin-service/messaging.service';
import { LayoutsComponent } from './components/Layouts/layouts.component';
import { LodashComponent } from './components/lodash/lodash.component';
import { FireStoreComponent } from './components/fire-store/fire-store.component';
import { RestApiComponent } from './components/rest-api/rest-api.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TeacherService } from './service/teacher.service';
import { SchoolService } from './service/school.service';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CssGridComponent } from './components/css-grid/css-grid.component';
import { AngularAnimationsComponent } from './components/angular-animations/angular-animations.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { SvgComponent } from './components/svg/svg.component';
import { EventsComponent } from './components/events/events.component';
import { SvgGatorImage } from './components/svg-gator-image/svg-gator-image.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { ShowWhenEvenDirective } from './directive/show-when-even.directive';
import { SToolTipDirective } from './directive/tooltip.Directive';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { IndexedDbComponent } from './components/indexed-db/indexed-db.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutColumnComponent,
    SideNavComponent,
    AngularMaterialComponent,
    AngularRoutingComponent,
    RouterNamedOutletComponent,
    MessaginServiceComponent,
    TypographyComponent,
    ObservableComponent,
    TypescriptComponent,
    DynamicTemplateComponent,
    TemplateAndContainersComponent,
    ResponsiveStepperComponent,
    StepDirective1,
    StepDirective2,
    StepDirective3,
    StepDirective4,
    StepDirective5,
    AnimationsComponent,
    SvgGatorImage,
    AnimationBounceComponent,
    AngularFormsComponent,
    MatTableComponent,
    BindingComponent,
    CssComponent,
    CssAspectRatioComponent,
    LayoutsComponent,
    LodashComponent,
    FireStoreComponent,
    RestApiComponent,
    RxjsComponent,
    SampleComponentComponent,
    DialogComponent,
    CssGridComponent,
    AngularAnimationsComponent,
    LocalStorageComponent,
    SvgComponent,
    EventsComponent,
    OperatorsComponent,
    BuiltInDirectivesComponent,
    ShowWhenEvenDirective,
    SToolTipDirective,
    UploadFileComponent,
    IndexedDbComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
    MatDatepickerModule, MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    // AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    // AngularFirestoreModule,
    MatDialogModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    StorageServiceModule
  ],
  exports: [
    SideNavComponent, MatSelectModule, MatRadioModule
  ],
  providers: [MessagingService, ContactService, TeacherService, SchoolService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ResponsiveStepperComponent, DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
