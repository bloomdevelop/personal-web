const banner = document.getElementById("banner");
const close_banner = document.getElementById("close_banner");
const banner_closed = JSON.parse(window.localStorage.getItem("banner_closed"))

if (banner_closed === true) {
    banner.style.display = "none";
} else {
    close_banner.addEventListener("click", () => {
        window.localStorage.setItem("banner_closed", true)
        banner.style.display = "none";
    })
}