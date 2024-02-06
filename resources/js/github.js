import axios from "axios";

const getGithub = async (username = "alihakim773") => {
    const edit = document.querySelector(".github-edit");
    const changeBtn = document.querySelector(".github-user-select button");
    if (edit) {
        edit.removeEventListener("click", toggleModal);
    }
    if (changeBtn) {
        changeBtn.removeEventListener("click", changeUser);
    }

    const res = await axios.get("https://api.github.com/users/" + username);
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

    // Add event listeners
    edit.addEventListener("click", toggleModal);
    changeBtn.addEventListener("click", changeUser);

    function toggleModal() {
        const modal = document.querySelector(".github-user-select");
        modal.classList.toggle("hide");
    }

    function changeUser() {
        const modal = document.querySelector(".github-user-select");
        const changeInput = document.querySelector(".github-user-select input");

        modal.classList.toggle("hide");
        getGithub(changeInput.value);
    }
};

export default getGithub;

export const githubWidget = `
        <div gs-h='2' gs-w='3'>
            <div class="grid-stack-item-content" >
                <div class="widget github" id="github_widget">
                    <div class="header">
                        <div class="github-info">
                            <div class="github-logo">
                                <img src="/images/github.svg" alt="github">
                            </div>
                            <h2 class="github-title">Github 
                                <img class="github-edit" src="/images/edit.svg" />
                                <div class="github-user-select hide">
                                    <input type="text" placeholder="Enter github username"/>
                                    <button>Change</button>
                                </div>
                            </h2>
                        </div>
                        <div class="user-avatar">
                            <img src="#" alt="avatar">
                        </div>
                    </div>

                    <div class="profile">
                        <a target="_blank" href="#" class="username">Loading...</a>
                        <span class="dot">.</span>
                        <a target="_blank" class="repos"></a>
                    </div>
                    <div class="bio">Loading...</div>
                    <div class="follow">
                        <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                        </svg>  
                        <div class="followers">
                            <a target="_blank" href="#">Loading...</a>
                            <span class="follow-rest"> Followers</span>
                        </div>
                        .
                        <div class="following">
                            <a target="_blank" href="#">Loading...</a>
                            <span class="follow-rest"> Following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
