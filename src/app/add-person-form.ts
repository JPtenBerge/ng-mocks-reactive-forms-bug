import { FormControl } from '@angular/forms';

export interface AddPersonForm {
  name: FormControl<string>;
  age: FormControl<number>;
}
