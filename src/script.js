const data = [
  {
    title: "Electronics",
    id: 1,
    subMenu: [
      {
        title: "smartphones",
        subMenu: [
          {
            title: "iPhone 13 Pro",
          },
          {
            title: "iPhone 15 Pro Max",
          },
          {
            title: "Samsung S23",
          },
          {
            title: "Pixel 8 Pro",
          },
          {
            title: "Motorola Razr 40 Ultra",
          },
        ],
      },
      {
        title: "laptops",
        subMenu: [
          { title: "MacBook Pro" },
          { title: "Chromebook" },
          { title: "Lenovo IdeaPad 3i" },
          { title: "Surface Laptop Go" },
          { title: "ASUS Zenbook" },
        ],
      },
    ],
  },
  {
    title: "Consoles",
    id: 2,
    subMenu: [
      {
        title: "Playstation",
        subMenu: [
          { title: "PS4" },
          { title: "PS5" },
          { title: "PS4 Slim" },
          { title: "PS5 Slim" },
        ],
      },
      {
        title: "Xbox",
        subMenu: [
          { title: "Xbox 360" },
          { title: "Series X" },
          { title: "Series S" },
          { title: "One" },
        ],
      },
    ],
  },
];

const menuItems = document.getElementById("categories");
const subMenuElement = document.getElementById("submenu");
const subChildElement = document.getElementById("children");

const categories = data
  .map((element) => {
    return `<li class="menu-item arrow" key=${element.id}><a>${element.title}</a></li>`;
  })
  .join("");

const renderList = (event) => {
  //filter array by string: event title of categories
  //then iterate through subMenu array and return it
  subMenuElement.replaceChildren();
  subChildElement.replaceChildren();

  data.filter((element) => {
    if (element.title === `${event}`) {
      const subcategory = element.subMenu
        .map((subElement) => {
          return `<li class="menu-item arrow" key=${subElement?.id}><a>${subElement.title}</a></li>`;
        })
        .join("");
      subMenuElement.insertAdjacentHTML("afterbegin", subcategory);
    }
  });
};

const renderListChild = (event) => {
  //filter array by string: event title of categories
  //then iterate through subMenu array and return it
  subChildElement.replaceChildren();

  data.map((element) => {
    element.subMenu.filter((subElement) => {
      if (subElement.title === `${event}`) {
        const subChild = subElement?.subMenu
          .map((subChildren) => {
            return `<li class="menu-item arrow" key=${subChildren?.id}><a>${subChildren.title}</a></li>`;
          })
          .join("");
        subChildElement.insertAdjacentHTML("afterbegin", subChild);
      }
    });
  });
};

const menuItemsElement = menuItems.insertAdjacentHTML("afterbegin", categories);

menuItems.addEventListener("click", (event) => {
  let title = event.target.childNodes[0].textContent;
  renderList(title);
  //listen for dynamic inner text
});

subMenuElement.addEventListener("click", (event) => {
  let title = event.target.childNodes[0].textContent;
  renderListChild(title);
  //listen for dynamic inner text of next array subcategories
  //pass to renderlistchild to filter
});
