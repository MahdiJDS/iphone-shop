function show() {
    const contact = document.querySelector('.cart-contact');
    // localStorage.clear();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    contact.innerHTML = "";
    if (cart.length === 0) {
        contact.innerHTML = `<p class="fw-bold"> سبد خالی میباشد </p>`;
        return;
    }
    else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('card', 'p-3', 'text-center', 'm-3');
            if (item.query >= 1) {
                div.innerHTML = ` <div class="d-flex justify-content-center">
                                          <button onclick="removeitem('${item.id}')" class="btn btn-outline-danger m-2">حذف</button>
                                          <p class="m-2"> ${item.name} - قیمت : ${item.price} - تعداد :${item.query} </p>
                                          <button onclick="update('${item.id}', 1)"class="btn btn-outline-primary m-2">+</button>                                   
                                          <button onclick="update('${item.id}', -1)"class="btn btn-outline-info m-2">-</button>
                                          </div>
                                      `;
                contact.appendChild(div);
             


            }
        });


        let total = 0;
        cart.forEach(item => {
            if (item.query >= 1) {
                total += item.price * item.query;
            }
        })
      
        document.querySelector('.cart-price').innerHTML = `مجموع قیمت = ${total}`;
    };
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