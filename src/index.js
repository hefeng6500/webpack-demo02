// const info = require("./title");
// import info, { name } from "./title";

// console.log(info);
// console.log(name);

// import("./title").then((res) => {
//   console.log(res);
// });
document.getElementById("btn").addEventListener("click", () => {
  import("./title").then((res) => {
    console.log(res);
  });
});
