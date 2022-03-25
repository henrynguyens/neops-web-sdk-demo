// Renderers from Material should be adapted: https://github.com/eclipsesource/jsonforms/blob/master/packages/angular-material/src/index.ts
// extend angular/material renderer components
// code local on /home/leandro/projects/jsonforms

import {RankedTester} from "@jsonforms/core";

export const carbonMaterialRenderers: {
  tester: RankedTester;
  renderer: any;
}[] = [
  // controls
  // { tester: booleanControlTester, renderer: BooleanControlRenderer },
  // { tester: TextControlRendererTester, renderer: TextControlRenderer },
  // { tester: TextAreaRendererTester, renderer: TextAreaRenderer },
  // { tester: NumberControlRendererTester, renderer: NumberControlRenderer },
  // { tester: RangeControlRendererTester, renderer: RangeControlRenderer },
  // { tester: DateControlRendererTester, renderer: DateControlRenderer },
  // { tester: ToggleControlRendererTester, renderer: ToggleControlRenderer },
  // { tester: enumControlTester, renderer: AutocompleteControlRenderer },
  // { tester: ObjectControlRendererTester, renderer: ObjectControlRenderer },
  // // layouts
  // { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
  // { tester: groupLayoutTester, renderer: GroupLayoutRenderer },
  // { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
  // { tester: categorizationTester, renderer: CategorizationTabLayoutRenderer },
  // { tester: LabelRendererTester, renderer: LabelRenderer },
  // { tester: ArrayLayoutRendererTester, renderer: ArrayLayoutRenderer },
  // // other
  // { tester: masterDetailTester, renderer: MasterListComponent },
  // { tester: TableRendererTester, renderer: TableRenderer }
];
