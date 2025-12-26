function renderCart() {
  const cartContainer = document.querySelector('.cart-contact');
  const totalPriceEl = document.querySelector('.cart-price');

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p class="fw-bold">سبد خالی می‌باشد</p>';
    totalPriceEl.textContent = '';
    return;
  }

  let totalPrice = 0;

  cartItems.forEach(item => {
    if (item.quantity < 1) return;

    totalPrice += item.price * item.quantity;

    const card = document.createElement('div');
    card.className = 'card p-3 text-center m-3';

    card.innerHTML = `
      <div class="d-flex justify-content-center align-items-center gap-2">
        <button
          class="btn btn-outline-danger"
          onclick="removeItem('${item.id}')"
        >
          حذف
        </button>

        <p class="m-0">
          ${item.name} - قیمت: ${item.price} - تعداد: ${item.quantity}
        </p>

        <button
          class="btn btn-outline-primary"
          onclick="updateItem('${item.id}', 1)"
        >
          +
        </button>

        <button
          class="btn btn-outline-info"
          onclick="updateItem('${item.id}', -1)"
        >
          -
        </button>
      </div>
    `;

    cartContainer.appendChild(card);
  });

  totalPriceEl.textContent = `مجموع قیمت = ${totalPrice}`;
}

function removeitem(itemid) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== itemid);
    localStorage.setItem("cart", JSON.stringify(cart));
    show();
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


show();
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
loadA();