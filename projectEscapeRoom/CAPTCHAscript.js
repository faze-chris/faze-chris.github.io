const captchaTasks = [
  {
    task: " een kikker",
    success: 2,
    paths: [
      {text: "CAPTCHA/1/1.jpg", correct: true},
      {text: "CAPTCHA/1/2.jpg", correct: true},
      {text: "CAPTCHA/1/3.jpg", correct: false},
      {text: "CAPTCHA/1/4.jpg", correct: false},
      {text: "CAPTCHA/1/5.jpg", correct: false},
      {text: "CAPTCHA/1/6.jpg", correct: false}
    ]
  },
  {
    task: "een kat met stijl",
    success: 3,
    paths: [
      {text: "CAPTCHA/2/1.jpg", correct: true},
      {text: "CAPTCHA/2/2.jpg", correct: true},
      {text: "CAPTCHA/2/3.jpg", correct: false},
      {text: "CAPTCHA/2/4.jpg", correct: false},
      {text: "CAPTCHA/2/5.jpg", correct: false},
      {text: "CAPTCHA/2/6.jpg", correct: false}
    ]
  },
  {
    task: "een kat",
    success: 2,
    paths: [
      {text: "CAPTCHA/3/1.jpg", correct: false},
      {text: "CAPTCHA/3/2.jpg", correct: true},
      {text: "CAPTCHA/3/3.jpg", correct: false},
      {text: "CAPTCHA/3/4.jpg", correct: true},
      {text: "CAPTCHA/3/5.jpg", correct: false},
      {text: "CAPTCHA/3/6.jpg", correct: false}
    ]
  },
  {
    task: "een sneeuwman",
    success: 3,
    paths: [
      {text: "CAPTCHA/4/1.jpg", correct: false},
      {text: "CAPTCHA/4/2.jpg", correct: true},
      {text: "CAPTCHA/4/3.jpg", correct: false},
      {text: "CAPTCHA/4/4.jpg", correct: true},
      {text: "CAPTCHA/4/5.jpg", correct: true},
      {text: "CAPTCHA/4/6.jpg", correct: false}
    ]
  },
  {
    task: "een Kactus",
    success: 2,
    paths: [
      {text: "CAPTCHA/5/1.jpg", correct: false},
      {text: "CAPTCHA/5/2.jpg", correct: false},
      {text: "CAPTCHA/5/3.jpg", correct: false},
      {text: "CAPTCHA/5/4.jpg", correct: false},
      {text: "CAPTCHA/5/5.jpg", correct: true},
      {text: "CAPTCHA/5/6.jpg", correct: true}
    ]
  },
  {
    task: "Een kat met geld",
    success: 2,
    paths: [
      {text: "CAPTCHA/6/1.jpg", correct: false},
      {text: "CAPTCHA/6/2.jpg", correct: true},
      {text: "CAPTCHA/6/3.jpg", correct: false},
      {text: "CAPTCHA/6/4.jpg", correct: false},
      {text: "CAPTCHA/6/5.jpg", correct: true},
      {text: "CAPTCHA/6/6.jpg", correct: false}
    ]
  },
  {
    task: "Een kat met geld",
    success: 2,
    paths: [
      {text: "CAPTCHA/7/1.jpg", correct: false},
      {text: "CAPTCHA/7/2.jpg", correct: false},
      {text: "CAPTCHA/7/3.jpg", correct: true},
      {text: "CAPTCHA/7/4.jpg", correct: true},
      {text: "CAPTCHA/7/5.jpg", correct: false},
      {text: "CAPTCHA/7/6.jpg", correct: false}
    ]
  },
  {
    task: "Een kat met geld",
    success: 2,
    paths: [
      {text: "CAPTCHA/8/1.jpg", correct: true},
      {text: "CAPTCHA/8/2.jpg", correct: false},
      {text: "CAPTCHA/8/3.jpg", correct: false},
      {text: "CAPTCHA/8/4.jpg", correct: false},
      {text: "CAPTCHA/8/5.jpg", correct: true},
      {text: "CAPTCHA/8/6.jpg", correct: false}
    ]
  },
  {
    task: "Een kat met geld",
    success: 2,
    paths: [
      {text: "CAPTCHA/9/1.jpg", correct: false},
      {text: "CAPTCHA/9/2.jpg", correct: true},
      {text: "CAPTCHA/9/3.jpg", correct: true},
      {text: "CAPTCHA/9/4.jpg", correct: false},
      {text: "CAPTCHA/9/5.jpg", correct: false},
      {text: "CAPTCHA/9/6.jpg", correct: false}
    ]
  },
  {
    task: "Een hond met bril",
    success: 1,
    paths: [
      {text: "CAPTCHA/10/1.jpg", correct: false},
      {text: "CAPTCHA/10/2.jpg", correct: false},
      {text: "CAPTCHA/10/3.jpg", correct: true},
      {text: "CAPTCHA/10/4.jpg", correct: false},
      {text: "CAPTCHA/10/5.jpg", correct: false},
      {text: "CAPTCHA/10/6.jpg", correct: false}
    ]
  },
  {
    task: "Een hond met bril",
    success: 1,
    paths: [
      {text: "CAPTCHA/11/1.jpg", correct: false},
      {text: "CAPTCHA/11/2.jpg", correct: false},
      {text: "CAPTCHA/11/3.jpg", correct: false},
      {text: "CAPTCHA/11/4.jpg", correct: true},
      {text: "CAPTCHA/11/5.jpg", correct: false},
      {text: "CAPTCHA/11/6.jpg", correct: false}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/12/1.jpg", correct: true},
      {text: "CAPTCHA/12/2.jpg", correct: false},
      {text: "CAPTCHA/12/3.jpg", correct: false},
      {text: "CAPTCHA/12/4.jpg", correct: false},
      {text: "CAPTCHA/12/5.jpg", correct: true},
      {text: "CAPTCHA/12/6.jpg", correct: false}
    ]
  },
  {
    task: "Een eend",
    success: 1,
    paths: [
      {text: "CAPTCHA/13/1.jpg", correct: false},
      {text: "CAPTCHA/13/2.jpg", correct: true},
      {text: "CAPTCHA/13/3.jpg", correct: false},
      {text: "CAPTCHA/13/4.jpg", correct: false},
      {text: "CAPTCHA/13/5.jpg", correct: false},
      {text: "CAPTCHA/13/6.jpg", correct: false}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/14/1.jpg", correct: false},
      {text: "CAPTCHA/14/2.jpg", correct: false},
      {text: "CAPTCHA/14/3.jpg", correct: false},
      {text: "CAPTCHA/14/4.jpg", correct: true},
      {text: "CAPTCHA/14/5.jpg", correct: false},
      {text: "CAPTCHA/14/6.jpg", correct: true}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/15/1.jpg", correct: false},
      {text: "CAPTCHA/15/2.jpg", correct: true},
      {text: "CAPTCHA/15/3.jpg", correct: false},
      {text: "CAPTCHA/15/4.jpg", correct: true},
      {text: "CAPTCHA/15/5.jpg", correct: false},
      {text: "CAPTCHA/15/6.jpg", correct: false}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/16/1.jpg", correct: false},
      {text: "CAPTCHA/16/2.jpg", correct: true},
      {text: "CAPTCHA/16/3.jpg", correct: false},
      {text: "CAPTCHA/16/4.jpg", correct: false},
      {text: "CAPTCHA/16/5.jpg", correct: true},
      {text: "CAPTCHA/16/6.jpg", correct: false}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/17/1.jpg", correct: true},
      {text: "CAPTCHA/17/2.jpg", correct: false},
      {text: "CAPTCHA/17/3.jpg", correct: false},
      {text: "CAPTCHA/17/4.jpg", correct: false},
      {text: "CAPTCHA/17/5.jpg", correct: false},
      {text: "CAPTCHA/17/6.jpg", correct: true}
    ]
  },
  {
    task: "Een eend",
    success: 2,
    paths: [
      {text: "CAPTCHA/18/1.jpg", correct: false},
      {text: "CAPTCHA/18/2.jpg", correct: false},
      {text: "CAPTCHA/18/3.jpg", correct: true},
      {text: "CAPTCHA/18/4.jpg", correct: false},
      {text: "CAPTCHA/18/5.jpg", correct: true},
      {text: "CAPTCHA/18/6.jpg", correct: false}
    ]
  },
  {
    task: "Een varken",
    success: 2,
    paths: [
      {text: "CAPTCHA/19/1.jpg", correct: false},
      {text: "CAPTCHA/19/2.jpg", correct: false},
      {text: "CAPTCHA/19/3.jpg", correct: true},
      {text: "CAPTCHA/19/4.jpg", correct: false},
      {text: "CAPTCHA/19/5.jpg", correct: true},
      {text: "CAPTCHA/19/6.jpg", correct: false}
    ]
  },
  {
    task: "Een varken",
    success: 2,
    paths: [
      {text: "CAPTCHA/20/1.jpg", correct: false},
      {text: "CAPTCHA/20/2.jpg", correct: true},
      {text: "CAPTCHA/20/3.jpg", correct: false},
      {text: "CAPTCHA/20/4.jpg", correct: false},
      {text: "CAPTCHA/20/5.jpg", correct: true},
      {text: "CAPTCHA/20/6.jpg", correct: false}
    ]
  },
  {
    task: "Een varken",
    success: 2,
    paths: [
      {text: "CAPTCHA/21/1.jpg", correct: true},
      {text: "CAPTCHA/21/2.jpg", correct: false},
      {text: "CAPTCHA/21/3.jpg", correct: true},
      {text: "CAPTCHA/21/4.jpg", correct: false},
      {text: "CAPTCHA/21/5.jpg", correct: false},
      {text: "CAPTCHA/21/6.jpg", correct: false}
    ]
  },
  {
    task: "Een konijn",
    success: 2,
    paths: [
      {text: "CAPTCHA/22/1.jpg", correct: true},
      {text: "CAPTCHA/22/2.jpg", correct: true},
      {text: "CAPTCHA/22/3.jpg", correct: false},
      {text: "CAPTCHA/22/4.jpg", correct: false},
      {text: "CAPTCHA/22/5.jpg", correct: false},
      {text: "CAPTCHA/22/6.jpg", correct: false}
    ]
  },
  {
    task: "Een konijn",
    success: 2,
    paths: [
      {text: "CAPTCHA/23/1.jpg", correct: false},
      {text: "CAPTCHA/23/2.jpg", correct: false},
      {text: "CAPTCHA/23/3.jpg", correct: true},
      {text: "CAPTCHA/23/4.jpg", correct: true},
      {text: "CAPTCHA/23/5.jpg", correct: false},
      {text: "CAPTCHA/23/6.jpg", correct: false}
    ]
  },
  {
    task: "Een konijn",
    success: 2,
    paths: [
      {text: "CAPTCHA/24/1.jpg", correct: false},
      {text: "CAPTCHA/24/2.jpg", correct: false},
      {text: "CAPTCHA/24/3.jpg", correct: false},
      {text: "CAPTCHA/24/4.jpg", correct: true},
      {text: "CAPTCHA/24/5.jpg", correct: false},
      {text: "CAPTCHA/24/6.jpg", correct: true}
    ]
  },
  {
    task: "een varken",
    success: 2,
    paths: [
      {text: "CAPTCHA/25/1.jpg", correct: true},
      {text: "CAPTCHA/25/2.jpg", correct: false},
      {text: "CAPTCHA/25/3.jpg", correct: false},
      {text: "CAPTCHA/25/4.jpg", correct: false},
      {text: "CAPTCHA/25/5.jpg", correct: true},
      {text: "CAPTCHA/25/6.jpg", correct: false}
    ]
  },
  {
    task: "Een haan",
    success: 2,
    paths: [
      {text: "CAPTCHA/26/1.jpg", correct: false},
      {text: "CAPTCHA/26/2.jpg", correct: false},
      {text: "CAPTCHA/26/3.jpg", correct: true},
      {text: "CAPTCHA/26/4.jpg", correct: false},
      {text: "CAPTCHA/26/5.jpg", correct: false},
      {text: "CAPTCHA/26/6.jpg", correct: true}
    ]
  },
  {
    task: "Een haan",
    success: 2,
    paths: [
      {text: "CAPTCHA/27/1.jpg", correct: true},
      {text: "CAPTCHA/27/2.jpg", correct: false},
      {text: "CAPTCHA/27/3.jpg", correct: false},
      {text: "CAPTCHA/27/4.jpg", correct: false},
      {text: "CAPTCHA/27/5.jpg", correct: true},
      {text: "CAPTCHA/27/6.jpg", correct: false}
    ]
  },
  {
    task: "Een Koe",
    success: 2,
    paths: [
      {text: "CAPTCHA/28/1.jpg", correct: false},
      {text: "CAPTCHA/28/2.jpg", correct: true},
      {text: "CAPTCHA/28/3.jpg", correct: false},
      {text: "CAPTCHA/28/4.jpg", correct: false},
      {text: "CAPTCHA/28/5.jpg", correct: true},
      {text: "CAPTCHA/28/6.jpg", correct: false}
    ]
  },
  {
    task: "Een koe",
    success: 2,
    paths: [
      {text: "CAPTCHA/29/1.jpg", correct: false},
      {text: "CAPTCHA/29/2.jpg", correct: true},
      {text: "CAPTCHA/29/3.jpg", correct: true},
      {text: "CAPTCHA/29/4.jpg", correct: false},
      {text: "CAPTCHA/29/5.jpg", correct: false},
      {text: "CAPTCHA/29/6.jpg", correct: false}
    ]
  },
  {
    task: "Een koe",
    success: 2,
    paths: [
      {text: "CAPTCHA/30/1.jpg", correct: true},
      {text: "CAPTCHA/30/2.jpg", correct: false},
      {text: "CAPTCHA/30/3.jpg", correct: false},
      {text: "CAPTCHA/30/4.jpg", correct: false},
      {text: "CAPTCHA/30/5.jpg", correct: true},
      {text: "CAPTCHA/30/6.jpg", correct: false}
    ]
  },
  {
    task: "Een koe",
    success: 1,
    paths: [
      {text: "CAPTCHA/31/1.jpg", correct: true},
      {text: "CAPTCHA/31/2.jpg", correct: false},
      {text: "CAPTCHA/31/3.jpg", correct: false},
      {text: "CAPTCHA/31/4.jpg", correct: false},
      {text: "CAPTCHA/31/5.jpg", correct: false},
      {text: "CAPTCHA/31/6.jpg", correct: false}
    ]
  },
  {
    task: "Een zonnebloem",
    success: 2,
    paths: [
      {text: "CAPTCHA/32/1.jpg", correct: true},
      {text: "CAPTCHA/32/2.jpg", correct: false},
      {text: "CAPTCHA/32/3.jpg", correct: false},
      {text: "CAPTCHA/32/4.jpg", correct: false},
      {text: "CAPTCHA/32/5.jpg", correct: false},
      {text: "CAPTCHA/32/6.jpg", correct: true}
    ]
  },
  {
    task: "Een zonnebloem",
    success: 2,
    paths: [
      {text: "CAPTCHA/33/1.jpg", correct: true},
      {text: "CAPTCHA/33/2.jpg", correct: true},
      {text: "CAPTCHA/33/3.jpg", correct: false},
      {text: "CAPTCHA/33/4.jpg", correct: false},
      {text: "CAPTCHA/33/5.jpg", correct: false},
      {text: "CAPTCHA/33/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/34/1.jpg", correct: true},
      {text: "CAPTCHA/34/2.jpg", correct: false},
      {text: "CAPTCHA/34/3.jpg", correct: false},
      {text: "CAPTCHA/34/4.jpg", correct: false},
      {text: "CAPTCHA/34/5.jpg", correct: true},
      {text: "CAPTCHA/34/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/35/1.jpg", correct: true},
      {text: "CAPTCHA/35/2.jpg", correct: false},
      {text: "CAPTCHA/35/3.jpg", correct: false},
      {text: "CAPTCHA/35/4.jpg", correct: false},
      {text: "CAPTCHA/35/5.jpg", correct: true},
      {text: "CAPTCHA/35/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/36/1.jpg", correct: false},
      {text: "CAPTCHA/36/2.jpg", correct: true},
      {text: "CAPTCHA/36/3.jpg", correct: false},
      {text: "CAPTCHA/36/4.jpg", correct: false},
      {text: "CAPTCHA/36/5.jpg", correct: false},
      {text: "CAPTCHA/36/6.jpg", correct: true}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/37/1.jpg", correct: false},
      {text: "CAPTCHA/37/2.jpg", correct: false},
      {text: "CAPTCHA/37/3.jpg", correct: true},
      {text: "CAPTCHA/37/4.jpg", correct: true},
      {text: "CAPTCHA/37/5.jpg", correct: false},
      {text: "CAPTCHA/37/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/38/1.jpg", correct: true},
      {text: "CAPTCHA/38/2.jpg", correct: false},
      {text: "CAPTCHA/38/3.jpg", correct: true},
      {text: "CAPTCHA/38/4.jpg", correct: false},
      {text: "CAPTCHA/38/5.jpg", correct: false},
      {text: "CAPTCHA/38/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/39/1.jpg", correct: false},
      {text: "CAPTCHA/39/2.jpg", correct: false},
      {text: "CAPTCHA/39/3.jpg", correct: false},
      {text: "CAPTCHA/39/4.jpg", correct: true},
      {text: "CAPTCHA/39/5.jpg", correct: true},
      {text: "CAPTCHA/39/6.jpg", correct: false}
    ]
  },
  {
    task: "Een papegaai",
    success: 2,
    paths: [
      {text: "CAPTCHA/40/1.jpg", correct: false},
      {text: "CAPTCHA/40/2.jpg", correct: true},
      {text: "CAPTCHA/40/3.jpg", correct: true},
      {text: "CAPTCHA/40/4.jpg", correct: false},
      {text: "CAPTCHA/40/5.jpg", correct: false},
      {text: "CAPTCHA/40/6.jpg", correct: false}
    ]
  },
  {
    task: "Een cavia",
    success: 2,
    paths: [
      {text: "CAPTCHA/41/1.jpg", correct: true},
      {text: "CAPTCHA/41/2.jpg", correct: false},
      {text: "CAPTCHA/41/3.jpg", correct: false},
      {text: "CAPTCHA/41/4.jpg", correct: false},
      {text: "CAPTCHA/41/5.jpg", correct: false},
      {text: "CAPTCHA/41/6.jpg", correct: true}
    ]
  },
  {
    task: "Een cavia",
    success: 2,
    paths: [
      {text: "CAPTCHA/42/1.jpg", correct: false},
      {text: "CAPTCHA/42/2.jpg", correct: true},
      {text: "CAPTCHA/42/3.jpg", correct: false},
      {text: "CAPTCHA/42/4.jpg", correct: false},
      {text: "CAPTCHA/42/5.jpg", correct: true},
      {text: "CAPTCHA/42/6.jpg", correct: false}
    ]
  },
  {
    task: "Een cavia",
    success: 2,
    paths: [
      {text: "CAPTCHA/43/1.jpg", correct: false},
      {text: "CAPTCHA/43/2.jpg", correct: false},
      {text: "CAPTCHA/43/3.jpg", correct: true},
      {text: "CAPTCHA/43/4.jpg", correct: false},
      {text: "CAPTCHA/43/5.jpg", correct: true},
      {text: "CAPTCHA/43/6.jpg", correct: false}
    ]
  }
  ,
  {
    task: "Een panda",
    success: 1,
    paths: [
      {text: "CAPTCHA/44/1.jpg", correct: false},
      {text: "CAPTCHA/44/2.jpg", correct: false},
      {text: "CAPTCHA/44/3.jpg", correct: false},
      {text: "CAPTCHA/44/4.jpg", correct: false},
      {text: "CAPTCHA/44/5.jpg", correct: true},
      {text: "CAPTCHA/44/6.jpg", correct: false}
    ]
  },
  {
    task: "Een hond",
    success: 1,
    paths: [
      {text: "CAPTCHA/45/1.jpg", correct: true},
      {text: "CAPTCHA/45/2.jpg", correct: false},
      {text: "CAPTCHA/45/3.jpg", correct: false},
      {text: "CAPTCHA/45/4.jpg", correct: false},
      {text: "CAPTCHA/45/5.jpg", correct: false},
      {text: "CAPTCHA/45/6.jpg", correct: false}
    ]
  },
  {
    task: "Een hond",
    success: 2,
    paths: [
      {text: "CAPTCHA/46/1.jpg", correct: false},
      {text: "CAPTCHA/46/2.jpg", correct: true},
      {text: "CAPTCHA/46/3.jpg", correct: false},
      {text: "CAPTCHA/46/4.jpg", correct: false},
      {text: "CAPTCHA/46/5.jpg", correct: true},
      {text: "CAPTCHA/46/6.jpg", correct: false}
    ]
  },
  {
    task: "Een Egel",
    success: 1,
    paths: [
      {text: "CAPTCHA/47/1.jpg", correct: true},
      {text: "CAPTCHA/47/2.jpg", correct: false},
      {text: "CAPTCHA/47/3.jpg", correct: false},
      {text: "CAPTCHA/47/4.jpg", correct: false},
      {text: "CAPTCHA/47/5.jpg", correct: false},
      {text: "CAPTCHA/47/6.jpg", correct: false}
    ]
  },
  {
    task: "Een muis",
    success: 1,
    paths: [
      {text: "CAPTCHA/48/1.jpg", correct: false},
      {text: "CAPTCHA/48/2.jpg", correct: true},
      {text: "CAPTCHA/48/3.jpg", correct: false},
      {text: "CAPTCHA/48/4.jpg", correct: false},
      {text: "CAPTCHA/48/5.jpg", correct: false},
      {text: "CAPTCHA/48/6.jpg", correct: false}
    ]
  },
  {
    task: "jezelf",
    success: 1,
    paths: [
      {text: "CAPTCHA/49/1.jpg", correct: true},
      {text: "CAPTCHA/49/2.jpg", correct: false},
      {text: "CAPTCHA/49/3.jpg", correct: false},
      {text: "CAPTCHA/49/4.jpg", correct: false},
      {text: "CAPTCHA/49/5.jpg", correct: false},
      {text: "CAPTCHA/49/6.jpg", correct: false}
    ]
  },
  {
    task: "Een slak",
    success: 2,
    paths: [
      {text: "CAPTCHA/50/1.jpg", correct: false},
      {text: "CAPTCHA/50/2.jpg", correct: false},
      {text: "CAPTCHA/50/3.jpg", correct: true},
      {text: "CAPTCHA/50/4.jpg", correct: false},
      {text: "CAPTCHA/50/5.jpg", correct: true},
      {text: "CAPTCHA/50/6.jpg", correct: false}
    ]
  }
]

