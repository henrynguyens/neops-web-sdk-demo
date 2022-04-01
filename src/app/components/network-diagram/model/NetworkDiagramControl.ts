import {Edge} from "@swimlane/ngx-graph/lib/models/edge.model";
import {ClusterNode, Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {Subject} from "rxjs";

export class NetworkDiagramControl {
  _links: Edge[] = [];
  get links(): Edge[]{
    return this._links;
  }
  _nodes: Node[] = [];
  get nodes(): Node[]{
    return this._nodes;
  }

  readonly clusters: ClusterNode[] = [];
  readonly _updateGraph: Subject<void> = new Subject();
  readonly _centerGraph: Subject<void> = new Subject();
  readonly _zoomToFitGraph: Subject<void> = new Subject();

  public addNode(node: Node){
    this._nodes.push(node)
    this._updateGraph.next()
  }

  public addNodes(nodes: Node[]){
    this._nodes.push(...nodes)
    this._updateGraph.next()
  }

  public addEdge(edge: Edge){
    this.links.push(edge)
    this._updateGraph.next()
  }

  public addEdges(edges: Edge[]){
    this._links.push(...edges)
    this._updateGraph.next()
  }

  reset() {
    this._links = [];
    this._nodes = []
  }

  public updateGraph(){
    this._updateGraph.next()
  }

  public centerGraph(){
    this._centerGraph.next()
  }

  public zoomToFitGraph(){
    this._zoomToFitGraph.next()
  }
}
