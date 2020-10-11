// formatting goes [[bold/italic/underline;#hex/color name for text;#hex/colorname for background]text here]
// leave blank in any of the formatting if you dont wanna use it, like [[b;;;]text] will just be a bolded "text"
// or [[;#00a86b;;]green] will be "green" in hex code #00a86b 

// for hyperlinks, use [[!;;;;linkhere]text], same formatting is used for the original, just the extra ; is for links i believe
// for images. use [[@;;;;linkhere]]

// God help me.

let ip = "0.0.0.0";
let note = "\n";
let ipcolor = "#22b352"

$(document).ready(function () {
    $.getJSON("https://geo.ipify.org/api/v1?apiKey=at_Dxpfkozoqs8jWbKBjvdJP7UIsBaCO", function (data) {
        ip = data.ip;
    });
    setTimeout(function(){
    if(ip == "0.0.0.0"){
        ip = "unknown"
        note = "\n\n[[;#FF0000;;](!!!)] Your IP is currently unavailable. More info in devtools."
        console.log("An ad-blocker (probably) blocked our request to ipify, or ipify just timed out lol. \nYou probably won't miss out on much.")
        ipcolor = "#FF0000"
    }}, 700);
});

setTimeout(function(){
$('body').terminal({
    testcommand: function() {
        this.echo("owo");
    },
    wiki: function(command){
        if(command != null){
            this.echo(command);
        }
    },
    help: function() {
        this.echo("This terminal is still very much a work-in-progress, but! Some commands are already available! \n\n"
        + "Current commands available: \n"
        // Start of commands
        + "[[;#22b352;;]testcommand] - Prints out owo as of right now. \n"
        + "[[;#22b352;;]about] - Shows information about the OS."
        // End of commands
        + "\n\n\n"
        + "Thank you for helping us help you help us all."
        )
    },
    about: function(){

    this.echo(
      " _____ _       _ _ _         _   _ _____         _   _         \n" 
    + "|_   _| |_ ___| | | |___ ___| |_| |     |___ ___| |_|_|___ ___ \n"
    + "  | | |   | -_| | | | . |  _| | . | | | | .'|  _|   | |   | -_|\n"
    + "  |_| |_|_|___|_____|___|_| |_|___|_|_|_|__,|___|_|_|_|_|_|___|\n"
    + "                                                               \n"
    + "[[@;;;;./assets/PC_on.png]] \n\n"
    + "Version: 2 \n"
    + "Current session: [[;#22b352;;]guest]@[[;" + ipcolor + ";;]" + ip + "]"

    
    )}
},
{
    greetings:
      " _____ _       _ _ _         _   _ _____         _   _         \n" 
    + "|_   _| |_ ___| | | |___ ___| |_| |     |___ ___| |_|_|___ ___ \n"
    + "  | | |   | -_| | | | . |  _| | . | | | | .'|  _|   | |   | -_|\n"
    + "  |_| |_|_|___|_____|___|_| |_|___|_|_|_|__,|___|_|_|_|_|_|___|\n"
    + "                                                               \n"
    + "[[@;;;;./assets/PC_on.png]]"
    + "Last login: [[;#FF0000;;]unknown] from [[;"+ ipcolor +";;]" + ip + "]\n"
    + "Welcome to The World Machine!" + note + "\n",
    prompt: "guest@dynamyc.me:~$ "
    
});}, 1200);