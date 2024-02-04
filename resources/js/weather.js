import axios from "axios";

const getWeather = async () => {
    console.log("Hello");
    const res = await axios.get("/weather");
    console.log(res.data);
    const weather = res.data;
    const day = weather[0].days[0];

    const temp = day.temp;
    const tempmin = day.tempmin;
    const tempmax = day.tempmax;
    const description = weather[0].description;
    const loc = weather[0].timezone;
    const icon = day.icon;

    document.querySelector(".temp").innerHTML = temp + " °F";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".location").innerHTML = loc
        .split("/")[1]
        .split("_")
        .join(" ");
    document.querySelector(".icon > img").src = `/images/${icon}.svg`;
    document.querySelector(".tempmin").innerHTML = tempmin;
    document.querySelector(".tempmax").innerHTML = tempmax;
};

getWeather();
