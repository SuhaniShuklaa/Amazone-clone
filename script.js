
// PRODUCT SEARCH
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function searchProducts() {
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();
    const boxes = document.querySelectorAll(".shop-section .box");
    let found = 0;

    boxes.forEach(function(box) {
        const heading = box.querySelector("h2");
        const title = heading ? heading.textContent.toLowerCase() : "";

        if (query === "" || title.includes(query)) {
            box.style.display = "";
            found++;
        } else {
            box.style.display = "none";
        }
    });

    let message = document.getElementById("search-message");

    if (!message) {
        message = document.createElement("p");
        message.id = "search-message";
        message.style.padding = "15px";

        const shopSection = document.querySelector(".shop-section");
        if (shopSection) {
            shopSection.before(message);
        }
    }

    if (message) {
        if (query === "") {
            message.textContent = "Showing all categories";
        } else if (found === 0) {
            message.textContent = "No matching category found.";
        } else {
            message.textContent = found + " matching categories found.";
        }
    }
}

if (searchButton) {
    searchButton.addEventListener("click", searchProducts);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
}


// BACK TO TOP
const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// FOOTER INFORMATION
const footerInformation = {
    about: {
        title: "About Us",
        text: "Welcome to our Amazon Clone! This website is a BCA mini project demonstrating an online shopping interface, product categories, and search functionality."
    },
    careers: {
        title: "Careers",
        text: "This section represents career opportunities on an online shopping platform. It is included for educational demonstration."
    },
    press: {
        title: "Press Releases",
        text: "This section represents announcements and updates for our educational shopping website project."
    },
    contact: {
        title: "Contact Us",
        text: "For questions about this student project, please contact the project developer directly."
    },
    feedback: {
        title: "Feedback",
        text: "Your suggestions can help improve the website design, product categories, and user experience."
    },
    help: {
        title: "Help Center",
        text: "Use the search bar to find categories such as Clothes, Furniture, and Electronics. Browse the homepage to explore the available categories."
    },
    clothes: {
        title: "Clothes",
        text: "Explore the Clothes category on our homepage to view the clothing collection."
    },
    electronics: {
        title: "Electronics",
        text: "Explore the Electronics category on our homepage to view the electronics section."
    },
    returns: {
        title: "Returns Policy",
        text: "This is a demo shopping website. Real orders and product returns are not available in this educational project."
    },
    orders: {
        title: "My Orders",
        text: "This project does not process real orders. This section demonstrates how an order information page could work."
    }
};

const footerLinks = document.querySelectorAll(".footer-info");
const footerBox = document.getElementById("footer-info-box");
const footerTitle = document.getElementById("footer-info-title");
const footerText = document.getElementById("footer-info-text");
const footerClose = document.getElementById("footer-info-close");

footerLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const info = footerInformation[link.dataset.info];

        if (info && footerBox && footerTitle && footerText) {
            footerTitle.textContent = info.title;
            footerText.textContent = info.text;
            footerBox.style.display = "block";

            footerBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

if (footerClose && footerBox) {
    footerClose.addEventListener("click", function() {
        footerBox.style.display = "none";
    });
}
