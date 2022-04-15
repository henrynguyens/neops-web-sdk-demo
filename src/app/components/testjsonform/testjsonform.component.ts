import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import {
  and,
  ControlProps,
  isControl,
  isEnumControl,
  rankWith,
  schemaTypeIs,
  scopeEndsWith,
  StatePropsOfControl,
  Tester,
} from '@jsonforms/core';
import { InputTextControlRendererComponent } from './carbon-control-renderer/inputText-control-renderer.component';
import { RadioControlRendererComponent } from './carbon-control-renderer/radio-control-renderer.component';

const testNameTester: Tester = and(
  schemaTypeIs('string'),
  scopeEndsWith('name')
);

const testAddressTester: Tester = and(
  schemaTypeIs('string'),
  scopeEndsWith('address')
);

const testRadioTester: Tester = and(isEnumControl, scopeEndsWith('sex'));

@Component({
  selector: 'app-testjsonform',
  templateUrl: './testjsonform.component.html',
  styleUrls: ['./testjsonform.component.scss'],
})
export class TestjsonformComponent implements OnInit {
  data = null;
  schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      sex: {
        type: 'string',
        enum: ['female', 'male'],
      },
    },
  };
  uischema = {
    type: 'Group',
    label: 'Information Test',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/name',
      },
      {
        type: 'Control',
        scope: '#/properties/address',
      },
      {
        type: 'Control',
        scope: '#/properties/sex',
        options: {
          format: 'radio',
        },
      },
    ],
  };

  carbonControlRenderers = [
    ...angularMaterialRenderers,
    {
      tester: rankWith(5, testNameTester),
      renderer: InputTextControlRendererComponent,
    },
    {
      tester: rankWith(5, testAddressTester),
      renderer: InputTextControlRendererComponent,
    },
    {
      tester: rankWith(5, testRadioTester),
      renderer: RadioControlRendererComponent,
    },
  ];
  dataShowUI: any;

  constructor() {}

  ngOnInit(): void {}

  onDateChange(event: any) {
    console.log('logggg', event);
    this.dataShowUI = !event ? null : JSON.stringify(event);
  }
}
