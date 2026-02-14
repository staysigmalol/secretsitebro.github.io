var params = new URLSearchParams(window.location.search);
function _mwBasePrefix(){
    var host = String(location.hostname || '');
    var parts = String(location.pathname || '').split('/').filter(Boolean);
    if (host.endsWith('github.io') && parts.length >= 1){
        return '/' + parts[0];
    }
    return '';
}
function sendTo(url){
    var base = _mwBasePrefix();
    var target = new URL(location.href);
    target.pathname = base + '/' + url;
    target.search = params.toString();
    location.href = target.toString();
}
document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) { return 1; }
    if (/android/i.test(userAgent)) { return 2; }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { return 3; }
    return 4;
}
if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px"
}
