import {Edge} from "@swimlane/ngx-graph/lib/models/edge.model";
import {Node} from "@swimlane/ngx-graph/lib/models/node.model";

export const NODE_MOCK_DATA: Node[] = [
  {
    id: 'first',
    label: 'A'
  }, {
    id: 'second',
    label: 'B'
  }, {
    id: 'c1',
    label: 'C1'
  }, {
    id: 'c2',
    label: 'C2'
  }, {
    id: 'd',
    label: 'd'
  }, {
    id: 'e',
    label: 'e'
  }, {
    id: 'f',
    label: 'f'
  }, {
    id: 'g',
    label: 'g'
  }, {
    id: 'h',
    label: 'h'
  }
]

export const EDGE_MOCK_DATA: Edge[] = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'first',
    target: 'c1',
    // label: 'custom label'
  }, {
    id: 'c',
    source: 'first',
    target: 'c1',
    // label: 'custom label'
  }, {
    id: 'd',
    source: 'first',
    target: 'c2',
    // label: 'custom label'
  }, {
    id: 'e',
    source: 'first',
    target: 'd',
    // label: 'custom label'
  }, {
    id: 'f',
    source: 'd',
    target: 'e',
    // label: 'custom label'
  }
]
