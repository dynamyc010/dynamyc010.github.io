// formatting goes [[bold/italic/underline;#hex/color name for text;#hex/colorname for background]text here]
// leave blank in any of the formatting if you dont wanna use it, like [[b;;;]text] will just be a bolded "text"
// or [[;#00a86b;;]green] will be "green" in hex code #00a86b 

// for hyperlinks, use [[!;;;;linkhere]text], same formatting is used for the original, just the extra ; is for links i believe
// for images. use [[@;;;;linkhere]]

$('body').terminal({
    testcommand: function() {
        this.echo("owo");
    },
    help: function() {
        this.echo("This terminal is still very much a work-in-progress, but! Some commands are already available! \n\n"
        + "Current commands available: "
        // Start of commands
        + "testcommand - Prints out owo as of right now."
        // End of commands
        + "\n\n\n"
        + "Thank you for helping us help you help us all."
        )
    }
},
{
    greetings: "Last login: [[;#FF0000;;]unknown]" + "\n"
    + "Welcome to The World Machine!" + "\n\n"
    + "Message by [[;#00FF00;;]worldmachine@127.0.0.1] on Sat Oct  10 21:36:07 GMT+1 2020:" + "\n"
    + '[[;#0f0fa6;;]"Welcome to this super-cozy terminal!' + '\n'
    + "Cool, right? You can get started by typing 'help'!" + '"]' + "\n",
    
    prompt: "guest@dynamyc.me:~$"
}
);