import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { APIInterceptor } from './core/interceptors/api.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ComponentsModule } from './shared/components/components.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    StatusBar,
    SplashScreen,
    DocumentViewer,
    File,
    // tslint:disable-next-line: deprecation
    FileTransfer,
    AndroidPermissions,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
