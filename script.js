function navigateToPage() {
    let select = document.getElementById("pageSelect");
    let url = select.value;
    if (url) {
        // window.location.href = url; open in the same tab
        window.open(url, "_blank");
    }
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

function openSignUp(){
    window.open("./html files/signup.html");
}

function signIn(){
    window.open("./html files/signin.html");
}