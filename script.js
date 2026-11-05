/* =========================================
   HARSHITHA BAKERY - JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* =========================================
   ROTATING QUOTES
   ========================================= */

const quotes = [

    "Life is short, eat something sweet! 🍰",

    "Happiness is freshly baked. 🧁",

    "A little sweetness makes every day better. ❤️",

    "Good things come from the oven. 🥐",

    "Bake the world a sweeter place. 🍪",

    "Every celebration deserves a delicious cake. 🎂",

    "Sweet moments begin at Harshitha Bakery. ✨",

    "Freshly baked, lovingly made. 💕"

];

let quoteIndex = 0;

const rotatingQuote =
    document.getElementById("rotatingQuote");

function changeQuote() {

    if (!rotatingQuote) return;

    rotatingQuote.style.opacity = "0";

    setTimeout(() => {

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }

        rotatingQuote.textContent =
            quotes[quoteIndex];

        rotatingQuote.style.opacity = "1";

    }, 500);
}

setInterval(changeQuote, 3000);


/* =========================================
   SCROLL ANIMATION
   ========================================= */

const animatedElements =
    document.querySelectorAll(
        ".special-card, .feature, .about-preview"
    );

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";

    observer.observe(element);

});


/* =========================================
   BUTTON CLICK EFFECT
   ========================================= */

const buttons =
    document.querySelectorAll(".btn, .small-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Harshitha Bakery. All Rights Reserved.`;

}
/* =========================================
   ONLINE ORDER SYSTEM
   ========================================= */

const productSelect =
    document.getElementById("product");

const quantityInput =
    document.getElementById("quantity");

const totalAmount =
    document.getElementById("totalAmount");

function calculateTotal() {

    if (!productSelect || !quantityInput || !totalAmount) {
        return;
    }

    const selectedOption =
        productSelect.options[
            productSelect.selectedIndex
        ];

    const price =
        Number(selectedOption.dataset.price) || 0;

    const quantity =
        Number(quantityInput.value) || 1;

    const total = price * quantity;

    totalAmount.textContent =
        "₹" + total.toLocaleString("en-IN");
}


if (productSelect) {
    productSelect.addEventListener(
        "change",
        calculateTotal
    );
}

if (quantityInput) {
    quantityInput.addEventListener(
        "input",
        calculateTotal
    );
}


/* =========================================
   ORDER SUBMISSION
   ========================================= */

const orderForm =
    document.getElementById("orderForm");

const orderPopup =
    document.getElementById("orderPopup");

const popupClose =
    document.getElementById("popupClose");

const popupMessage =
    document.getElementById("popupMessage");


if (orderForm) {

    orderForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "customerName"
                ).value;

            const product =
                productSelect.value;

            const quantity =
                quantityInput.value;

            const total =
                totalAmount.textContent;

            popupMessage.textContent =
                `Thank you ${name}! Your order for ${quantity} × ${product} has been placed successfully. Total amount: ${total}.`;

            orderPopup.classList.add("show");

            orderForm.reset();

            totalAmount.textContent = "₹0";

        }
    );

}


/* =========================================
   CLOSE POPUP
   ========================================= */

if (popupClose) {

    popupClose.addEventListener(
        "click",
        function () {

            orderPopup.classList.remove("show");

        }
    );

}


/* CLOSE WHEN CLICKING OUTSIDE */

if (orderPopup) {

    orderPopup.addEventListener(
        "click",
        function (event) {

            if (event.target === orderPopup) {

                orderPopup.classList.remove("show");

            }

        }
    );

}
/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm =
    document.getElementById("contactForm");

const contactPopup =
    document.getElementById("contactPopup");

const contactPopupClose =
    document.getElementById("contactPopupClose");

const contactPopupMessage =
    document.getElementById("contactPopupMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "contactName"
                ).value;

            const subject =
                document.getElementById(
                    "contactSubject"
                ).value;

            contactPopupMessage.textContent =
                `Hi ${name}! Your "${subject}" message has been received. Our Harshitha Bakery team will get back to you soon. ❤️`;

            contactPopup.classList.add("show");

            contactForm.reset();

        }
    );

}


if (contactPopupClose) {

    contactPopupClose.addEventListener(
        "click",
        function() {

            contactPopup.classList.remove("show");

        }
    );

}


if (contactPopup) {

    contactPopup.addEventListener(
        "click",
        function(event) {

            if (event.target === contactPopup) {

                contactPopup.classList.remove("show");

            }

        }
    );

}
/* =========================================
   GALLERY FILTER
   ========================================= */

const galleryFilters =
    document.querySelectorAll(".gallery-filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryFilters.forEach(button => {

    button.addEventListener("click", () => {

        galleryFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            const category =
                item.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

                item.style.animation =
                    "galleryAppear 0.5s ease";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   GALLERY LIGHTBOX
   ========================================= */

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


let currentImage = 0;

const galleryImages =
    Array.from(
        document.querySelectorAll(".gallery-item img")
    );


function showLightbox(index) {

    currentImage = index;

    const image =
        galleryImages[currentImage];

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxCaption.textContent =
        image.alt;

    lightbox.classList.add("show");

}


galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        showLightbox(index);

    });

});


function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    showLightbox(currentImage);

}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage =
            galleryImages.length - 1;
    }

    showLightbox(currentImage);

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        nextImage
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        previousImage
    );

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        () => {

            lightbox.classList.remove("show");

        }
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                lightbox.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* KEYBOARD CONTROLS */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox ||
            !lightbox.classList.contains("show")
        ) {
            return;
        }

        if (event.key === "Escape") {

            lightbox.classList.remove("show");

        }

        if (event.key === "ArrowRight") {

            nextImage();

        }

        if (event.key === "ArrowLeft") {

            previousImage();

        }

    }
);
/* =========================================
   REVIEW THANK YOU POPUP
   ========================================= */

const reviewForm =
    document.getElementById("reviewForm");

const reviewPopup =
    document.getElementById("reviewPopup");

const closeReviewPopup =
    document.getElementById("closeReviewPopup");


if (reviewForm) {

    reviewForm.addEventListener("submit", function(e) {

        e.preventDefault();

        reviewPopup.style.display = "flex";

        reviewForm.reset();

    });

}


if (closeReviewPopup) {

    closeReviewPopup.addEventListener("click", function() {

        reviewPopup.style.display = "none";

    });

}


/* Close popup when clicking outside */

if (reviewPopup) {

    reviewPopup.addEventListener("click", function(e) {

        if (e.target === reviewPopup) {

            reviewPopup.style.display = "none";

        }

    });

}