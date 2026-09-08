const products = [
  // Fresh Produce (7 items)
  { id: 1, name: "Fresh Red Apples (1kg)", category: "produce", price: 180, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300" },
  { id: 2, name: "Organic Bananas (1 Dozen)", category: "produce", price: 60, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300" },
  { id: 3, name: "Fresh Carrots (1kg)", category: "produce", price: 50, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300" },
  { id: 4, name: "Broccoli (500g)", category: "produce", price: 90, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300" },
  { id: 5, name: "Ripe Tomatoes (1kg)", category: "produce", price: 40, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300" },
  { id: 6, name: "Fresh Spinach Bunch", category: "produce", price: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300" },
  { id: 7, name: "Hass Avocado (Piece)", category: "produce", price: 120, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300" },

  // Dairy & Bakery (6 items)
  { id: 8, name: "Whole Milk (1L)", category: "dairy", price: 66, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300" },
  { id: 9, name: "Cheddar Cheese Block", category: "dairy", price: 250, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300" },
  { id: 10, name: "Fresh White Bread", category: "dairy", price: 45, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
  { id: 11, name: "Amul Butter (200g)", category: "dairy", price: 115, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300" },
  { id: 12, name: "Greek Yogurt (400g)", category: "dairy", price: 150, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300" },
  { id: 13, name: "Butter Croissants (4 Pcs)", category: "dairy", price: 180, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300" },

  // Beverages (6 items)
  { id: 14, name: "Fresh Orange Juice (1L)", category: "beverages", price: 120, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300" },
  { id: 15, name: "Sparkling Water (750ml)", category: "beverages", price: 80, image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=300" },
  { id: 16, name: "Green Tea Box (25 Bags)", category: "beverages", price: 220, image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300" },
  { id: 17, name: "Roasted Coffee Beans (250g)", category: "beverages", price: 450, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300" },
  { id: 18, name: "Cola Soda (2.25L)", category: "beverages", price: 95, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300" },
  { id: 19, name: "Energy Drink (250ml)", category: "beverages", price: 110, image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=300" },

  // Snacks & Packaged (6 items)
  { id: 20, name: "Classic Potato Chips", category: "snacks", price: 35, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300" },
  { id: 21, name: "Dark Chocolate Bar", category: "snacks", price: 120, image: "https://images.unsplash.com/photo-1582176647440-3b22304c4f39?w=300" },
  { id: 22, name: "Roasted Almonds (200g)", category: "snacks", price: 280, image: "https://images.unsplash.com/photo-1508061252220-333e634125b2?w=300" },
  { id: 23, name: "Oatmeal Cookies", category: "snacks", price: 150, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300" },
  { id: 24, name: "Penne Pasta (500g)", category: "snacks", price: 110, image: "https://images.unsplash.com/photo-1621996346565-e325d0d34204?w=300" },
  { id: 25, name: "Pasta Sauce Jar", category: "snacks", price: 190, image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=300" },

  // Household (6 items)
  { id: 26, name: "Dishwashing Liquid (500ml)", category: "household", price: 115, image: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=300" },
  { id: 27, name: "Laundry Detergent (1kg)", category: "household", price: 240, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300" },
  { id: 28, name: "Kitchen Paper Towels (2 Rolls)", category: "household", price: 120, image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=300" },
  { id: 29, name: "Garbage Bags Pack", category: "household", price: 90, image: "https://images.unsplash.com/photo-1618051286991-38435efc1c51?w=300" },
  { id: 30, name: "Surface Cleaner Spray", category: "household", price: 160, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300" },
  { id: 31, name: "Scrub Sponge Pack", category: "household", price: 50, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300" },

  // Personal Care (7 items)
  { id: 32, name: "Nourishing Shampoo (350ml)", category: "care", price: 290, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300" },
  { id: 33, name: "Handmade Bath Soap Bar", category: "care", price: 85, image: "https://images.unsplash.com/photo-1607006482602-76ca0fd2f88d?w=300" },
  { id: 34, name: "Herbal Toothpaste", category: "care", price: 110, image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=300" },
  { id: 35, name: "Hand Sanitizer (200ml)", category: "care", price: 99, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=300" },
  { id: 36, name: "Body Lotion (250ml)", category: "care", price: 275, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300" },
  { id: 37, name: "Facial Foam Wash", category: "care", price: 195, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300" },
  { id: 38, name: "Sunscreen Lotion SPF 50", category: "care", price: 399, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300" }
];

// Initialize Cart from LocalStorage
function getCart() {
  return JSON.parse(localStorage.getItem("bhavana_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("bhavana_cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.innerText = count;
}

// Render Products (For items.html)
function renderProducts(category = "all") {
  // Checks both product-list (items.html) and product-grid (fallback)
  const grid = document.getElementById("product-list") || document.getElementById("product-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  
  // If no button element is explicitly passed, find the button matching the target category
  if (btn) {
    btn.classList.add("active");
  } else if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  }
  
  renderProducts(cat);
}

function addToCart(id) {
  let cart = getCart();
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert(`${product.name} added to cart!`);
}

// Render Cart Page (For cart.html)
function renderCartPage() {
  const tableBody = document.getElementById("cart-table-body");
  if (!tableBody) return;

  const cart = getCart();
  tableBody.innerHTML = "";

  if (cart.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Your cart is empty.</td></tr>`;
    document.getElementById("subtotal").innerText = "₹0.00";
    document.getElementById("tax").innerText = "₹0.00";
    document.getElementById("total").innerText = "₹0.00";
    return;
  }

  let subtotal = 0;
  cart.forEach(item => {
    const total = item.price * item.quantity;
    subtotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>₹${item.price.toFixed(2)}</td>
      <td class="cart-actions">
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span style="margin: 0 8px;">${item.quantity}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </td>
      <td>₹${total.toFixed(2)}</td>
      <td><button class="btn" style="background:#ef4444; padding:0.3rem 0.6rem;" onclick="removeItem(${item.id})">Remove</button></td>
    `;
    tableBody.appendChild(row);
  });

  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  document.getElementById("subtotal").innerText = `₹${subtotal.toFixed(2)}`;
  document.getElementById("tax").innerText = `₹${gst.toFixed(2)}`;
  document.getElementById("total").innerText = `₹${grandTotal.toFixed(2)}`;
}

function changeQty(id, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
  }
  saveCart(cart);
  renderCartPage();
}

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
}

function generateBill() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const receiptBody = document.getElementById("receipt-body");
  receiptBody.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    receiptBody.innerHTML += `
      <div class="receipt-line">
        <span>${item.name} x${item.quantity}</span>
        <span>₹${itemTotal.toFixed(2)}</span>
      </div>
    `;
  });

  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  document.getElementById("receipt-date").innerText = new Date().toLocaleString("en-IN");
  document.getElementById("receipt-total").innerText = `₹${grandTotal.toFixed(2)}`;
  document.getElementById("receipt-modal").style.display = "flex";

  // Clear Cart After Checkout
  localStorage.removeItem("bhavana_cart");
  updateCartBadge();
}

function closeReceipt() {
  document.getElementById("receipt-modal").style.display = "none";
  renderCartPage();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderProducts();
  renderCartPage();
});