const checkboxElement = document.getElementById('checkbox');
const captchaBox = document.getElementById('captcha_box');
const captchaSuccess = document.getElementById('captcha_success');
const captchaError = document.getElementById('captcha_error');
const buttonRepeat = document.getElementById('button_repeat');
const captchaLargeBox = document.getElementById('captcha_large_box');
const findRandomElement = document.getElementById('find_random');
const arrImgNumbers = [0,1,2,3,4,5];

let arrChosenImgs = document.getElementsByClassName('gallery_img');
let shuffledCaptcha = captchaTasks.sort(() => Math.random() - .5);

let counter = 0;
let successMark = 0, errorMark = 0;

let shuffledArrImgNumbers = arrImgNumbers.sort(() => Math.random() - .1);

function bodyOnload() {

  startCaptcha();
}

function startCaptcha() {
  checkboxElement.checked = false;
  findRandomElement.textContent = shuffledCaptcha[0].task;

  Array.from(arrChosenImgs).forEach(img => {
  img.src = shuffledCaptcha[0].paths[shuffledArrImgNumbers[counter]].text;
  img.classList.add(shuffledCaptcha[0].paths[shuffledArrImgNumbers[counter]].correct);
    counter++;
   });
}

Array.from(arrChosenImgs).forEach(img => {
  img.addEventListener('click', () => {
    if (img.classList.contains('true')) {
      img.classList.add('hidden');
      successMark++;
      if (successMark == shuffledCaptcha[0].success){
        successCaptcha();
      }
    }
    else if (img.classList.contains('false')){
      errorMark++;
      if (errorMark > 1) {
        errorCaptcha();
      }
    }
      })
 });


