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
    <div style="margin-top:10px">
      <ibm-radio-group aria-label="radiogroup">
        <ibm-radio
          *ngFor="let radio of this.scopedSchema.enum"
          [value]="radio"
          (change)="onChange($event)"
        >
          {{ radio }}
        </ibm-radio>
      </ibm-radio-group>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioControlRendererComponent extends JsonFormsControl {
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
    return event.source.value;
  };
}
