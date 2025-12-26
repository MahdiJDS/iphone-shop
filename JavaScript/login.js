// DOM
const sil = document.querySelector('.col-md-12');
let loginF = document.getElementById('loginF');
let regasterF = document.getElementById('regasterF');
const swich = document.querySelectorAll('.swich');
const btnlogin = document.getElementById('btnL');
const btnregaster = document.getElementById('btnR');
let pL = document.getElementById('pL');
let pR = document.getElementById('pR');
let event = 0;
function Toggle() {
    loginF.classList.toggle('hidden');
    loginF.classList.toggle('show');
    regasterF.classList.toggle('hidden');
    regasterF.classList.toggle('show');
}

// Switch Forms
swich.forEach((btn) => {
    btn.addEventListener('click', Toggle);
});



// Register
function handleRegister(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('nameR');
  const passwordInput = document.getElementById('pasR');
  const phoneInput = document.getElementById('phone');
  const messageEl = document.getElementById('pR');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();

  const PHONE_REGEX = /^09\d{9}$/;

  // Validation
  if (!username || !password || !PHONE_REGEX.test(phone)) {
    messageEl.textContent = 'لطفاً همه فیلدها را به‌درستی پر کنید!';
    return;
  }

  // Check existing user
  if (localStorage.getItem(username)) {
    messageEl.textContent = `کاربر ${username} قبلاً ثبت شده است!`;
    setTimeout(Toggle, 1000);
    return;
  }

  // Save user
  localStorage.setItem(username, password);
  messageEl.textContent = `کاربر ${username} با موفقیت ثبت شد!`;

  setTimeout(Toggle, 1000);
}

btnregaster.addEventListener('click', handleRegister);


// Login
function handleLogin(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('nameL');
  const passwordInput = document.getElementById('pasL');
  const messageEl = document.getElementById('pL');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    messageEl.textContent = 'فیلدهای ورودی نباید خالی باشند!';
    return;
  }

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    messageEl.textContent = 'ورود موفقیت‌آمیز بود!';
    localStorage.setItem('isloginA', 'true');

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  } else {
    messageEl.textContent = 'نام کاربری یا رمز عبور اشتباه است!';
  }
}


btnlogin.addEventListener('click', loginf);

//سانسور شماره   
function validateAndMaskPhone() {
  const phoneInput = document.getElementById('phone');
  const phoneNumber = phoneInput.value.trim();

  const PHONE_REGEX = /^09\d{9}$/;
  const isValidPhone = PHONE_REGEX.test(phoneNumber);

  console.log('Phone valid:', isValidPhone);

  if (!isValidPhone) {
    alert('شماره تلفن معتبر وارد کنید!');
    phoneInput.focus();
    return;
  }

  const maskedPhone = phoneNumber.replace(
    /(\d{4})\d{3}(\d{4})/,
    '$1***$2'
  );

  alert(maskedPhone);
}
