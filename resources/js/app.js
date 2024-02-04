import "./bootstrap.js";

import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";

GridStack.initAll({
    margin: 5,
    columnOpts: {
        columnMax: 8,
        breakpoints: [
            { w: 600, c: 6 },
            { w: 400, c: 4 },
            { w: 300, c: 2 },
        ],
    },
});
