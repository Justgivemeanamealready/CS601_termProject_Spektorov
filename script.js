//Selectors
const gTarget = document.getElementById("gerdasAge");
const rTarget = document.getElementById("raysAge");
const cTarget = document.getElementById("catsAge");
//Dates
let date = new Date().getFullYear();
let gerdaAge = date - 2012;
let rayAge = date - 2015;
let catAge = date - 2021;
console.log(gTarget.innerHTML);
console.log(rTarget.innerHTML);
console.log(cTarget.innerHTML);
gTarget.innerHTML = gerdaAge;
rTarget.innerHTML = rayAge;
cTarget.innerHTML = catAge;

//Vue
let swapOne = "./resources/images/pets/gerda/gerda_3.jpg";
let swapTwo = "./resources/images/pets/ray/ray_3.jpg";
let swapThree = "./resources/images/pets/stitch/stitch_1.jpg";
let swapFour = "./resources/images/pets/charlie/charlie_A.jpg";

const app = Vue.createApp({
  //template: "<p>TEXTO</p>",
  data() {
    return {
      hover: false,
      swapOne,
      swapTwo,
      swapThree,
      swapFour,
    };
  },
  methods: {
    hoverOffOne(input) {
      this.swapOne = input;
    },
    hoverOnOne(input) {
      this.swapOne = input;
    },
    hoverOffTwo(input) {
      this.swapTwo = input;
    },
    hoverOnTwo(input) {
      this.swapTwo = input;
    },
    hoverOffThree(input) {
      this.swapThree = input;
    },
    hoverOnThree(input) {
      this.swapThree = input;
    },
    hoverOffFour(input) {
      this.swapFour = input;
    },
    hoverOnFour(input) {
      this.swapFour = input;
    },
  },
});

app.mount("#app");
