const API_PATH = 'https://islomapi.uz/api/present/day?region=navoiy';




// GET  ELEMENT FROM DOM
const elForm = document.querySelector('.js-form');
const elFormSelect = document.querySelector('.js-select');
const elPresenstTime = document.querySelector('.js-present-time');
const elAreaText = document.querySelector('.js-area')
const elBomdodTime = document.querySelector('.bomdod-time');
const elQuyoshTime = document.querySelector('.quyosh-time');
const elPeshinTime = document.querySelector('.peshin-time');
const elAsrTime = document.querySelector('.asr-time');
const elShomTime = document.querySelector('.shom-time');
const elXuftonTime = document.querySelector('.xufton-time');

setInterval(() => {
    const date = new Date();

    elPresenstTime.innerHTML =
        String(date.getHours()).padStart(2, "0") +
        ":" +
        String(date.getMinutes()).padStart(2, "0") +
        ":" +
        String(date.getSeconds()).padStart(2, "0");
}, 1000)

function getTime() {
    fetch(API_PATH)
        .then((res) => res.json())
        .then((data) => {
            elAreaText.innerHTML = data.region;
            elBomdodTime.innerHTML = data.times.tong_saharlik;
            elQuyoshTime.innerHTML =data.times.quyosh;
            elPeshinTime.innerHTML = data.times.peshin;
            elAsrTime.innerHTML =data.times.asr;
            elShomTime.innerHTML =data.times.shom_iftor;
            elXuftonTime.innerHTML =data.times.hufton;
        })
        .catch((err) =>console.log(err))

}

getTime();

