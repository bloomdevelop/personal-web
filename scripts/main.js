document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const close_banner = document.getElementById("close_banner");
    const banner_closed = JSON.parse(window.localStorage.getItem("banner_closed"))
    const cursor = document.getElementById("cursor")
    const link = document.getElementById("link")

    if (banner_closed === true) {
        banner.style.display = "none";
    } else {
        close_banner.addEventListener("click", () => {
            window.localStorage.setItem("banner_closed", true)
            banner.style.display = "none";
        })
    }

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = 1
    })

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = 0
    })

    link.addEventListener("mouseenter", () => {
        cursor.style.width = "40px"
        cursor.style.height = "40px"
        cursor.style.borderRadius = "12px"
    })

    link.addEventListener("mouseleave", () => {
        cursor.style.width = "30px"
        cursor.style.height = "30px"
        cursor.style.borderRadius = "99px"
    })

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    })
})

