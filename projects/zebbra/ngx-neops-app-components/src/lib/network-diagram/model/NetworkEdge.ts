import {Edge} from "@swimlane/ngx-graph/lib/models/edge.model";

export interface NetworkEdge extends Edge {
    activated?: boolean;
}
