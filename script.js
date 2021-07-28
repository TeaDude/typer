const typingDiv = document.getElementById("typingDiv");
const statsDiv = document.getElementById("stats");
const startGameBtn = document.getElementById("start-game");

const pharagraphs = [
  `The oldest classical Greek and Latin writing had little or no space between words and could be written in alternating directions.`,
  `The alarm went off and Jake rose awake. Rising early had become a daily ritual, one that he could not fully explain.`,
  `A long black shadow slid across the pavement near their feet and the five Venusians, very much startled, looked overhead.`,
  `It was their first date and she had been looking forward to it the entire week.`,
  `Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience.`,
  `Sleeping in his car was never the plan but sometimes things don't work out as planned.`,
  `There were little things that she simply could not stand. The sound of someone tapping their nails on the table.`,
  `"Where do they get a random paragraph?" he wondered as he clicked the generate button.`,
  `The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance.`,
  `There was a time when he would have embraced the change that was coming.`,
  `The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out.`,
  `It was just a burger. Why couldn't she understand that?`,
  `I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there.`,
  `weave deliver see to remark pay lot treat prospect operation strength radio spider conversation watch provoke donor character`
];

const startGame = () => {
    startGameBtn.classList.add("hidden");
    typingDiv.innerHTML = "";
    statsDiv.innerHTML = "";
  
    const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];
  
    const characters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      typingDiv.appendChild(span);
      return span;
    });
  
    let cursorIndex = 0;
    let cursorCharacter = characters[cursorIndex];
    cursorCharacter.classList.add("cursor");
  
    let startTime = null;
  
    const keydown = ({ key }) => {
      if (!startTime) {
        startTime = new Date();
      }
  
      if (key === cursorCharacter.innerText) {
        cursorCharacter.classList.remove("cursor");
        cursorCharacter.classList.add("done");
        cursorCharacter = characters[++cursorIndex];
      }
  
      if (cursorIndex >= characters.length) {
        // game ended
        const endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.split(" ").length;
        const wps = numberOfWords / seconds;
        const wpm = wps * 60.0;
        document.getElementById("stats").innerText = `You typed at ${parseInt(wpm)} WPM!`;
        document.removeEventListener("keydown", keydown);
        startGameBtn.classList.remove("hidden");
        return;
      }
  
      cursorCharacter.classList.add("cursor");
    };
  
    document.addEventListener("keydown", keydown);
}
