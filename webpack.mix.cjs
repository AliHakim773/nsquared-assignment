const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/weather.js", "public/js")
    .js("resources/js/github.js", "public/js")
    .postCss("resources/css/app.css", "public/css");
