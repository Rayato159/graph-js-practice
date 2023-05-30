const buildGraph = (edges) => {
    graph = {};

    for (let edge of edges) {
        let [a, b] = edge;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const bfs = (graph, node) => {
    const queue = [node];
    visited = new Set([node]);

    while (queue.length > 0) {
        const current = queue.shift();
        process.stdout.write(`${current} `);

        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
};

// Solution -> 0 1 9 8 7 3 6 10 11 2 5 4

edges = [
    [0, 1],
    [0, 9],
    [1, 8],
    [2, 3],
    [3, 7],
    [3, 5],
    [3, 4],
    [5, 6],
    [6, 7],
    [7, 8],
    [7, 10],
    [7, 11],
    [9, 8],
    [10, 11],
];

graph = buildGraph(edges);
console.log(graph);

bfs(graph, 0, new Set());
