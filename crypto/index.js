$(function () {
    var priceEls = {
        bitcoin: document.getElementById("bitcoin"),
        ethereum: document.getElementById("ethereum"),
        dogecoin: document.getElementById("dogecoin")
    };

    function formatINR(value) {
        return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
    }

    var settings = {
        url: "https://api.coingecko.com/api/v3/simple/price",
        method: "GET",
        data: {
            ids: "bitcoin,ethereum,dogecoin",
            vs_currencies: "inr"
        },
        dataType: "json",
        crossDomain: true
    };

    $.ajax(settings)
        .done(function (response) {
            Object.keys(priceEls).forEach(function (coin) {
                var price = response && response[coin] && response[coin].inr;
                priceEls[coin].textContent = price ? formatINR(price) : "N/A";
            });
        })
        .fail(function () {
            Object.keys(priceEls).forEach(function (coin) {
                priceEls[coin].textContent = "N/A";
            });
        });

    // Mobile nav toggle
    var navToggle = document.getElementById("navToggle");
    var navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            var isOpen = navMenu.classList.toggle("open");
            navToggle.classList.toggle("active", isOpen);
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }
});
