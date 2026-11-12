// DOM
const loginFormElement = document.getElementById('loginF');
const registerFormElement = document.getElementById('regasterF');

const switchButtons = document.querySelectorAll('.swich');

const loginButton = document.getElementById('btnL');
const registerButton = document.getElementById('btnR');

function Toggle() {
  loginF.classList.toggle('hidden');
  loginF.classList.toggle('show');
  regasterF.classList.toggle('hidden');
  regasterF.classList.toggle('show');
}

// Switch Forms
switchButtons.forEach((btn) => {
  btn.addEventListener('click', Toggle);
});

// ساخت کلید اختصاصی کاربر
function getUserKey(username) {
  return `user:${username.trim()}`;
}

// ذخیره کاربر
function saveUser(username, password) {
  const userKey = getUserKey(username);

  if (localStorage.getItem(userKey) !== null) {
    return false;
  }

  localStorage.setItem(userKey, password);

  return true;
}

// دریافت رمز ذخیره‌شده کاربر
function getUserPassword(username) {
  const userKey = getUserKey(username);

  return localStorage.getItem(userKey);
}

function isValidPhone(phone) {
  return /^09\d{9}$/.test(phone);
}

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


  // Validation
  if (!username || !password || !isValidPhone(phone)) {
    messageEl.textContent = 'لطفاً همه فیلدها را به‌درستی پر کنید!';
    return;
  }


  // ذخیره کاربر
  const isUserSaved = saveUser(username, password);

  if (!isUserSaved) {
    messageEl.textContent = `کاربر ${username} قبلاً ثبت شده است!`;
    return;
  }

  messageEl.textContent = `کاربر ${username} با موفقیت ثبت شد!`;

  setTimeout(Toggle, 1000);
}

if (registerFormElement) {
  registerFormElement.addEventListener('submit', handleRegister);
}

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


  // دریافت رمز ذخیره‌شده کاربر
  const storedPassword = getUserPassword(username);

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


if (loginFormElement) {
  loginFormElement.addEventListener('submit', handleLogin);
}
//سانسور شماره   
function validateAndMaskPhone() {
  const phoneInput = document.getElementById('phone');

  if (!phoneInput) {
    return;
  }

  const phoneNumber = phoneInput.value.trim();

  if (!isValidPhone(phoneNumber)) {
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
