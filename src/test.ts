// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ngMocks } from 'ng-mocks';
import { ReactiveFormsModule } from '@angular/forms';

ngMocks.autoSpy('jasmine');

// tried this, no dice
// ngMocks.globalKeep(ReactiveFormsModule, true);

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
