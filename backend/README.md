# Proyecto de Grafos

Este es un proyecto desarrollado con **Typescript** y **Expressjs**

## Índice

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)

## Descripción

Este proyecto es un microservicio para devolver el camino más corto desde el país de origen hasta el país de destino, así como la distancia total del recorrido usando algoritmo de **Dijkstra**.
Se ese algoritmo ya que no existen ciclos negativos, lo que está garantizado en el contexto de este problema.

## Tecnologías

- **Typescript** - Lenguaje de programación o Js con superpoderes (tipados)
- **Expressjs** - Framework para la creacon de servidores web y manejo de peticiones

## Requisitos

- **Node.js** (v18 o superior)
- **npm** o **yarn** para manejar dependencias.


## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DnzoCoud/Quickbet.git
   cd Quickbet
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso
1. Para iniciar el servidor, ejecuta:
   ```bash
   npm run start
   ```

2. El servidor estará disponible en [http://localhost:3100](http://localhost:3100).

## Envio en el request:

```bash
{
  "grafo": {
    "A": { "B": 10, "C": 20, "D": 30, "E": 40 },
    "B": { "A": 10, "C": 15, "D": 25, "E": 35, "F": 45 },
    "C": { "A": 20, "B": 15, "D": 10, "E": 50, "F": 60 },
    "D": { "A": 30, "B": 25, "C": 10, "E": 20, "F": 30 },
    "E": { "A": 40, "B": 35, "C": 50, "D": 20, "F": 15 },
    "F": { "B": 45, "C": 60, "D": 30, "E": 15 },
    "G": { "H": 10, "I": 20, "J": 30 },
    "H": { "G": 10, "I": 15, "J": 25 },
    "I": { "G": 20, "H": 15, "J": 10 },
    "J": { "G": 30, "H": 25, "I": 10 },
    "K": { "L": 5, "M": 10, "N": 15 },
    "L": { "K": 5, "M": 15, "N": 20 },
    "M": { "K": 10, "L": 15, "N": 10 },
    "N": { "K": 15, "L": 20, "M": 10 },
    "O": { "P": 12, "Q": 25, "R": 35 },
    "P": { "O": 12, "Q": 18, "R": 30 },
    "Q": { "O": 25, "P": 18, "R": 40 },
    "R": { "O": 35, "P": 30, "Q": 40 }
  },
  "start": "A",
  "end": "F"
}
```
