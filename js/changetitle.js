const weblocation = window.location.hostname;

const titleJSON = `{
    "titles" : 
    [ 
        "Welcome to dyn's very own web location!",
        "How are ya?",
        "fukc",
        "icasnthsothavingstorkes", 
        "owo uwu owo",
        "meep",
        "I may have helped a little in G4, I dunno lol",
        "Boo!",
        "Did you know that this is random every time?",
        "Nox mode was a joke. Probably.",
        "If you see this, it works!",
        "Follow me on Tweeter lol",
        "Who dares enter my dungeon?",
        "hewwo owo",
        "brb, yeeting myself out of existence",
        "meow",
        "how do you do fellow kids",
        "what is life",
        "The Council of Niko is a nice place, not gonna lie.",
        "red kinda sus ngl",
        "Amber is pretty cute",
        ">w<",
        "hehe",
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    ]
}`
const onloadStrings = JSON.parse(titleJSON).titles;

function changeTitle()
{
    let genNumber = Math.floor(Math.random()*onloadStrings.length);
    document.title = weblocation + " | " + onloadStrings[genNumber];

}