const data = [
    {
        title: "Electronics",
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
const menuItems = document.getElementById("group");
const categories = data.map((element)=>{
    return `<li><a href="#">${element.title}</a></li>`;
});
menuItems.insertAdjacentHTML("afterend", categories);
console.log(menuItems);

//# sourceMappingURL=index.b3689685.js.map
