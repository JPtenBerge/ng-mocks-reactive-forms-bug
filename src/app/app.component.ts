import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddPersonForm } from './add-person-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  form!: FormGroup<AddPersonForm>;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group<AddPersonForm>({
      name: this.fb.control(''),
      age: this.fb.control(18),
    });
  }
}
