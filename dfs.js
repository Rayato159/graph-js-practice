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

const dfs = (graph, node, visited) => {
    if (visited.has(node)) return;

    process.stdout.write(`${node} `);

    visited.add(node);

    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
};

// Solution -> 0 1 8 7 3 2 5 6 4 10 11 9

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

dfs(graph, 0, new Set());
