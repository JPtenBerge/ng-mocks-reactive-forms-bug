import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let sut: AppComponent;

  beforeEach(() => MockBuilder(AppComponent).keep(ReactiveFormsModule));

  it('should initialize the form without errors', () => {
    sut = MockRender(AppComponent).componentInstance;
    sut.ngOnInit();
  });
});
