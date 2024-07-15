document.addEventListener("DOMContentLoaded", () => {
    // Price display functionality
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const priceRangeDisplay = document.getElementById("price-range-display");

    function updatePriceRange() {
        const minPrice = parseInt(minPriceInput.value);
        const maxPrice = parseInt(maxPriceInput.value);

        if (!isNaN(minPrice) && !isNaN(maxPrice) && minPrice <= maxPrice) {
            priceRangeDisplay.innerHTML = `<p>₦${minPrice} - ₦${maxPrice}</p>`;
        } else {
            priceRangeDisplay.innerHTML = `<p>Please enter a valid range.</p>`;
        }
    }

    maxPriceInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            updatePriceRange();
        }
    });
    

    // Image slider functionality
    const carousel = document.querySelector(".image-slider");
    const firstImg = carousel ? carousel.querySelectorAll(".corusel")[0] : null;
    const arrowIcons = document.querySelectorAll(".net-btn ion-icon");
    const showUnit = document.querySelector(".show-unit p");

    if (carousel && firstImg && showUnit) {
        let isDragStart = false, prevPageX, prevScrollLeft;
        let firstImgWidth = firstImg.clientWidth + 7; // Including margin-right

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                carousel.scrollLeft += icon.id === "prev-img" ? -firstImgWidth : firstImgWidth;
                updateShowUnit();
            });
        });

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            let positionDiff = e.pageX - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            updateShowUnit();
        };

        const dragStop = () => {
            isDragStart = false;
        };

        const updateShowUnit = () => {
            const totalUnits = carousel.querySelectorAll(".corusel").length;
            const currentUnit = Math.round(carousel.scrollLeft / firstImgWidth) + 1;
            showUnit.textContent = `${currentUnit}/${totalUnits} Units`;
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", updateShowUnit);

        // Initial update on load
        updateShowUnit();
    }

    
    /* FAQs functionality */
    const faqBtn = document.querySelectorAll(".faqBtn");

    faqBtn.forEach(function (faq) {
        faq.addEventListener("click", (e) => {
            const answer = e.currentTarget.parentElement.parentElement;
            answer.classList.toggle("active");
        });
    });

    const indicatorBtn = document.getElementsByClassName("in-btn");
    const inSlider = document.getElementById("in-slider");

    if (indicatorBtn && inSlider) {
        indicatorBtn[0].onclick = function () {
            inSlider.style.transform = "translateX(0px)";
            updatedActive(0);
        };
        indicatorBtn[1].onclick = function () {
            inSlider.style.transform = "translateX(-1300px)";
            updatedActive(1);
        };
        indicatorBtn[2].onclick = function () {
            inSlider.style.transform = "translateX(-2600px)";
            updatedActive(2);
        };
        indicatorBtn[3].onclick = function () {
            inSlider.style.transform = "translateX(-4000px)";
            updatedActive(3);
        };

        function updatedActive(btnActive) {
            for (let i = 0; i < indicatorBtn.length; i++) {
                if (i === btnActive) {
                    indicatorBtn[i].classList.add('active-btn');
                } else {
                    indicatorBtn[i].classList.remove('active-btn');
                }
            }
        }
    }

    const locationsID = [
        {
            phone: "Phone number",
            number: "08099789021",
            addressInfo: "Address",
            details: "Plot 1435, Adetokumbo Ademola street, Victoria Island, Lagos",
            acquisition: "Acquisition: Gateway",
            info: "Chioma Apple",
            info1: "9074564321",
            email: "romeo@gmail.com",
            leasingInfo: "Leasing: Gateway",
            leasingContact: "Tomiwa Geopary",
            leasingEmail: "yesmat@yahoo.com"
        },
        {
            phone: "Phone Number",
            number: "0904123798",
            addressInfo: "Address",
            details: "5, Glover Road, Ofure Abuja",
            acquisition: "Acquisition: Gateway",
            info: "Chioma Apple",
            info1: "9074564321",
            email: "romeo@gmail.com",
            leasingInfo: "Leasing: Gateway",
            leasingContact: "Tomiwa Geopary",
            leasingEmail: "yesmat@yahoo.com"
        },
        {
            phone: "Phone Number",
            number: "0904123798",
            addressInfo: "Address",
            details: "5, Glover Road, Ofure Abuja",
            acquisition: "Acquisition: Gateway",
            info: "Chioma Apple",
            info1: "9074564321",
            email: "romeo@gmail.com",
            leasingInfo: "Leasing: Gateway",
            leasingContact: "Tomiwa Geopary",
            leasingEmail: "yesmat@yahoo.com"
        }
    ];

    function showLocation(index) {
        const locationDetails = document.getElementById("location-details");

        if (!locationDetails) {
            console.error("locationDetails element not found!");
            return;
        }

        const locationMap = locationsID[index];

        locationDetails.innerHTML = `
            <div class="container-address">
                <div class="phone-content">
                    <div class="phone-info">
                        <h3>${locationMap.phone}</h3>
                        <p>${locationMap.number}</p>
                    </div>
                    <div class="details-content">
                        <h3>${locationMap.addressInfo}</h3>
                        <p>${locationMap.details}</p>
                    </div>
                </div>
                <div class="acquisition">
                    <div class="acquisition-con">
                        <h3>${locationMap.acquisition}</h3>
                        <h4>${locationMap.info}</h4>
                        <div class="you-num">
                            <ion-icon name="call-outline"></ion-icon>
                            <p>${locationMap.info1}</p>
                        </div>
                        <div class="you-num">
                            <ion-icon name="mail-outline"></ion-icon>
                            <p>${locationMap.email}</p>
                        </div>
                    </div>
                    <div class="leasing-info">
                        <h3>${locationMap.leasingInfo}</h3>
                        <h4>${locationMap.leasingContact}</h4>
                        <div class="you-num">
                            <ion-icon name="call-outline"></ion-icon>
                            <p>${locationMap.info1}</p>
                        </div>
                        <div class="you-num">
                            <ion-icon name="mail-outline"></ion-icon>
                            <p>${locationMap.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        locationDetails.style.display = "block";
    }

    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove toggle-active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('toggle-active'));
            // Add toggle-active class to the clicked button
            button.classList.add('toggle-active');
            showLocation(index);
        });
    });

    // Initialize the first location on load
    showLocation(0);
    toggleButtons[0].classList.add('toggle-active'); // Highlight the first button initially
});
