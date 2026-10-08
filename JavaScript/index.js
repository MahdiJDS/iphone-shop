


//نمایش محتوا اسکرول
const VISIBILITY_OFFSET = 50;
const sections = document.querySelectorAll('section');

function handleSectionVisibility() {
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
const loginButtons = document.querySelectorAll('.isLogin');

loginButtons.forEach((btn) => {
    btn.addEventListener('click', () => {

        const isLoggedIn =
            localStorage.getItem('isloginA') === 'true';

        if (!isLoggedIn) {
            alert('ثبت‌نام نکرده‌اید');
            window.location.href = 'login.html';
        }

    });
});


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

    if (scrollableHeight <= 0) {
        progressBar.style.width = '0%';
        return;
    }

    const up = (topsrtoll / higthscroll) * 100;
    progressBar.style.width = `${up}%`;
}

window.addEventListener('scroll', BarScroll);


//نوبار متعییر
const nav = document.getElementById('nav');

let lastScrollY = window.scrollY;

function updateNavbar() {
    if (!nav) {
        return;
    }

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
        nav.classList.remove('hidden');
        lastScrollY = 0;
        return;
    }

    if (currentScrollY > lastScrollY) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', updateNavbar);


//search

function showSuggestions(products) {
    if (!suggestionBox) {
        return;
    }

    suggestionBox.innerHTML = '';

    if (products.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }

    suggestionBox.style.display = 'block';

    products.forEach((product) => {
        const listItem = document.createElement('li');

        listItem.textContent = product;

        listItem.addEventListener('click', () => {
            searchInput.value = product;

            suggestionBox.innerHTML = '';
            suggestionBox.style.display = 'none';

            scrollToSection(product);
        });

        suggestionBox.appendChild(listItem);
    });
}

function handleSearch() {
    if (!searchInput || !suggestionBox) {
        return;
    }

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (!query) {
        suggestionBox.innerHTML = '';
        suggestionBox.style.display = 'none';
        return;
    }

    const filteredProducts = productSections.filter(
        (product) =>
            product.toLowerCase().startsWith(query)
    );

    showSuggestions(filteredProducts);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) {
        return;
    }

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

const searchInput = document.getElementById('search');
const suggestionBox = document.querySelector('.sugest');

const productSections = [
    'intro',
    'reviews',
    'insert',
    'call',
    'rate',
    'pricing',
];

if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
}


//شمارنده
function isvalue(el) {
    let rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function startcounts(count) {
    if (count.dataset.started) {
        return;
    } else {
        count.dataset.started = "true";
    }

    let trget = parseInt(count.getAttribute("data-target"));
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
    counts.forEach(count => {
        if (isvalue(count)) {
            startcounts(count);
        }
    })
}

window.addEventListener("scroll", check);
window.addEventListener("load", check);