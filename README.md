# 🛒🔥 iPhone Shop Landing Page — README

An **interactive, animated, and stylish landing page** built with pure **HTML, CSS (Bootstrap & custom styles), and JavaScript**.
This project is not just a static page — it's a **mini web app** with cart management, login/register system, animations, and modern UI effects.

---


### 🎬 Animations & Interactions

* **Scroll-based animations**: Sections fade in/out when scrolling.
* **Dynamic progress bar**: A scroll progress indicator at the top of the page.
* **Navbar behavior**: Auto-hide on scroll down, show on scroll up.
* **Typing effect**: Animated typography cycling through *iPhone models* (`iPhone 16`, `iPhone 16 Pro`, `iPhone 16 Pro Max`).
* **Counters**: Smooth animated counters that start when visible.
* **Smooth scrolling**: Auto scroll to sections when clicking search results.

### 🛒 Cart & Shopping System

* Add products to cart with **localStorage persistence**.
* Update quantity (`+` / `-` buttons).
* Remove items from cart.
* Calculate **total price** dynamically.
* Cart preview & checkout simulation with **thank you message**.

### 🔐 Authentication (LocalStorage Based)

* **Register** with username, password, and phone validation (`09XXXXXXXXX`).
* **Phone number masking** for privacy (`0912***5678`).
* **Login system** with credential check from localStorage.
* **Redirect on login** to main page.
* Auto-check login status before proceeding to checkout.

### 🔎 Smart Search

* Search bar with **auto-suggestions** for sections (e.g., `intro`, `pricing`).
* Click a suggestion → smooth scrolls to that section.

### 📱 Responsive & Stylish

* Built with **Bootstrap 5** grid & components.
* **Glassmorphism UI elements** for modern look.
* Alerts, buttons, and smooth feedback animations.

---

## ⚙️ Tech Stack

* **HTML5** — Structure
* **CSS3 / Bootstrap 5** — Styling & Layout
* **JavaScript (ES6)** — Interactivity, Animations, Cart & Auth logic
* **LocalStorage API** — Cart & Login persistence

---

## 🚀 How to Run

```bash
# Clone repository
git clone https://github.com/MahdiJDS/iphone-shop.git

# Navigate to project folder
cd iphone-shop

# Open in browser (just open index.html)
```

No build tools required. Just **open in browser** and enjoy ✨

---

## 📌 Folder Structure

```
├── html/
│   ├── index.html
│   ├── checkBuy.html
│   └── login.html
├── javaScript/  
│   ├── index.js    
│   ├── checkBuy.js   
│   └──  login.js         
└── img/            
```

---

## 🎮 Demo Workflow

[🔗 View Demo](https://MahdiJDS.github.io/iphone-shop)

1. Open `index.html` → Browse iPhone models.
2. Add products to cart → Mini cart updates in real-time.
3. Try **scroll animations, typing effect, and progress bar**.
4. Checkout → Redirects to login if not authenticated.
5. Register/Login → Save credentials in `localStorage`.
6. Final checkout shows **thank you message** and clears cart.

---

## 🎨 UI Highlights

* **Glassmorphism Menus** 🧊
* **Magic Scroll Animations** ✨
* **Interactive Cart** 🛒
* **Typing Hero Section** ⌨️
* **Smart Search** 🔍
* **Dynamic Counters** 🔢

---


## 🏆 Why This Project is Special

This isn’t just a landing page — it’s a **mini e-commerce demo app** 🎯
Perfect for practicing:

* DOM manipulation
* UI/UX with animations
* LocalStorage persistence
* Login/Register logic

---

## 🧑‍💻 Developer

- [MahdiJDS on GitHub](https://github.com/MahdiJDS)  
- Email: mahdijahed56@gmail.com  

🔥 Made with ❤️, MahdiJDS✨

---