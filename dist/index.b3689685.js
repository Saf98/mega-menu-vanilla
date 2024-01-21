const data = [
    {
        title: "Electronics",
        id: 1,
        subMenu: [
            {
                title: "smartphones",
                subMenu: [
                    {
                        title: "iPhone"
                    },
                    {
                        title: "Samsung"
                    }
                ]
            }
        ]
    },
    {
        title: "Consoles",
        id: 2,
        subMenu: [
            {
                title: "Playstation",
                subMenu: [
                    {
                        title: "PS4"
                    },
                    {
                        title: "PS5"
                    }
                ]
            },
            {
                title: "Xbox",
                subMenu: [
                    {
                        title: "Xbox 360"
                    },
                    {
                        title: "One X"
                    }
                ]
            }
        ]
    }
];
const menuItems = document.getElementById("categories");
const subMenuElement = document.getElementById("submenu");
const categories = data.map((element)=>{
    return `<li class="menu-item" key=${element.id}><a href="#">${element.title}</a></li>`;
}).join("");
const subcategories = data.filter((element)=>{
    if (element.title === `test`) {
        const sub = element.subMenu.map((subElement)=>{
            return `<li class="menu-item" key=${subElement?.id}><a href="#">${subElement.title}</a></li>`;
        }).join("");
        subMenuElement.insertAdjacentHTML("afterbegin", sub);
    }
});
const menuItemsElement = menuItems.insertAdjacentHTML("afterbegin", categories);
menuItems.addEventListener("click", (event)=>{
    console.log(event.target.childNodes[0].textContent);
//listen for dynamic inner text
});

//# sourceMappingURL=index.b3689685.js.map
