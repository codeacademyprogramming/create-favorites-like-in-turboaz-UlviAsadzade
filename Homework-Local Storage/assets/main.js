const images = document.querySelector('.images');
const selectButton = document.querySelector('.select');
const cars = [
    {
        id: 1,
        name: "Toyota Camry",
        price: 40900,
        year: 2019,
        imageSrc: "https://turbo.azstatic.com/uploads/f460x343/2021%2F07%2F29%2F11%2F52%2F00%2F481d06f9-b686-4188-9a06-f232831cfa47%2F37983_or21oexii6Yg1yempNmmcw.jpg"
    },

    {
        id: 2,
        name: "Range Rover",
        price: 159500,
        year: 2020,
        imageSrc: "https://turbo.azstatic.com/uploads/f460x343/2021%2F06%2F13%2F17%2F38%2F39%2Fe63593af-98a1-4850-ab5b-04eb96512511%2F16798_i3I46tFtGNBDMgqmsA7M4A.jpg"
    },

    {
        id: 3,
        name: "BMW X7 ",
        price: 121000,
        year: 2021,
        imageSrc: "https://turbo.azstatic.com/uploads/f460x343/2021%2F06%2F18%2F17%2F07%2F17%2F8b26e274-8b36-485c-a1e2-fd771843d830%2F3285_7X0zSfD2b6ArJ6neW1tX-w.jpg"
    },

    {
        id: 4,
        name: "Land Rover",
        price: 31000,
        year: 2010,
        imageSrc: "https://turbo.azstatic.com/uploads/f460x343/2020%2F10%2F14%2F12%2F22%2F55%2F6b3cb890-e672-4b5e-a905-b759acfd112c%2F99148_mvAXryF4XSkA1yg3S6OwjA.jpg"
    }
];


cars.forEach(car => {
    const carHTML = `<div class="col-3 box">
    <img src="${car.imageSrc}" alt="">
    <span class="price">${car.price} AZN</span>
    <span class="name">${car.name}</span>
    <span class="year">${car.year}</span>
    <button id=${car.id} class="btn btn-danger ">Add favorites</button>
    
</div>`

    images.innerHTML += carHTML;
})


const buttons = Array.from(document.querySelectorAll('.images .btn'));
let setArray = [];
if(localStorage.getItem('favorite')){
    setArray=JSON.parse(localStorage.getItem('favorite'))
}


buttons.forEach(button => {
    button.addEventListener('click', function () {
        const foundCar = cars.find(car => car.id === Number(button.id));
        if(button.innerText=='Add favorites'){
            button.innerText = "Delete from favorites";
            setArray.push(foundCar);
            localStorage.setItem('favorite', JSON.stringify(setArray))
        }
        else{
            button.innerText='Add favorites';
            let getArray = JSON.parse(localStorage.getItem('favorite'));
            setArray=getArray.filter(arr=>arr.id != foundCar.id);
            localStorage.setItem('favorite', JSON.stringify(setArray))
        }

    })

})

