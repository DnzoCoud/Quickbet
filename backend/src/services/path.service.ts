import { Grafo, Path } from "../models";

export const findShortPath = (
  grafo: Grafo,
  start: string,
  end: string
): Path => {
  const distances: Map<string, number> = new Map();
  const previousNodes: Map<string, string | null> = new Map();
  const priorityQueue: [number, string][] = [[0, start]];

  for (const node of Object.keys(grafo)) {
    distances.set(node, node === start ? 0 : Infinity);
    previousNodes.set(node, null);
  }

  while (priorityQueue.length > 0) {
    const [currentDistance, currentNode] = priorityQueue.shift()!;
    if (currentNode === end) break;

    if (currentDistance > distances.get(currentNode)!) continue;

    for (const neighbor in grafo[currentNode]) {
      const newDistance = currentDistance + grafo[currentNode][neighbor];
      if (newDistance < distances.get(neighbor)!) {
        distances.set(neighbor, newDistance);
        previousNodes.set(neighbor, currentNode);
        priorityQueue.push([newDistance, neighbor]);
      }
    }

    priorityQueue.sort((a, b) => a[0] - b[0]);
  }

  const path: string[] = [];
  let currentNode: string | null = end;

  while (currentNode) {
    path.unshift(currentNode);
    currentNode = previousNodes.get(currentNode)!;
  }

  return { result: path, totalDistance: distances.get(end)! };
};
