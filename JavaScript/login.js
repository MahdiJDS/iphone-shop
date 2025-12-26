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
function loginf(event) {
    event.preventDefault();
    const nameL = document.getElementById('nameL').value;
    const pasL = document.getElementById('pasL').value;

    const paslocal = localStorage.getItem(nameL);
    if (nameL, pasL) {

        if (paslocal === pasL) {
            pL.textContent = "ورود موفقیت‌آمیز بود!";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            pL.textContent = "نام کاربری یا رمز عبور اشتباه است!";
        };
    } else {
        pL.innerHTML = "فیلد ورودی خالی میباشد!!"
    }

    localStorage.setItem('isloginA', 'true');

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
