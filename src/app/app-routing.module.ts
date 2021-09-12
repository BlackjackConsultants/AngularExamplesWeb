import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './components/animations/animations.component';
import { BindingComponent } from './components/binding/binding.component';
import { CssComponent } from './components/css/css.component';
import { CssAspectRatioComponent } from './components/css-aspect-ratio/css-aspect-ratio.component';
import { AngularFormsComponent } from './components/angular-forms/angular-forms.component';
import { AnimationBounceComponent } from './components/animation-bounce/animation-bounce.component';
import { FlexLayoutColumnComponent } from './components/flex-layout-column/flex-layout-column.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { MessaginServiceComponent } from './components/messagin-service/messagin-service.component';
import { TypographyComponent } from './components/typography/typography.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TemplateAndContainersComponent } from './components/template-and-containers/template-and-containers.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { AngularRoutingComponent } from './components/angular-routing/angular-routing.component';
import { RouterNamedOutletComponent } from './components/router-named-outlet/router-named-outlet.component';
import { LayoutsComponent } from './components/Layouts/layouts.component';
import { LodashComponent } from './components/lodash/lodash.component';
import { FireStoreComponent } from './components/fire-store/fire-store.component';
import { RestApiComponent } from './components/rest-api/rest-api.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { CssGridComponent } from './components/css-grid/css-grid.component';
import { AngularAnimationsComponent } from './components/angular-animations/angular-animations.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { SvgComponent } from './components/svg/svg.component';
import { EventsComponent } from './components/events/events.component';
import { SvgGatorImage } from './components/svg-gator-image/svg-gator-image.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { IndexedDbComponent } from './components/indexed-db/indexed-db.component';


const routes: Routes = [
  { path: '', redirectTo: '/material', pathMatch: 'full' },
  { path: 'animations', component: AnimationsComponent },
  { path: 'angular-animations', component: AngularAnimationsComponent },
  { path: 'aspectratio', component: CssAspectRatioComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'bounce-animation', component: AnimationBounceComponent },
  { path: 'css', component: CssComponent },
  { path: 'directives', component: BuiltInDirectivesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'cssgrid', component: CssGridComponent },
  { path: 'forms', component: AngularFormsComponent },
  { path: 'fileupload', component: UploadFileComponent },
  { path: 'svgator-animation', component: SvgGatorImage },
  { path: 'column', component: FlexLayoutColumnComponent },
  { path: 'sidenav', component: SideNavComponent },
  { path: 'material', component: AngularMaterialComponent },
  { path: 'messaging', component: MessaginServiceComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'template', component: TemplateAndContainersComponent },
  { path: 'mattable', component: MatTableComponent },
  { path: 'lazy', loadChildren: './lazy.module#LazyModule' },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'lodash', component: LodashComponent },
  { path: 'localstorage', component: LocalStorageComponent },
  { path: 'firestore', component: FireStoreComponent },
  { path: 'rest', component: RestApiComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'svg', component: SvgComponent },
  { path: 'indexeddb', component: IndexedDbComponent},
  { path: 'routing', component: AngularRoutingComponent, children: [
    { path: 'testOutlet', component: RouterNamedOutletComponent, outlet: 'test' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
