import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import {
  getLocale,
  isIntegerControl,
  isNumberControl,
  or,
  RankedTester,
  rankWith,
  StatePropsOfControl,
} from '@jsonforms/core';

@Component({
  selector: 'NumberControlRenderer',
  template: `
    <ibm-label [invalid]="$any(error)" [invalidText]="$any(error)">
      {{ label }}
      <input
        ibmText
        (input)="onChange($event)"
        [invalid]="$any(error)"
        [disabled]="!isEnabled()"
        [formControl]="form"
      />
    </ibm-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextControlRendererComponent extends JsonFormsControl {
  constructor(private service: JsonFormsAngularService) {
    super(service);
  }
  override mapAdditionalProps(props: StatePropsOfControl) {
    this.form.setValue(this.data);
  }

  override onChange(event: any) {
    super.onChange(event);
  }

  override getEventValue = (event: any) => {
    return event.target.value;
  };
}
