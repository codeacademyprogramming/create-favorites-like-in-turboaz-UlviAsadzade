window.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("color-preference")) {
        document.body.style.backgroundColor =
            localStorage.getItem("color-preference");
    } else {
        localStorage.setItem("color-preference", "white");
    }
    const button = document.getElementById('color-preference-button');
    const resetButton = document.getElementById('reset-button');


    button.onclick = function () {
        document.body.style.backgroundColor = 'black';
        localStorage.setItem('color-preference', 'black');
    };

    resetButton.onclick = () => {
        localStorage.removeItem('color-preference');
        window.location.reload();
        // localStorage.clear();
    };
});

const ads = [
    {
        id: 1,
        name: 'Jeep GrandCherroke',
        price: 30000,
        currency: 'AZN',
        isVip: false,
        createdAt: '11-11-2011',
        imageSrc: ''
    }
]

ads.forEach(ad => {
    const adHTML = `
    <button class="btn btn-dark" id="color-preference-button">
    ${ad.price}
  </button>
  <button class="btn btn-danger" id="reset-button">
    Reset color ${ad.isVip}
  </button>
  `


})