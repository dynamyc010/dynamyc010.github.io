// formatting goes [[bold/italic/underline;#hex/color name for text;#hex/colorname for background]text here]
// leave blank in any of the formatting if you dont wanna use it, like [[b;;;]text] will just be a bolded "text"
// or [[;#00a86b;;]green] will be "green" in hex code #00a86b 

// for hyperlinks, use [[!;;;;linkhere]text], same formatting is used for the original, just the extra ; is for links i believe
// for images. use [[@;;;;linkhere]]

// God help me.

let ip = "127.0.0.1";
let note = "\n";
let ipcolor = "#22b352"

$(document).ready(function () {
    // Code to run on ready
});

setTimeout(function(){
$('body').terminal({
    testcommand: function() {
        this.echo("owo life is painful right now");
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
    + "Version: 0 \n"
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
    + "Last login: [[;" + ipcolor + ";;]" + moment().format("ddd MMM  D HH:mm:ss YYYY") + "] from [[;"+ ipcolor +";;]" + ip + "]\n"
    + "Welcome to The World Machine!" + note + "\n",
    prompt: "guest@dynamyc.me:~$ "
    
});}, 1200);