import "./bootstrap.js";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";

import getGithub, { githubWidget } from "./github.js";
import get_news, { newsWidget } from "./spacenews.js";
import getWeather, { weatherWidget } from "./weather.js";

const options = {
    margin: 5,
    columnOpts: {
        columnMax: 8,
        breakpoints: [
            { w: 600, c: 6 },
            { w: 400, c: 4 },
            { w: 300, c: 2 },
        ],
    },
    removable: ".trash",
};

const grid = GridStack.init(options);

const githubBtn = document.getElementById("add_github");
githubBtn.addEventListener("click", () => {
    const widgets = grid.el.children;
    if (widgets.length !== 0)
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].children[0].children[0].id === "github_widget") {
                return;
            }
        }
    grid.addWidget(githubWidget);

    getGithub();
});

const newsBtn = document.getElementById("add_news");
newsBtn.addEventListener("click", () => {
    const widgets = grid.el.children;
    if (widgets.length !== 0)
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].children[0].children[0].id === "news_widget") {
                return;
            }
        }
    grid.addWidget(newsWidget);
    get_news();
});

const weatherBtn = document.getElementById("add_weather");
weatherBtn.addEventListener("click", () => {
    const widgets = grid.el.children;
    if (widgets.length !== 0)
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].children[0].children[0].id === "weather_widget") {
                return;
            }
        }
    grid.addWidget(weatherWidget);
    getWeather();
});
