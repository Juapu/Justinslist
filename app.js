const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Wilson Clash",
    price: 199,
    img: "./img/clash.png",
    colors: [
      {
        code: "red",
      },
      {
        code: "gray",
      },
      {
        code: "black",
      },
    ],
  },
  {
    id: 2,
    title: "Wilson Blade",
    price: 249,
    img: "./img/blade.png",
    colors: [
      {
        code: "green",
      },
      {
        code: "black",
      },
      {
        code: "whitesmoke",
      },
    ],
  },
  {
    id: 3,
    title: "Wilson Pro Staff",
    price: 273,
    img: "./img/proStaff.png",
    colors: [
      {
        code: "black",
      },
      {
        code: "whitesmoke",
      },
      {
        code: "whitesmoke",
      },
    ],
  },
  {
    id: 4,
    title: "Wilson Ultra",
    price: 179,
    img: "./img/ultra.png",
    colors: [
      {
        code: "blue",
      },
      {
        code: "gray",
      },
      {
        code: "black",
      },
    ],
  },
]


productUpdate(0);

menuItems.forEach((item, index) =>
  item.addEventListener("click", () => {
    //change the current slide
    sliderWrapper.style.transform = `translateX(${-100*index}vw)`;

    //change the chosen product
    productUpdate(index);

  })
)

function productUpdate(index) {
  let chosenProduct = products[index];
  let title = document.querySelector(".productTitle");
  title.textContent = chosenProduct.title;
  let price = document.querySelector(".productPrice");
  price.textContent = "$" + chosenProduct.price;
  let img = document.querySelector(".productImg");
  img.src = chosenProduct.img;
  if (title.textContent === "Wilson Clash") {
    img.id = "clash";
  } else {
    img.id = "";
  }
  let currProductColors = document.querySelectorAll(".color");
  chosenProduct.colors.forEach((color, index) => {
    currProductColors[index].style.backgroundColor = color.code;
    bgColore = index;
  });
  let currentProductSizes = document.querySelectorAll(".size");
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
}

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=> {
  payment.style.display = "flex";
});

close.addEventListener("click", ()=> {
  payment.style.display = "none";
});
