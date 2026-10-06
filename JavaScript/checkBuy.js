function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const cartContainer = document.querySelector('.cart-contact');
  const totalPriceEl = document.querySelector('.cart-price');

  if (!cartContainer || !totalPriceEl) return;

  const cartItems = getCart();
  console.log(cartItems)
  console.log(cartItems.length)
  cartContainer.innerHTML = '';

  if (cartItems.length == 0) {
    cartContainer.innerHTML = '<p class="fw-bold">سبد خالی می‌باشد</p>';
    totalPriceEl.textContent = '';
    return;
  }

  let totalPrice = 0;

  cartItems.forEach(item => {
    const query = Number(item.query);
    const price = Number(item.price);

    console.log(query , price)

    if (!Number.isFinite(query) || query < 1) return;
    if (!Number.isFinite(price) || price < 0) return;

    totalPrice += price * query;

    const card = document.createElement('div');
    card.className = 'card p-3 text-center m-3';

    const details = document.createElement('p');
    details.className = 'm-0';
    details.textContent =
      `${item.name} - قیمت: ${price} - تعداد: ${query}`;

    const controls = document.createElement('div');
    controls.className =
      'd-flex justify-content-center align-items-center gap-2';

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-outline-danger';
    removeButton.textContent = 'حذف';
    removeButton.addEventListener('click', () => removeItem(item.id));

    const increaseButton = document.createElement('button');
    increaseButton.className = 'btn btn-outline-primary';
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => updateItem(item.id, 1));

    const decreaseButton = document.createElement('button');
    decreaseButton.className = 'btn btn-outline-info';
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => updateItem(item.id, -1));

    controls.append(removeButton, details, increaseButton, decreaseButton);
    card.appendChild(controls);
    cartContainer.appendChild(card);
  });

  totalPriceEl.textContent = `مجموع قیمت = ${totalPrice} تومان`;
}
function removeItem(itemId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== itemId);

  saveCart(updatedCart);
  renderCart();
}

function update(itemid, chang) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let up = cart.find(item => item.id === itemid);
  if (up) {
    up.query += chang;
  }
  if (up.query <= 0) {
    cart = cart.filter(item => item.id !== itemid)
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  show();

}

function tasvie() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach(item => {
    if (item.query >= 1) {
      total += item.price * item.query;
    }
  })
  alert(`Thank you 
            خرید شما ${total} تومان`);

  show();

  setTimeout(() => {
    window.location.href = "BS.html"
  }, 1200)
}


// show();
function loadA() {
  const can = document.querySelectorAll('.can');
  console.log(can)
  const windos = window.innerHeight;
  console.log(windos)

  can.forEach(sec => {
    const root = sec.getBoundingClientRect();
    console.log(root)
    if (root.top <= windos - 50 && root.bottom >= 50) {
      let test = sec.classList.add('show');
      console.log(`test ${test}`);
    }

  });
}
window.addEventListener('load', loadA); // برای لود صفحه
window.addEventListener('scroll', loadA); // برای اسکرول
renderCart();