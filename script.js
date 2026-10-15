
/* =====================================
   HOMEPAGE PRODUCT SEARCH
===================================== */

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function searchProducts() {
    if (!searchInput) return;

    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter a product name!");
        return;
    }

    // Open products page and pass the search query
    window.location.href =
        "product.html?search=" + encodeURIComponent(query);
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


/* =====================================
   SEE MORE / SEE LESS
===================================== */

document.querySelectorAll(".shop-section .box").forEach(function(box) {
    const seeMore = box.querySelector(".see-more-btn");
    const content = box.querySelector(".box-content");
    const heading = box.querySelector("h2");

    if (!seeMore || !content) return;

    const extraContent = document.createElement("div");
    extraContent.className = "extra-category-content";
    extraContent.style.display = "none";
    extraContent.style.marginTop = "12px";
    extraContent.style.padding = "10px";
    extraContent.style.backgroundColor = "#f3f3f3";
    extraContent.style.borderRadius = "6px";

    const extraTitle = document.createElement("h3");
    const categoryName = heading
        ? heading.textContent.trim()
        : "Products";

    extraTitle.textContent = "Explore " + categoryName;

    const extraText = document.createElement("p");
    extraText.textContent =
        "Discover more in our " + categoryName +
        " category. This is a demonstration feature of our shopping website.";

    extraContent.appendChild(extraTitle);
    extraContent.appendChild(extraText);
    content.appendChild(extraContent);

    seeMore.addEventListener("click", function() {
        const isHidden = extraContent.style.display === "none";

        extraContent.style.display = isHidden ? "block" : "none";
        seeMore.textContent = isHidden ? "See less" : "See more";
    });
});


/* =====================================
   BACK TO TOP
===================================== */

const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================
   FOOTER INFORMATION
===================================== */

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
        text: "Use the search bar to find available products. Browse the homepage to explore product categories."
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
/* NAVBAR OPTIONS */

const navOptions = document.querySelectorAll(".nav-option");

const navContent = {
    deals: {
        title: "Today's Deals",
        text: "Welcome to Today's Deals! Explore our demo offers on Clothes, Electronics, Beauty Products and more."
    },
    service: {
        title: "Customer Service",
        text: "Welcome to Customer Service! Here you can find help with shopping, orders, returns and frequently asked questions."
    },
    registry: {
        title: "Registry",
        text: "Create your demo gift registry for birthdays, weddings and special occasions."
    },
    giftcards: {
        title: "Gift Cards",
        text: "Explore our demo gift cards. Choose a gift card amount: ₹500, ₹1,000 or ₹2,000."
    },
    sell: {
        title: "Sell on Amazon Clone",
        text: "This is a demo seller section for our BCA mini project. Product selling and real payments are not enabled."
    }
};

navOptions.forEach(function(option) {
    option.style.cursor = "pointer";

    option.addEventListener("click", function() {
        const page = navContent[option.dataset.page];

        if (!page) return;

        let popup = document.getElementById("nav-content-popup");

        if (!popup) {
            popup = document.createElement("div");
            popup.id = "nav-content-popup";
            popup.style.cssText =
                "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);" +
                "width:85%;max-width:400px;background:white;padding:24px;" +
                "border-radius:12px;box-shadow:0 4px 25px #0005;z-index:9999;" +
                "font-family:Arial,sans-serif;";

            document.body.appendChild(popup);
        }

        popup.innerHTML = "";

        const heading = document.createElement("h2");
        heading.textContent = page.title;

        const description = document.createElement("p");
        description.textContent = page.text;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.cssText =
            "background:#febd69;border:0;padding:10px 22px;" +
            "border-radius:6px;cursor:pointer;";

        closeButton.addEventListener("click", function() {
            popup.remove();
        });

        popup.append(heading, description, closeButton);
    });
});
