document.addEventListener("click", (e)=> {
    if (e.target.id=="increase1") {
        document.getElementById("first-value").innerHTML++;
    }
    if (e.target.id=="decrease1") {
        document.getElementById("first-value").innerHTML--;
    }
    if (e.target.id=="increase2") {
        document.getElementById("second-value").innerHTML++;
    }
    if (e.target.id=="decrease2") {
        document.getElementById("second-value").innerHTML--;
    }
    if (e.target.id=="reset1") {
        document.getElementById("first-value").innerHTML=100;
    }
    if (e.target.id=="reset2") {
        document.getElementById("second-value").innerHTML=200;
    }
});
