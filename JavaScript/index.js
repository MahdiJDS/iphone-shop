


//نمایش محتوا اسکرول
const VISIBILITY_OFFSET = 50;

function handleSectionVisibility() {
  const sections = document.querySelectorAll('section');
  const viewportHeight = window.innerHeight;

  sections.forEach(section => {
    const { top, bottom } = section.getBoundingClientRect();

    const isVisible =
      top <= viewportHeight - VISIBILITY_OFFSET &&
      bottom >= VISIBILITY_OFFSET;

    section.classList.toggle('visible', isVisible);
  });
}

// Run on initial load and scroll
window.addEventListener('load', handleSectionVisibility);
window.addEventListener('scroll', handleSectionVisibility);

// Initial check (for safety)
handleSectionVisibility();



//سبد خرید
function addtocart(button) {
    const parent = button.parentElement;
    console.log(parent);
    const itemid = parent.getAttribute('data-id');
    const itemprice = parseInt(parent.getAttribute('data-price'));
    const itemname = parent.getAttribute('data-name');



    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let find = cart.find(item => item.id === itemid);
    if (find) {
        find.query++;
    } else {
        cart.push({ id: itemid, name: itemname, price: itemprice, query: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    const alert = button.closest('.contact').querySelector('.alert');
    console.log(alert);
    if (alert) {
        alert.innerHTML = "محصول مورد نظر اضافه شد";
        alert.classList.remove('d-none');
        document.getElementById('islogin').classList.remove('d-none');

    };
    setTimeout(() => {
        alert.classList.add('d-none')
    }, 2500);
}

//راستی ازمایی ورود 
const islog = document.getElementById('islogin');
islog.addEventListener('click', () => {
    const isloging = localStorage.getItem('isloginA');
    console.log(isloging)
    if (isloging === 'true') {
        window.location.href = "checkoytBS.html";
    }
    else {
        alert("ثبت نام نکرده اید");
        console.log("کاربر وارد نشده است. هدایت به صفحه ثبت‌نام...");
        window.location.href = "loginBS.html";

    }
})

//تایپو گرافی
const type = document.querySelector('.typing');
const menu = ["iPHone 16", "iPHone 16 Pro", "iPHone 16 Pro Max"];

let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    if (charIndex < menu[wordIndex].length) {
        type.textContent += menu[wordIndex][charIndex];
        charIndex++;



        setTimeout(typeWord, 100);
    } else {
        setTimeout(deletWord, 1000);
    }
}

function deletWord() {
    if (charIndex > 0) {
        type.textContent = menu[wordIndex].substring(0, charIndex - 1);
        charIndex--;


        setTimeout(deletWord, 50);
    } else {
        wordIndex = (wordIndex + 1) % menu.length;
        setTimeout(typeWord, 500);
    }

}

typeWord();


//اسکرول فعلی
const progressBar = document.getElementById('progress-bar');
function BarScroll() {
    const topsrtoll = window.scrollY;
    const higthscroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const up = (topsrtoll / higthscroll) * 100;
    progressBar.style.width = `${up}%`;
}

window.addEventListener('scroll', BarScroll);


//نوبار متعییر
const nav = document.getElementById('nav');
let lastscrool = 0;
window.addEventListener('scroll', () => {
    const height = window.scrollY;
    if (height > lastscrool) {
        nav.classList.add('hidden')
    } else {
        nav.classList.remove('hidden');
    }

    lastscrool = height;
});


//search
const search = document.getElementById('search');
const sections = document.querySelectorAll('section');
const sugest = document.querySelector('.sugest');

const Products = ['intro', 'reviews', 'insert', 'call', 'rate', 'pricing'];

search.addEventListener('keyup', () => {
    const query = search.value.toLowerCase();
    console.log(query);
    sugest.innerHTML = '';
    sugest.style.display = 'none';


    if (query) {
        const fillproduct = Products.filter(Product =>
            Product.toLowerCase().startsWith(query)
        );
        console.log(fillproduct);

        if (fillproduct.length > 0) {
            sugest.style.display = 'block';
            fillproduct.forEach(Product => {
                const li = document.createElement('li');
                li.textContent = Product;
                console.log(li.textContent);
                li.addEventListener('click', () => {
                    console.log('clicked');
                    search.value = Product;
                    sugest.innerHTML = '';
                    sugest.style.display = 'none';
                    scrolling(Product);
                });
                sugest.appendChild(li);
            })
        }
    }
});

function scrolling(productId) {
    let section = document.getElementById(productId);
    console.log(section);
    if (section) {
        sections.forEach(sec => {
        });
        section.scrollIntoView({ behavior: "smooth", block: "start" });


    }
    console.log('done');

}

//شمارنده
function isvalue(el) {
    let rect = el.getBoundingClientRect();
    console.log("وضعیت نمایش:", rect.top, rect.bottom); // برای تست
    console.log('scrool')
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function startcounts(count) {
    if (count.dataset.started) {
        return;
    } else {
        count.dataset.started = "true";
    }

    let trget = parseInt(count.getAttribute("data-target"));
    console.log(trget);
    let num = 0;
    speed = Math.max(50, 2000 / trget);

    let set = setInterval(() => {
        count.innerHTML = num;
        if (num >= trget) {
            clearInterval(set);
        }
        num++;
    }, speed);
}

function check() {
    let counts = document.querySelectorAll('#count');
    console.log(counts);
    counts.forEach(count => {
        if (isvalue(count)) {
            startcounts(count);
        }
    })
}

window.addEventListener("scroll", check);
window.addEventListener("load", check);