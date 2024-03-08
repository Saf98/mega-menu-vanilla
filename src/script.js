const data = [
  {
    title: "Electronics",
    subMenu: [
      {
        title: "smartphones",
        subMenu: [
          {
            title: "iPhone 13 Pro", subMenu: []
          },
          {
            title: "iPhone 15 Pro Max", subMenu: []
          },
          {
            title: "Samsung S23", subMenu: []
          },
          {
            title: "Pixel 8 Pro", subMenu: []
          },
          {
            title: "Motorola Razr 40 Ultra", subMenu: []
          },
        ],
      },
      {
        title: "laptops",
        subMenu: [
          { title: "MacBook Pro", subMenu: [] },
          { title: "Chromebook", subMenu: [] },
          { title: "Lenovo IdeaPad 3i", subMenu: [] },
          { title: "Surface Laptop Go", subMenu: [] },
          { title: "ASUS Zenbook", subMenu: [] },
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
          { title: "PS4", subMenu: [] },
          { title: "PS5", subMenu: [] },
          { title: "PS4 Slim", subMenu: [] },
          { title: "PS5 Slim", subMenu: [] },
        ],
      },
      {
        title: "Xbox",
        subMenu: [
          { title: "Xbox 360", subMenu: [] },
          { title: "Series X", subMenu: [] },
          { title: "Series S", subMenu: [] },
          { title: "One", subMenu: [] },
        ],
      },
    ],
  },
];

const menuItems = document.getElementById("categories");
const subMenuElement = document.getElementById("submenu");
const subChildElement = document.getElementById("children");
const menuItemsMobile = document.querySelector(".menu-items__mobile");
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

function convertListToHtml(list) {
  let html = `<ul class="mobile-items-subitems">`;

  for (item of list) {

    if (item?.subMenu.length === 0) {
      html += `<li class="menu-item" key="${uuidv4()}">${item?.title}</li>`;

    } else {
      html += `<li class="menu-item" key="${uuidv4()}">
                <div class="mobile-items-heading" key="${uuidv4()}">${item?.title}</div>   
                ${convertListToHtml(item?.subMenu)}
              </li>`;
    }
  }

  return html + `</ul>`;
}

const menuItemsMobileElement = menuItemsMobile.insertAdjacentHTML(
  "afterbegin",
  convertListToHtml(data)
);

nestedMobileMenu = () => {
  const subMenuHeadings = document.querySelectorAll(".mobile-items-heading");

  subMenuHeadings.forEach((subMenuHeading) => {
    subMenuHeading.classList.add("collapsed");
    subMenuHeading.nextElementSibling.style.display = "none";
    subMenuHeading.addEventListener("click", (event) => {
      event.preventDefault();
      
      const subMenuList = event.target.nextElementSibling;
      if (subMenuList.style.display === "none") {
        subMenuHeading.classList.remove("collapsed");
        subMenuHeading.classList.add("expanded");
        subMenuList.style.display = "block";
      } else {
        subMenuHeading.classList.remove("expanded");
        subMenuHeading.classList.add("collapsed");
        subMenuList.style.display = "none";
      }
      event.stopPropagation();
    });
  });
};

nestedMobileMenu();

