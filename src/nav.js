const data = [
  {
    title: "Electronics",
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
      // {
      //   title: "laptops",
      //   subMenu: [{ title: "MacBook Pro" }, { title: "Chromebook" }],
      // },
    ],
  },
  {
    title: "Consoles",
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
const menuItems = document.getElementById("group");

const categories = data.map((element) => {
  return `<li><a href="#">${element.title}</a></li>`;
});
menuItems.insertAdjacentHTML("afterend", categories);
console.log(menuItems);
