import { Component, OnInit } from '@angular/core';
import {Edge} from "@swimlane/ngx-graph/lib/models/edge.model";
import {ClusterNode, Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {Subject} from "rxjs";
import {curveStepAfter} from "d3-shape"

@Component({
  selector: 'app-network-diagram',
  templateUrl: './network-diagram.component.html',
  styleUrls: ['./network-diagram.component.scss']
})
export class NetworkDiagramComponent implements OnInit {
  panOnZoom: boolean = true;
  draggingEnabled = false;
  panningEnabled = false;
  zoomEnabled = false;
  zoomSpeed = 1;
  minZoomLevel = 1;
  maxZoomLevel = 1;
  autoZoom = false;
  autoCenter = true;
  curve = curveStepAfter;

  links: Edge[] = [];
  nodes: Node[] = [];
  clusters: ClusterNode[] = [];
  updateGraph: Subject<boolean> = new Subject();
  centerGraph: Subject<boolean> = new Subject();
  zoomToFitGraph: Subject<boolean> = new Subject();


  constructor() {
    this.nodes = [
      {
        id: 'first',
        label: 'A',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'second',
        label: 'B',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'c1',
        label: 'C1',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'c2',
        label: 'C2',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'd',
        label: 'd',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'e',
        label: 'e',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'f',
        label: 'f',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'g',
        label: 'g',
        dimension: {
          width: 200,
          height: 64
        }
      }, {
        id: 'h',
        label: 'h',
        dimension: {
          width: 200,
          height: 64
        }
      }
    ]

    this.links =  [
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

    this.clusters = [
      {
        id: 'third',
        label: 'C',
        childNodeIds: ['c1', 'c2']
      }
    ]
  }

  ngOnInit(): void {
  }

  nodeClick() {
    alert("Node clicked")
  }
}

