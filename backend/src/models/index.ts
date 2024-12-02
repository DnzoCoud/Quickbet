export interface Grafo {
  [key: string]: {
    [key: string]: number;
  };
}

export interface Path {
  result: string[];
  totalDistance: number;
}
