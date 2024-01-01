import { HomePage } from "./pages/home.mjs"
import { AchievementsPage } from "./pages/achievements.mjs"
import { ProgressPage } from "./pages/progress.mjs"
import { ErrorPage } from "./pages/error.mjs"

function loadContent(route) {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';

    switch (route) {
        case '':
            HomePage(contentDiv);
            break;
        case '#/home':
            HomePage(contentDiv);
            break;
        case '#/progress':
            ProgressPage(contentDiv);
            break;
        case '#/achievements':
            AchievementsPage(contentDiv);
            break;
        default:
            ErrorPage(contentDiv);
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const progressItem = document.querySelector(".item-1");
    const achievementsItem = document.querySelector(".item-2");
    const profilePicture = document.querySelector(".pfp");

    progressItem.addEventListener("click", function() {
        loadContent('/progress');
    });

    achievementsItem.addEventListener("click", function() {
        loadContent('/achievements');
    });

    profilePicture.addEventListener("click", function() {
        loadContent('/home');
    });

    window.addEventListener('hashchange', () => {
        loadContent(window.location.hash);
    });

    loadContent(window.location.hash);
});
