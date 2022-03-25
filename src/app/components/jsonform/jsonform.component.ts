import { Component, OnInit } from '@angular/core';
import {carbonMaterialRenderers} from "../../model/jsonforms/carbon-renderers";

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.scss']
})
export class JsonformComponent implements OnInit {
  uischema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        label: false,
        scope: "#/properties/done",
      },
      {
        type: "Control",
        scope: "#/properties/name",
      },
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/due_date",
          },
          {
            type: "Control",
            scope: "#/properties/recurrence",
          },
        ],
      },
    ],
  };
  schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        minLength: 1,
      },
      done: {
        type: "boolean",
      },
      due_date: {
        type: "string",
        format: "date",
      },
      recurrence: {
        type: "string",
        enum: ["Never", "Daily", "Weekly", "Monthly"],
      },
    },
    required: ["name", "due_date"],
  };
  data = {};
  carbonMaterialRenderers = carbonMaterialRenderers;
  constructor() {

  }


  ngOnInit(): void {
  }

}
