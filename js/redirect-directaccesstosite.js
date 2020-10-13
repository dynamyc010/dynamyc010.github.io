// This file is used in order to redirect users who try to direct-access sites I don't want them to. (Like the 404 page)

function redirectIfDirect(){
if(window.location.href == "https://dynamyc.me/404.html")
    {
        window.location.href = "https://dynamyc.me/cheatersjail.html"
    }
else{
    console.log("The website you tried to access (" + window.location.href + ") does not exist. If you have questions about this, contact me.")
    }
}