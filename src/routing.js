import { home, projects, notfound } from './pages.js'

function router() {
    const app = document.getElementById('app');
    const route = window.location.hash.substr(1);

    app.innerHTML = ''; 

    switch(route) {
        case '/home':
            home(app);
            break;
        case '/projects':
            projects(app);
            break;
        default:
            notfound(app);
            break;
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);