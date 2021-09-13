let isHide = true;
const menu = document.getElementById("menu");

function toggleMenu() {
  if (isHide) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }

  isHide = !isHide;
}


/// inner menu generate
const menuArray = [
  {
    title: "Ноутбуки и компьютеры",
    items: [
      {
        title: "Noutbuk",
        url: "/shop/noutbuki",
        items: [
          { title: "noutbuk 1", url: "/shop/protsessory" },
          { title: "noutbuk 2", url: "/shop/protsessory" },
          { title: "noutbuk 3", url: "/shop/protsessory" },
        ],
      },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori", url: "/shop/protsessory" },
          { title: "Protsessori", url: "/shop/protsessory" },
          { title: "Protsessori", url: "/shop/protsessory" },
        ],
      },
    ],
  },
  {
    title: "Смартфоны и гаджеты",
    items: [
      { title: "Noutbuk", url: "/shop/noutbuki" },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk klaviatura",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori1", url: "/shop/protsessory" },
          { title: "Protsessori2", url: "/shop/protsessory" },
          { title: "Protsessori3", url: "/shop/protsessory" },
        ],
      },
    ],
  },
  {
    title: "Телевизоры и аудио",
    items: [
      { title: "Noutbuk", url: "/shop/noutbuki" },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk k",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori1", url: "/shop/protsessory" },
          { title: "Protsessori2", url: "/shop/protsessory" },
          { title: "Protsessori3", url: "/shop/protsessory" },
        ],
      },
    ],
  },
  {
    title: "Техника для кухни",
    items: [
      { title: "Noutbuk", url: "/shop/noutbuki" },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk k",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori1", url: "/shop/protsessory" },
          { title: "Protsessori2", url: "/shop/protsessory" },
          { title: "Protsessori3", url: "/shop/protsessory" },
        ],
      },
    ],
  },
  {
    title: "Красота и здоровье",
    items: [
      { title: "Noutbuk", url: "/shop/noutbuki" },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk k",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori1", url: "/shop/protsessory" },
          { title: "Protsessori2", url: "/shop/protsessory" },
          { title: "Protsessori3", url: "/shop/protsessory" },
        ],
      },
    ],
  },
  {
    title: "Техника для дома",
    items: [
      { title: "Noutbuk", url: "/shop/noutbuki" },
      { title: "Monoblock", url: "/shop/monobloki" },
      {
        title: "Noutbuk k",
        url: "/shop/noutbuki",
        items: [
          { title: "Protsessori1", url: "/shop/protsessory" },
          { title: "Protsessori2", url: "/shop/protsessory" },
          { title: "Protsessori3", url: "/shop/protsessory" },
        ],
      },
    ],
  },
];

const list = document.getElementById("list");
const domen = "https://goodzone.uz";

menuArray.map((root1, index1) => {
  const li = document.createElement("li");
  li.className = "dropdown1";
  li.innerHTML = root1.title;

  const ul = document.createElement("ul");
  ul.className = "dropitem1"
  root1.items?.map((root2) => {
    const li2 = document.createElement("li");
    li2.className = "dropdown2";
    li2.innerHTML = ` <a href="${domen + root2.url}">${root2.title}</a>`;

    const ul3 = document.createElement("ul");
    ul3.className = "dropitem2"
    root2.items?.map((root3) => {
      const li3 = document.createElement("li");
      li3.innerHTML = ` <a href="${domen + root3.url}">${root3.title}</a>`;
      ul3.appendChild(li3);
    });
    root2.items && li2.appendChild(ul3);

    ul.appendChild(li2);
  });

  root1.items && li.appendChild(ul);

  list.appendChild(li);
});

