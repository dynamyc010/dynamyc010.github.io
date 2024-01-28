const weblocation = window.location.hostname;

const raw = `{
    "titles" : 
    [ 
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "Welcome to dyn's very own web location!",
        "How are ya?",
        "fukc",
        "icasnthsothavingstorkes", 
        "owo uwu owo",
        "meep",
        "Boo!",
        "Did you know that this is random every time?",
        "If you see this, it works!",
        "Who dares enter my dungeon?",
        "hewwo owo",
        "brb, yeeting myself out of existence",
        "meow",
        "how do you do fellow kids",
        "what is life",
        "red kinda sus ngl",
        ">w<",
        "hehe",
        "a great great asset to the company",
        "mikor lesz már ncs?",
        "beeping intensifies (beep beep)",
        "I'm a little teapot, short and stout",
        "happy 2008!!!"
    ]
}`

const onloadStrings = JSON.parse(raw).titles;

function changeTitle()
{
    let genNumber = Math.floor(Math.random()*onloadStrings.length);
    document.title = weblocation + " | " + onloadStrings[genNumber];
}