// Load Animation
window.onload = function() {
    setTimeout(function() {
        document.body.style.opacity = 1;
    }, 100);
};

//Display time on the home page
function updateDateTime() {
    let now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
}

updateDateTime();

setInterval(updateDateTime, 1000);