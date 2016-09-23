/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { RestComponent } from './rest.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS} from "angular2/src/router/router_providers";

bootstrap(AppComponent);
bootstrap(RestComponent,[ ROUTER_PROVIDERS , HTTP_PROVIDERS]);
