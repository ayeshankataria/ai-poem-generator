function displayLimerick(response) {
  console.log("poem generated");

  new Typewriter("#limerick", {
    strings: response.data.answer,
    autoStart: true,
    loop: false,
    delay: 45,
    cursor: "",
  });
}

function generateLimerick(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "of3t344dcefa8bbe98a852a5cb69da06";
  let context =
    "You are a creative literary assistant. Your mission is to generate unique limericks in basic HTML without displaying markdown. The limericks are always polite and follow user instructions. Don't share the same response more than once.";
  let prompt =
    `User instructions: Please generate fun limerick about ${instructionsInput.value}. It should be a different one each time. Please share the limerick only and no other text.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let limerickElement = document.querySelector("#limerick");
  limerickElement.innerHTML = "Generating a limerick for you...";

  console.log("Generating limerick...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayLimerick);
}

let limerickFormElement = document.querySelector("#limerick-generator-form");
limerickFormElement.addEventListener("submit", generateLimerick);