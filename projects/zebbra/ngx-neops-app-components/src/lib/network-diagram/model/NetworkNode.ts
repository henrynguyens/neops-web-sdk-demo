import {Node} from "@swimlane/ngx-graph/lib/models/node.model";

export interface NetworkNode extends Node{
  color?: string
  location?: NodeColumnDefinition
  rack?: NodeColumnDefinition
  serialNr?: NodeColumnActionDefinition
  activated?: boolean

}

export interface NodeColumnDefinition {
  label: string,
  tooltip: string,
}

export interface NodeColumnActionDefinition extends NodeColumnDefinition {
  actionRequired?: boolean,
  onClick?: (node: NetworkNode) => void
}
