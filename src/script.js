const data = [
  {
    title: "Electronics",
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
const menuItemsMobile = document.getElementById("categories-mobile");
const allCategoriesMobile = document.querySelector(".all-categories-mobile");

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

function selectedStyle() {
  const navLinks = document.querySelectorAll(".menu-item");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => {
        link.classList.remove("selected");
      });
      link.classList.add("selected");
    });
  });
}

const categories = data
  .map((element) => {
    return `<li class="menu-item arrow" key=${uuidv4()}><a>${element.title}</a></li>`;
  })
  .join("");

data.filter((element) => {
  if (element.subMenu) {
    const subcategory = element.subMenu
      .map((subElement) => {
        return `<li id="menu-item" class="menu-item arrow" key=${uuidv4()}><a>${subElement.title}</a></li>`;
      })
      .join("");
  } else {
    data
      .map((element) => {
        return `<li id="menu-item" class="menu-item arrow" key=${uuidv4()}><a>${element.title}</a></li>`;
      })
      .join("");
  }
});

//mobile categories

const categoriesMobile = data
  .map((element) => {
    if (element.subMenu?.length > 0) {
      return `
        <li id="menu-item" class="menu-item arrow" key=${uuidv4()}><a>${element.title}</a></li>
        <li id="menu-item" class="menu-item">
          ${element.subMenu
            .map((subElement) => {
              return `<li id="menu-item" class="menu-item" key=${uuidv4()}>
              <a>${subElement.title}</a>
              </li>
              ${subElement.subMenu
                .map((subChildren) => {
                  return `<li id="menu-item" class="menu-item" key=${uuidv4()}>
                  <a>${subChildren.title}</a>
                  </li>`;
                })
                .join("")}
              `;
            })
            .join("")}
        </li>`;
    }
  })
  .join("");

const renderList = (event) => {
  subMenuElement.replaceChildren();
  subChildElement.replaceChildren();

  data.filter((element) => {
    if (element.title === `${event}`) {
      const subcategory = element.subMenu
        .map((subElement) => {
          return `<li id="menu-item" class="menu-item arrow" key=${uuidv4()}><a>${subElement.title}</a></li>`;
        })
        .join("");
      subMenuElement.insertAdjacentHTML("afterbegin", subcategory);
    }
  });
};

const renderListChild = (event) => {
  subChildElement.replaceChildren();

  data.map((element) => {
    element.subMenu.filter((subElement) => {
      if (subElement.title === `${event}`) {
        const subChild = subElement?.subMenu
          .map((subChildren) => {
            return `<li class="menu-item arrow" key=${uuidv4()}><a>${subChildren.title}</a></li>`;
          })
          .join("");
        subChildElement.insertAdjacentHTML("afterbegin", subChild);
      }
    });
  });
};

const menuItemsElement = menuItems.insertAdjacentHTML("afterbegin", categories);
//mobile render
// const menuItemsMobileElement = menuItemsMobile.insertAdjacentHTML(
//   "afterbegin",
//   categoriesMobile,
// );

menuItems.addEventListener("click", (event) => {
  let title = event.target.childNodes[0].textContent;
  renderList(title);
  selectedStyle();
});

subMenuElement.addEventListener("click", (event) => {
  let title = event.target.childNodes[0].textContent;
  renderListChild(title);
  selectedStyle();
});

// menuItemsMobile.addEventListener("click", (event) => {
//   console.log(event.target.childNodes);
// });

const navLinksEls = document.querySelectorAll(".mobile-items__mobile--group");

navLinksEls.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    const activeLink = document.querySelector(
      ".mobile-items__mobile--group .active",
    );
    activeLink
      ? link.lastElementChild.classList.remove("active")
      : link.lastElementChild.classList.add("active", "select");
  });
});

// console.log(navLinksEls);
