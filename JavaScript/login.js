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
function regasterf(event) {
    event.preventDefault(); // جلوگیری از ریلود شدن صفحه
    const pasR = document.getElementById('pasR').value;
    const nameR = document.getElementById('nameR').value;
    const phone = document.getElementById('phone').value;
    let isphone = /^09\d{9}$/;
    console.log(phone);
    console.log(isphone.test(phone));
    if (nameR, pasR, isphone.test(phone)) {
        if (localStorage.getItem(nameR)) {
            pR.textContent = `کاربر ${nameR} قبلاً ثبت شده است!`;
            setTimeout(() => {
                Toggle();
            }, 1000);
        }
        else {
            localStorage.setItem(nameR, pasR);
            pR.textContent = `کاربر ${nameR} با موفقیت ثبت شد!`;
            setTimeout(() => {
                Toggle();
            }, 1000);
        }
    }
}

btnregaster.addEventListener('click', regasterf);
btnregaster.addEventListener('click', sasPhone);

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
