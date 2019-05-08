import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
 MatSlideToggleModule, MatRadioModule, MatCardModule, MatTabsModule, MatDrawer, MatMenuModule, MatIconModule,
 MatExpansionModule, MatGridListModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutocompletetoggleComponent } from './autocompletetoggle/autocompletetoggle.component';
import { GroupautocompleteComponent } from './groupautocomplete/groupautocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      FormcontrolComponent,
      AutocompletetoggleComponent,
      GroupautocompleteComponent,
      CheckboxComponent,
      SidenavComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      FormsModule,
      MatCheckboxModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatRadioModule,
      MatCardModule,
      MatTabsModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatExpansionModule,
      MatGridListModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      HttpClientModule
   ],
   exports: [
      MatCheckboxModule,
      MatButtonModule,
      MatDrawer
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

 }
