document.getElementById("getjokebutton").addEventListener("click", fetchJoke);
document.getElementById("clearjokebutton").addEventListener("click", clear);
async function fetchJoke() {
    const jokeTextEle = document.getElementById("joketext");
    const characterCountEle = document.getElementById("charactercount");

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        
        if (!response.ok) {
            throw new Error(" Your Api is Failed!!!");
        }

        const data = await response.json();
        const joke = `${data.setup} ${data.punchline}`;
        jokeTextEle.textContent = joke;
        characterCountEle.textContent = `Character Count: ${joke.length}`;
    } 
    catch (error) 
    {
        jokeTextEle.textContent = error.message;
        characterCountEle.textContent = "Character Count: 0";
    }
}
function clear() {
    const jokeTextEle = document.getElementById("joketext");
    const characterCountEle = document.getElementById("charactercount");

    jokeTextEle.textContent = "Get more Joke!!!";
    characterCountEle.textContent = "Character Count: 0";
}
