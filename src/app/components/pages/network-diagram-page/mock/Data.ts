import {NetworkEdge, NetworkNode} from "@zebbra/ngx-neops-app-components";

export const NODE_MOCK_DATA: NetworkNode[] = [
  {
    id: 'N1',
    label: 'N1',
    color: "blue",
    location: {
      label: "Somewhere in Bern",
      tooltip: "You are on your own, buddy"
    },
    rack: {
      label: "Find out yourself",
      tooltip: "No help for you"
    },
    serialNr: {
      label: "189342",
      tooltip: "You'll never find this"
    }
  },
  {
    id: 'N2',
    label: 'N2',
    color: "red",
    location: {
      label: "Somewhere in Matte",
      tooltip: "No more hints for you"
    },
    serialNr: {
      label: "1032u",
      onClick: (node: NetworkNode) => console.log("N2 serialNr clicked"),
      tooltip: "You are on your own, buddy",
      actionRequired: true
    }
  },
  {
    id: 'N3',
    label: 'N3',
    color: "green",
    serialNr: {
      label: "1032u",
      onClick: (node: NetworkNode) => console.log("N2 serialNr clicked"),
      tooltip: "You are on your own, buddy",
      actionRequired: false
    }
  },
  {
    id: 'N4',
    label: 'N4',
    color: "yellow",
    serialNr: {
      label: "1032u",
      tooltip: "You are on your own, buddy",
    }
  },
  {
    id: 'N5',
    label: 'N5',
    color: "purple"
  }
]

export const EDGE_MOCK_DATA: NetworkEdge[] = [
  {
    id: 'E1',
    source: 'N1',
    target: 'N2',
    label: 'c'
  },
  {
    id: 'E2',
    source: 'N2',
    target: 'N3',
    label: 'c'
  },
  {
    id: 'E3',
    source: 'N2',
    target: 'N4',
    label: 'c'
  },
  {
    id: 'E4',
    source: 'N2',
    target: 'N5',
    label: 'c'
  }
]
