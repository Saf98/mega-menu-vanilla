const data = [
  {
    title: "Electronics",
    id: 1,
    subMenu: [
      {
        title: "smartphones",
        subMenu: [
          {
            title: "iPhone",
          },
          {
            title: "Samsung",
          },
        ],
      },
      {
        title: "laptops",
        subMenu: [{ title: "MacBook Pro" }, { title: "Chromebook" }],
      },
    ],
  },
  {
    title: "Consoles",
    id: 2,
    subMenu: [
      {
        title: "Playstation",
        subMenu: [{ title: "PS4" }, { title: "PS5" }],
      },
      {
        title: "Xbox",
        subMenu: [{ title: "Xbox 360" }, { title: "One X" }],
      },
    ],
  },
];

const menuItems = document.getElementById("categories");
const subMenuElement = document.getElementById("submenu");
const subChildElement = document.getElementById("children");

const categories = data
  .map((element) => {
    return `<li class="menu-item" key=${element.id}><a href="#">${element.title}</a></li>`;
  })
  .join("");

const renderList = (event) => {
  //filter array by string: event title of categories
  //then iterate through subMenu array and return it
  subMenuElement.replaceChildren();

  data.filter((element) => {
    if (element.title === `${event}`) {
      const subcategory = element.subMenu
        .map((subElement) => {
          return `<li class="menu-item" key=${subElement?.id}><a href="#">${subElement.title}</a></li>`;
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
            return `<li class="menu-item" key=${subChildren?.id}><a href="#">${subChildren.title}</a></li>`;
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
});
