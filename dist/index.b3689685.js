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
    }
];
const menuItems = document.querySelector("#group");
// const products = data.map((element) => {
//   return `<li>Hello</li>`;
// });
// console.log(menuItems);
menuItems.insertAdjacentElement("afterbegin", `<li>Hello</li>`);

//# sourceMappingURL=index.b3689685.js.map
