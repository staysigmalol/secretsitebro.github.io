var params = new URLSearchParams(window.location.search);
function basePath(){
    var parts = window.location.pathname.split('/').filter(Boolean);
    var known = ['home','services','documents','qr','more','card','qrscan'];
    var first = parts[0] || '';
    return known.indexOf(first)>=0 ? '/' : '/' + first + '/';
}
function sendTo(url){
    var q = params.toString();
    var href = basePath() + url + '/';
    if (q) { href += '?' + q; }
    location.href = href;
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
