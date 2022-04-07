import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NetworkDiagramControl} from "./model/NetworkDiagramControl";
import {DagreClusterLayout, MiniMapPosition} from "@swimlane/ngx-graph";
import {curveStepAfter} from "d3-shape";
import {Subject} from "rxjs";
import {Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {NetworkNode} from "./model/NetworkNode";

@Component({
  selector: 'neops-network-diagram',
  templateUrl: './network-diagram.component.html',
  styleUrls: ['./network-diagram.component.css']
})
export class NetworkDiagramComponent implements OnInit {
  control: NetworkDiagramControl = new NetworkDiagramControl();

  @Input()
  set networkDiagramControl(control: NetworkDiagramControl) {
    this.control = control
    this.control._centerGraph.subscribe(value => this.centerGraph.next(true))
    this.control._updateGraph.subscribe(value => this.updateGraph.next(true))
    this.control._zoomToFitGraph.subscribe(value => this.zoomToFitGraph.next(true))
  }

  layout: DagreClusterLayout = new DagreClusterLayout();
  panOnZoom: boolean = true;
  draggingEnabled = false;
  panningEnabled = true;
  zoomEnabled = true;
  zoomSpeed = 0.1;
  minZoomLevel = 0.5;
  maxZoomLevel = 2;
  autoZoom = true;
  autoCenter = true;
  curve = curveStepAfter;

  updateGraph: Subject<boolean> = new Subject();
  centerGraph: Subject<boolean> = new Subject();
  zoomToFitGraph: Subject<boolean> = new Subject();
  panToNode: Subject<boolean> = new Subject();
  miniMapPosition: MiniMapPosition = MiniMapPosition.UpperRight;


  constructor() {
    this.layout.settings.marginX = 0
    this.layout.settings.marginY = 0
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.centerGraph.next(true)
  }

  nodeClick($event: Event, node: Node) {
    alert("Node clicked: " + node.id)
    $event.stopPropagation();
  }

  mouseEnterNode(node: NetworkNode) {
    // const edges = this.control.links.filter(edge => edge.source == node.id)
    // edges.forEach(edge => edge.activated = true)
    //
    // const nodes = edges.map(e => this.control.nodes.find(n => n.id == e.target))
    //
    // nodes.forEach(n => n ? n.activated = true : '')
    // node.activated = true

    // use rxjs to make it detect on other nodes too
    node.activated = true
    // this.updateGraph.next(true)
  }

  mouseLeaveNode(node: NetworkNode) {
    // this.control.links.forEach(link => link.activated = false)
    //
    // this.control.nodes.forEach(n => n.activated = false)

    // use rxjs to make it detect on other nodes too
    node.activated = false;
    // this.updateGraph.next(true)
  }
}
