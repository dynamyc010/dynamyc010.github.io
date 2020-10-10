var weblocation = window.location.hostname;

var randomTitle = `{
    "randomTitles" : 
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
        "The Council of Niko is a nice place, not gonna lie."
    ]
}`
let onloadStrings = JSON.parse(randomTitle).randomTitles;

function changeTitle()
{
    let genNumber = Math.floor(Math.random()*onloadStrings.length);
    document.title = weblocation + " | " + onloadStrings[genNumber];

}

let isTerminalOpen = 0; 

// Loads the Super Secret Terminal!
function weLostOurSanity()
{
    if(isTerminalOpen == 0){
        var ifreem = document.createElement("IFRAME");
        ifreem.setAttribute('class', 'consolas'); 
        ifreem.setAttribute('src', "/terminal/");
        
        document.body.appendChild(ifreem);

        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
    else{
        switch(isTerminalOpen){
            case 1:
                alert("Don't try and make more terminals, please.");
                break;
            case 2:
                alert("Don't try and make more terminals, please.");
                break;
            case 3:
                alert("Seriously, don't.");
                break;
            case 4:
                alert("Are you doing this to anger me?");
                break;
            case 5:
                alert("Orr... maybe you don't know english well? \n\nWell, I can't do much about it.");
                break;
            case 6:
                alert("Or maybe you just want a shinier terminal? I hope not.");
                break;
            case 7:
                alert("Hmm.");
                break;
            case 8:
                alert("I'mma just... gonna go get a drink. You keep doing whatcha doing.")
                break;
            case 12:
                alert("Oh, you're still here.");
                alert("Why are you doing this?");
                alert("At least tell me THAT.");
                break;
            case 13:
                alert("You know what? YOU WIN! You'll get your second terminal! Just... please don't press that button again.")
                var ifreem = document.createElement("IFRAME");
                ifreem.setAttribute('class', 'consolas'); 
                ifreem.setAttribute('src', "/terminal/");
                
                document.body.appendChild(ifreem);
                break;
            case 14:
                alert("I'm fucking done with you.")
                close();
                break;

        }
    }
    isTerminalOpen++; // Terminal should now be open. Let's not make more of them.
}