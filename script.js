window.onload = function () {
    alert("🐺 Selamat Datang di Website Resmi ZENITH RTX!");
};

// Efek tombol
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});