function errorCaptcha() {
  captchaBox.classList.add('hidden');
  captchaLargeBox.classList.add('hidden');
  captchaError.classList.remove('hidden');
  resetHiddenImages();
}

function successCaptcha() {
  captchaBox.classList.add('hidden');
  captchaLargeBox.classList.add('hidden');
  captchaSuccess.classList.remove('hidden');
  resetHiddenImages();
}

function resetHiddenImages() {
  Array.from(arrChosenImgs).forEach(img => {
    img.classList.remove('hidden');
    img.classList.remove('true');
    img.classList.remove('false');
   });
}

buttonRepeat.addEventListener('click', () => {
  captchaBox.classList.remove('hidden');
  captchaLargeBox.classList.remove('hidden');
  captchaSuccess.classList.add('hidden');
  captchaError.classList.add('hidden');
  resetHiddenImages();
  shuffledCaptcha = captchaTasks.sort(() => Math.random() - .5);
  shuffledArrImgNumbers = arrImgNumbers.sort(() => Math.random() - .1);
  successMark = 0;
  errorMark = 0;
  counter = 0;
  startCaptcha();
});

checkboxElement.addEventListener('change', ()  => {
  if (checkboxElement.checked) {
    captchaLargeBox.classList.remove('hidden');
  }
  else {
    captchaLargeBox.classList.add('hidden');
  }
});

function mybut15() {

  document.location.href = 'escape(win).html'
}
function mybut16() {

  document.location.href = 'doodweb.html'
}