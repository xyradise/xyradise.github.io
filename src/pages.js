export function home(app) {
    app.innerHTML = '<h1>About</h1><p>Hello, I am currently an undergraduate computer science major. I have interests in chess, mathematics, and programming.</p>';
    return app;
}

export function projects(app) {
    app.innerHTML = '<h1>Projects</h1><p>Currently working on some...</p>';
    return app;
}

export function notfound(app) {
    app.innerHTML = '<h1>Looks like you are lost...</h1><p>Page not found.</p>';
    return app;
}