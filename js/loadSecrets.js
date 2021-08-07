// Loads the Super Secret Terminal!
let isTerminalOpen = 0; 
function weLostOurSanity()
{
    if(isTerminalOpen == 0){
        var ifreem = document.createElement("IFRAME");
        ifreem.setAttribute('class', 'consolas'); 
        ifreem.setAttribute('src', "/terminal/");
        
        document.body.appendChild(ifreem);

        $('html, body').animate({ scrollTop: 0 }, 'fast');
        alert("This thing is pretty... unfinished. Don't dm me about it, I'll likely won't finish it.")
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
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                setTimeout(() => {alert("There. Happy? \n\nYou will only be able to see a single terminal but you can inspect element to see you indeed have 2!"); }, 600);
                break;
            case 14:
                alert("I'm done with you.")
                open(location, '_self').close();
                break;

        }
    }
    isTerminalOpen++; // Terminal should now be open. Let's not make more of them.
}