import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-setting',
  templateUrl: './help-setting.component.html',
  styleUrl: './help-setting.component.scss'
})
export class HelpSettingComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
	rating = 5;
  constructor(private _formBuilder: FormBuilder) {}
}

