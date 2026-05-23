// SELECT IMAGES

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close-btn");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");


// CURRENT INDEX

let currentIndex = 0;


// OPEN LIGHTBOX

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});


// SHOW IMAGE

function showImage() {

    lightboxImage.src = galleryItems[currentIndex].src;

}


// CLOSE LIGHTBOX

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// NEXT BUTTON

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {

        currentIndex = 0;

    }

    showImage();

});


// PREVIOUS BUTTON

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryItems.length - 1;

    }

    showImage();

});


// CLICK OUTSIDE CLOSE

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// KEYBOARD NAVIGATION

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        // RIGHT ARROW

        if (e.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= galleryItems.length) {

                currentIndex = 0;

            }

            showImage();

        }

        // LEFT ARROW

        if (e.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex = galleryItems.length - 1;

            }

            showImage();

        }

        // ESC KEY

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});


// FILTER FUNCTIONALITY

const filterButtons = document.querySelectorAll(".filter-section button");

const galleryCards = document.querySelectorAll(".gallery-item");


// FILTER BUTTON CLICK

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE CLASS

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // GET FILTER VALUE

        const filterValue = button.textContent.toLowerCase();


        // FILTER IMAGES

        galleryCards.forEach((card) => {

            if (filterValue === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filterValue)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// DARK / LIGHT MODE

const themeToggle = document.querySelector(".theme-toggle");

const body = document.body;

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    // ICON CHANGE

    const icon = themeToggle.querySelector("i");

    if(body.classList.contains("light-mode")){

        icon.classList.remove("ri-moon-line");

        icon.classList.add("ri-sun-line");

    }
    else{

        icon.classList.remove("ri-sun-line");

        icon.classList.add("ri-moon-line");

    }

});
// EXPLORE CARD INTERACTIONS

const dynamicCard = document.getElementById("dynamic-card");

const designCard = document.getElementById("design-card");

const effectsCard = document.getElementById("effects-card");

const modal = document.querySelector(".info-modal");

const modalTitle = document.querySelector(".modal-title");

const modalDescription = document.querySelector(".modal-description");

const modalClose = document.querySelector(".modal-close");


// DYNAMIC GALLERY

dynamicCard.addEventListener("click", () => {

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

});


// MODERN DESIGN

designCard.addEventListener("click", () => {

    modal.style.display = "flex";

    modalTitle.textContent = "Modern Frontend Design";

    modalDescription.textContent =
    "This gallery is crafted using HTML, CSS, and JavaScript with futuristic UI principles including glassmorphism, responsive layouts, smooth transitions, masonry grids, animations, and interactive user experiences.";

});


// INTERACTIVE EFFECTS

effectsCard.addEventListener("click", () => {

    modal.style.display = "flex";

    modalTitle.textContent = "Interactive Effects";

    modalDescription.textContent =
    "This project includes hover effects, animated transitions, image filtering, lightbox previews, keyboard navigation, dark/light themes, responsive design systems, and immersive scrolling animations.";

});


// CLOSE MODAL

modalClose.addEventListener("click", () => {

    modal.style.display = "none";

});


// CLOSE OUTSIDE

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});
