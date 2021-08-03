console.log("Invert-X is on")
if (origin.includes(".google.com")) {
    let cnt = 0;
    const timer = setInterval(function () {
        let frame = [...document.getElementsByTagName("iframe")].find(c => c.src.includes("tasks.google"));
        if (frame) {
            frame.style.filter = "invert(1) brightness(1.2) hue-rotate(175deg)";
        }
        if (cnt == 100 || frame) {
            console.log("Timer closed on", cnt);
            clearInterval(timer);
        }
        cnt++
    }, 500);
}