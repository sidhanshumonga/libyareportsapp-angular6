
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule, DOCUMENT} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import { DatasetstabsComponent } from './datasetstabs/datasetstabs.component';
import { HeaderselectionsComponent } from './headerselections/headerselections.component';
import { RightbarselectionsComponent } from './rightbarselections/rightbarselections.component';
import { OrgunitlibraryComponent } from './orgunitlibrary/orgunitlibrary.component';
import { TablecardComponent } from './tablecard/tablecard.component';
import { LoaderComponent } from './loader/loader.component';
import { AlltablesComponent } from './alltables/alltables.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent,DatasetstabsComponent,
    HeaderselectionsComponent,RightbarselectionsComponent,
    OrgunitlibraryComponent,TablecardComponent,LoaderComponent,AlltablesComponent],
  bootstrap: [AppComponent,LoaderComponent],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ]
})
export class AppModule {}