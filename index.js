/// Array of words 
const words = [
    "Hello",
    "Dog",
    "Pug",
    "html",
    "node.js",
    "learing",
    "Adevans",
    "beutful",
    "conteaner",
    "Message"
];

/// levels

const lvls = {
    "Easy": 6,
    "Normal": 4,
    "Hard": 3
};

// Default level

let DefaultLevelName = "Normal"; ///// change level from here

let Secondes = lvls[DefaultLevelName];

/// catchSelectors

let StartBtn = document.querySelector(".start");

let LvlNameSpan = document.querySelector(".message .lvl");

let SecondesSpan = document.querySelector(".message .secondes");

let TheWord = document.querySelector(".the-word");

let UpcomingWord = document.querySelector(".upcoming-word");

let Input = document.querySelector(".input");

let TimeLeftSpan = document.querySelector(".time span");

let ScoreGot = document.querySelector(".score .got");

let ScoreTotal = document.querySelector(".score .total");

let FinishMessage = document.querySelector(".finish");


//// level name + secondes + score

LvlNameSpan.innerHTML = DefaultLevelName;

SecondesSpan.innerHTML = Secondes;

TimeLeftSpan.innerHTML = Secondes;

ScoreTotal.innerHTML = words.length;

/// Paste Event

Input.onpaste = function ()
{
    return false;
};

/// Start Game

StartBtn.onclick = function ()
{
    this.remove();
    Input.focus();
    ////// word function
    genWords()
}

function genWords()
{
    /// Get random 
    let random = words[Math.floor(Math.random() * words.length)];
    //// Get  word  index
    let WordIndex = words.indexOf(random)
    //// remove word from arrey
    words.splice(WordIndex, 1);
    ///// Show random word
    TheWord.innerHTML = random;

    /// Empty Upcoming Words
    UpcomingWord.innerHTML = '';
    /// Gen Words 
    for (let i = 0; i < words.length; i++)
    {
        /// crate div
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        UpcomingWord.appendChild(div);
    }
    //// start play function
    startPlay()
}

function startPlay()
{
    TimeLeftSpan.innerHTML = Secondes;
    let start = setInterval(() =>
    {
        TimeLeftSpan.innerHTML--;
        if (TimeLeftSpan.innerHTML === "0")
        {
            /// Stop Time
            clearInterval(start);
            //// compare words
            if (TheWord.innerHTML.toLowerCase() === Input.value.toLowerCase())
            {
                /// Empty input 
                Input.value = '';
                // increase Score 
                ScoreGot.innerHTML++;
                if (words.length > 0)
                {
                    //// calll gen function
                    genWords()
                } else
                {
                    let span = document.createElement('span');
                    span.className = 'good';
                    let spantxt = document.createTextNode('WINNER')
                    span.appendChild(spantxt);
                    FinishMessage.appendChild(span);
                    ///// remove Upcoming box
                    UpcomingWord.remove();
                }
            } else
            {
                let span = document.createElement('span');
                span.className = 'bad';
                let spantxt = document.createTextNode('GAME OVER')
                span.appendChild(spantxt);
                FinishMessage.appendChild(span)
            }
        }
    }, 1000);
}













