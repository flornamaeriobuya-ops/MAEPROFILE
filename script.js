
document.addEventListener("DOMContentLoaded", function () {

    // Show the current year in the footer.
    document.querySelectorAll(".year").forEach(function (item) {
        item.textContent = new Date().getFullYear();
    });

    // Welcome message.
    const helloBtn = document.getElementById("helloBtn");
    const helloMessage = document.getElementById("helloMessage");

    if (helloBtn && helloMessage) {
        helloBtn.addEventListener("click", function () {
            helloMessage.textContent =
                "Hi there! Thank you for visiting my portfolio. Have a nice day! ♡";
        });
    }

    // Display the current date and time.
    const dateTime = document.getElementById("dateTime");

    function updateDateTime() {
        if (dateTime) {
            dateTime.textContent = new Date().toLocaleString("en-PH", {
                dateStyle: "medium",
                timeStyle: "short"
            });
        }
    }

    updateDateTime();

    if (dateTime) {
        setInterval(updateDateTime, 60000);
    }

    // Dark and light mode.
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️ Light Mode";
            } else {
                themeBtn.textContent = "🌙 Dark Mode";
            }
        });
    }

    // Read More and Read Less.
    const readBtn = document.getElementById("readBtn");
    const moreInfo = document.getElementById("moreInfo");

    if (readBtn && moreInfo) {
        readBtn.addEventListener("click", function () {
            moreInfo.classList.toggle("show");

            if (moreInfo.classList.contains("show")) {
                readBtn.textContent = "Read Less";
            } else {
                readBtn.textContent = "Read More";
            }
        });
    }

    // Show and hide project details.
    document.querySelectorAll(".detailsBtn").forEach(function (button) {
        button.addEventListener("click", function () {
            const details = button.nextElementSibling;
            details.classList.toggle("show");

            if (details.classList.contains("show")) {
                button.textContent = "Hide Details";
            } else {
                button.textContent = "Show Details";
            }
        });
    });

    // Study tip button.
    const tipBtn = document.getElementById("tipBtn");
    const tipMessage = document.getElementById("tipMessage");

    if (tipBtn && tipMessage) {
        tipBtn.addEventListener("click", function () {
            tipMessage.textContent =
                "Study tip: Practice coding a little every day and test your work in the browser. ♡";
        });
    }

    // Project checklist button.
    const checklistBtn = document.getElementById("checklistBtn");
    const checklistMessage = document.getElementById("checklistMessage");

    if (checklistBtn && checklistMessage) {
        checklistBtn.addEventListener("click", function () {
            checklistMessage.textContent =
                "Checklist: Add the real activity title, description, screenshot, and what you learned.";
        });
    }

    // Friendly message on the Contact page.
    const contactBtn = document.getElementById("contactBtn");
    const contactMessage = document.getElementById("contactMessage");

    if (contactBtn && contactMessage) {
        contactBtn.addEventListener("click", function () {
            contactMessage.textContent =
                "Hello! Thank you for visiting Mae's portfolio. ♡";
        });
    }

    // Mobile navigation menu.
    const menuBtn = document.getElementById("menuBtn");
    const navigation = document.getElementById("navigation");

    if (menuBtn && navigation) {
        menuBtn.addEventListener("click", function () {
            navigation.classList.toggle("open");
        });
    }

    // Back-to-top button.
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 250) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
    // Simple image slideshow.
    const slideImage = document.getElementById("slideImage");
    const nextSlide = document.getElementById("nextSlide");
    const prevSlide = document.getElementById("prevSlide");

    const slidePhotos = [
        "images/profile.jpg",
        "images/project-prelim.jpg",
        "images/project-midterm.jpg",
        "images/project-final.jpg"
    ];

    let slideIndex = 0;

    function showSlide() {
        if (slideImage) {
            slideImage.onerror = function () {
                this.onerror = null;
                this.src = "https://placehold.co/450x300/f8dce8/8c4d68?text=Add+Photos";
            };
            slideImage.src = slidePhotos[slideIndex];
        }
    }

    if (slideImage && nextSlide && prevSlide) {
        nextSlide.addEventListener("click", function () {
            slideIndex = (slideIndex + 1) % slidePhotos.length;
            showSlide();
        });

        prevSlide.addEventListener("click", function () {
            slideIndex = (slideIndex - 1 + slidePhotos.length) % slidePhotos.length;
            showSlide();
        });
    }


});

