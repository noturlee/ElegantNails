document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("footer");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.body.offsetHeight;

        // Adjust the value (e.g., 50) based on how close to the end you want the user to scroll before showing the footer
        if (scrollPosition + windowHeight >= documentHeight - 50) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, i) => {
            const offset = i - index;
            item.style.transform = `translateX(${100 * offset}%)`;
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    showItem(currentIndex);

    document.getElementById("gallery").addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("next-btn") || target.parentNode.classList.contains("next-btn")) {
            nextItem();
        } else if (target.classList.contains("prev-btn") || target.parentNode.classList.contains("prev-btn")) {
            prevItem();
        }
    });
});
