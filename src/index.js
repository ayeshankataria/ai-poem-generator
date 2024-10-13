function generateLimerick(event) {
  event.preventDefault();

  new Typewriter("#limerick", {
    strings: "The limerick will go here...",
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);