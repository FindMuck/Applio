var GradioMicIconFix = false;
var defaultApplioURL = 'http://127.0.0.1:6969/#%F0%9F%8D%8F';
function isDefaultApplioURL() {
    var currentURL = window.location.href;
    if (currentURL.startsWith(defaultApplioURL) && currentURL.length > defaultApplioURL.length) {
        window.location.replace(defaultApplioURL);
    }
    if (!currentURL.includes('?__theme=dark')) {
        var cleanApplioURL = currentURL.split('/').slice(0, 3).join('/');
        window.location.replace(cleanApplioURL + '/?__theme=dark');
    } else {
        var cleanURLApplio = currentURL.split('?')[0];
        history.pushState({}, document.title, cleanURLApplio + '#%F0%9F%8D%8F');
    }
}
isDefaultApplioURL();
window.addEventListener('hashchange', isDefaultApplioURL);
function applyStyleToComponent14() {
    if (!GradioMicIconFix) {
        var component14 = document.getElementById("component-14");
        if (component14) {
            component14.style.display = "block";
            GradioMicIconFix = true;
            observer.disconnect();
        }
    }
}
var observerConfig = { childList: true, subtree: true };
var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
        if (mutation.type === "childList") {
            applyStyleToComponent14();
        }
    }
});
observer.observe(document.documentElement, observerConfig);