const popularProductsData = [
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/90793b56-3830-43c9-9165-d1316960ddfb",
    productName: "Утюг Philips GC3802/27/BI",
    price: 1028200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/5d6b6147-123f-4af1-b3bf-65a2b2a3ffdc",
    productName: "Стиральная машина Haier HW60-1029A",
    price: 4028000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/39c4d320-2682-47ee-a97b-b403161ede7b",
    productName: "Блендер Panasonic MX-GX1011WTQ",
    price: 604200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/a34b9226-fb2c-49a1-b0c4-e8727996d510",
    productName: "Колонка XIAOMI XMYX02YM (GOLD)",
    price: 127200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/0942cc31-da06-40bb-9153-19e65ff21814",
    productName: "Сковорода Polaris STONE-26F",
    price: 318000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/900af81e-bad2-4864-a2bc-51738786a1c9",
    productName: "Кронштейн Skill Tech SH-32P",
    price: 100700,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/f7572a11-4e0b-4ea0-8a0d-299cdd98c0e7",
    productName: "Обогреватель SIRIUS SRH-2050F",
    price: 127200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/bd9b6428-ff06-445a-b310-329780d87051",
    productName: "Смартфон Xiaomi Redmi 7A 2/32GB (Blue)",
    price: 1178750,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/141b7e22-6797-4c27-9cea-e6e83c4e646e",
    productName: "Мясорубка Philips HR2710/10",
    price: 1356800,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/829df770-be5c-437c-aa64-1d66d819a768",
    productName: "Холодильник Hitachi R-BG410PUC6X XGR",
    price: 9169000,
  },
];
const recommendedProductDate = [
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/5d655377-924e-4e07-8783-70ad294c99cc",
    productName: "Микроволновая печь Samsung ME81MRTB",
    price: 1166000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/512033c9-7463-451e-9d94-1811116e76a1",
    productName: "Стиральная машина Beko MVSE79512XAWI",
    price: 4187000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/00eba175-0d4e-4447-95e1-3b31f4265d9b",
    productName: "Газовая плита Beko GG15115DX",
    price: 7579000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/04db1cda-1431-4457-a826-ae9852193640",
    productName: "Сковородка гриль Polaris EL-28G",
    price: 296800,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/388492e8-a105-44fc-b706-38dd559608a2",
    productName: "Чайник Philips HD9351/91",
    price: 720800,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/a98312a7-7a86-4c10-a8bf-4aebe0094d45",
    productName: "Кастрюля Polaris Bellagio 24C",
    price: 477000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/22cd143c-f621-4939-970a-148417f22997",
    productName: "Смартфон Samsung Galaxy A21s 32Gb Black",
    price: 2098800,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/aac801ca-81c1-463d-915b-d795a8260149",
    productName: "Смартфон Huawei	NOVA 5T 6/128 Синий",
    price: 3392000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/a68a8b3d-154b-40d1-b8dd-0a28c70806d1",
    productName: "Утюг Beko SPM7128P",
    price: 731400,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/8b37dc21-0b7c-4a85-8557-7563c1878e33",
    productName: "Паровой утюг Beko SIM4126B",
    price: 424000,
  },
];
const gamingProductsData = [
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/90793b56-3830-43c9-9165-d1316960ddfb",
    productName: "Утюг Philips GC3802/27/BI",
    price: 1028200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/5d6b6147-123f-4af1-b3bf-65a2b2a3ffdc",
    productName: "Стиральная машина Haier HW60-1029A",
    price: 4028000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/39c4d320-2682-47ee-a97b-b403161ede7b",
    productName: "Блендер Panasonic MX-GX1011WTQ",
    price: 604200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/a34b9226-fb2c-49a1-b0c4-e8727996d510",
    productName: "Колонка XIAOMI XMYX02YM (GOLD)",
    price: 127200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/0942cc31-da06-40bb-9153-19e65ff21814",
    productName: "Сковорода Polaris STONE-26F",
    price: 318000,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/900af81e-bad2-4864-a2bc-51738786a1c9",
    productName: "Кронштейн Skill Tech SH-32P",
    price: 100700,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/f7572a11-4e0b-4ea0-8a0d-299cdd98c0e7",
    productName: "Обогреватель SIRIUS SRH-2050F",
    price: 127200,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/bd9b6428-ff06-445a-b310-329780d87051",
    productName: "Смартфон Xiaomi Redmi 7A 2/32GB (Blue)",
    price: 1178750,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/141b7e22-6797-4c27-9cea-e6e83c4e646e",
    productName: "Мясорубка Philips HR2710/10",
    price: 1356800,
  },
  {
    urlHome: "https://goodzone.uz/",
    urlProduct: "https://goodzone.uz/product/myasorubka-philips-hr2710-10",
    productPhoto:
      "https://cdn.goodzone.uz/goodzone/829df770-be5c-437c-aa64-1d66d819a768",
    productName: "Холодильник Hitachi R-BG410PUC6X XGR",
    price: 9169000,
  },
];

const setPopularProducts = () => {
  const popularProductsContainer = document.getElementById("popular-products");

  popularProductsContainer.innerHTML = "";

  popularProductsData.map((product, tartibi) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="shadow rounded p-3 box">
      <img
        src="${product.productPhoto}"
        alt=""
        class="m-0"
      />
      <a
        class="mb-3 d-block text-decoration-none text-dark text-bold"
        href="${product.urlProduct}"
      >
      ${product.productName}
      </a>
      <div class="d-flex justify-content-between text-center ml-3 mt-1">
        <h5 class="m-0 text-danger">${product.price} sum</h5>
      </div>
      <a
        href="${product.urlProduct}"
        class="btn btn-light rounded-pill w-50 mt-5 text-danger text-bold"
      >
        Купить
      </a>
    </div>
      `;

    popularProductsContainer.appendChild(slide);
  });
};
const setRecomendedProducts = () => {

  const recommendedProductContainer = document.getElementById("recommended-products");

  recommendedProductContainer.innerHTML = "";

  recommendedProductDate.map((value, index) => {
    const side = document.createElement("div");
    side.className = "swiper-slide";
    side.innerHTML = `
    <div class="shadow rounded p-3 box">
    <img
      src="${value.productPhoto}"
      alt=""
      class="m-0"
    />
    <a
      class="mb-3 d-block text-decoration-none text-dark"
      href="${value.urlProduct}"
    >
    ${value.productName}
    </a>
    <div class="d-flex justify-content-between ml-3 mt-4">
      <h5 class="m-0 text-danger">${value.price} sum</h5>
    </div>
    <a
      href="${value.urlProduct}"
      class="btn btn-light w-50 text-danger mt-5"
    >
      Подробнее
    </a>
  </div>
    `;
    recommendedProductContainer.appendChild(side);
  });
};
const setgamingProducts = () => {

  const gamingProductContainer = document.getElementById("recommended-products");

  gamingProductContainer.innerHTML = "";

  gamingProductsData.map((royxat, index) => {
    const senior = document.createElement("div");
    senior.className = "swiper-slide";
    senior.innerHTML = `
    <div class="shadow rounded p-3 box">
    <img
      src="${royxat.productPhoto}"
      alt=""
      class="m-0"
    />
    <a
      class="mb-3 d-block text-decoration-none text-dark"
      href="${royxat.urlProduct}"
    >
    ${royxat.productName}
    </a>
    <div class="d-flex justify-content-between ml-3 mt-4">
      <h5 class="m-0 text-danger">${royxat.price} sum</h5>
    </div>
    <a
      href="${royxat.urlProduct}"
      class="btn btn-light w-50 text-danger mt-5"
    >
      Подробнее
    </a>
  </div>
    `;
    gamingProductContainer.appendChild(senior);
  });
};

setPopularProducts();
setRecomendedProducts();
setgamingProducts();
