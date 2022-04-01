import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {NetworkDiagramControl} from "../../network-diagram/model/NetworkDiagramControl";
import {EDGE_MOCK_DATA, NODE_MOCK_DATA} from "./mock/Data";

@Component({
  selector: 'app-network-diagram-page',
  templateUrl: './network-diagram-page.component.html',
  styleUrls: ['./network-diagram-page.component.scss']
})
export class NetworkDiagramPageComponent implements OnInit, AfterContentInit {
  networkDiagramControl: NetworkDiagramControl = new NetworkDiagramControl();
  nodeCounter: number = 0;
  edgeCounter: number = 0

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.networkDiagramControl.addNodes(NODE_MOCK_DATA)
    this.networkDiagramControl.addEdges(EDGE_MOCK_DATA)
  }

  resetGraph() {
    this.nodeCounter = this.edgeCounter = 0
    this.networkDiagramControl.reset()
  }

  addRandomNode() {
    this.networkDiagramControl.addNode({
      id: "n-" + (++this.nodeCounter).toString(),
      label: "test",
      color: this.nodeCounter % 2 == 0 ? "red": "green"
    })
  }

  addRandomEdge() {
    const from = Math.floor(Math.random() * this.nodeCounter) + 1
    let to = Math.floor(Math.random() * this.nodeCounter) + 1

    if (to == from) {
      if (to<this.nodeCounter){
        to++;
      }
      else {
        return;
      }
    }
    this.networkDiagramControl.addEdge({
      id: "e-" + (++this.edgeCounter).toString(),
      source: "n-" + from.toString(),
      target: "n-"+ to.toString(),
    })
  }

  zoomToFitGraph() {
    this.networkDiagramControl.zoomToFitGraph()
  }

  centerGraph() {
    this.networkDiagramControl.centerGraph()
  }

  updateGraph() {
    this.networkDiagramControl.updateGraph()
  }


}
