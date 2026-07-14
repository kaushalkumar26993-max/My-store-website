// Cart Count Save in Local Storage

let cartCount = localStorage.getItem("cartCount");

if (cartCount === null) {
    cartCount = 0;
}

cartCount = Number(cartCount);

const cartButtons = document.querySelectorAll(".cart-btn");
const cartLink = document.querySelector(".nav-links a[href='cart.html']");

// शुरू में Cart Count दिखाओ
cartLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        // Save in Local Storage
        localStorage.setItem("cartCount", cartCount);

        // Update Navbar
        cartLink.innerHTML =
        `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;

        alert("✅ Product Added Successfully!");

    });

}); // Save Product in Local Storage

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;

        const price = card.querySelector(".price").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name,
            price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

    });
});// Show Products in Cart

const cartContainer = document.getElementById("cartItems");

if (cartContainer) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        cartContainer.innerHTML = "<h3>Your Cart is Empty 🛒</h3>";

    } else {

        let total = 0;
        cartContainer.innerHTML = "";

        cart.forEach((item, index) => {

            total += Number(item.price);

            cartContainer.innerHTML += `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <button onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>
            `;
        });

        cartContainer.innerHTML += `
            <hr>
            <h2>Total: ₹${total}</h2>
        `;
    }
}

// Remove Product
function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}
// Auto Slider

let slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(nextSlide,3000);