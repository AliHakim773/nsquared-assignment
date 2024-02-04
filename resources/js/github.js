import axios from "axios";

const getGithub = async () => {
    const res = await axios.get("https://api.github.com/users/alihakim773");
    const github = res.data;

    const name = github.name;
    const login = github.login;
    const avatar = github.avatar_url;
    const bio = github.bio;
    const followers = github.followers;
    const following = github.following;
    const repos = github.public_repos;

    document.querySelector(".user-avatar > img").src = avatar;
    document.querySelector(".username").innerHTML = name;
    document.querySelector(".username").href = `https://github.com/${login}`;
    document.querySelector(".bio").innerHTML = bio;
    document.querySelector(".followers  > a").innerHTML = followers;
    document.querySelector(
        ".followers > a"
    ).href = `https://github.com/${login}?tab=followers`;
    document.querySelector(".following  > a").innerHTML = following;
    document.querySelector(
        ".following > a"
    ).href = `https://github.com/${login}?tab=following`;
    document.querySelector(".repos").innerHTML = repos + " repo";
    document.querySelector(
        ".repos"
    ).href = `https://github.com/${login}?tab=repositories`;
};

getGithub();
