const buttonClicked = () =>{
    alert("Hello, world!");
    let hold= document.getElementById("textbox");
    hold.style.fontSize="24pt";
}

const fancyClicked = () => {
    alert("Fancifying your text!...");
    let hold= document.getElementById("textbox");
    hold.style.fontWeight="bold";
    hold.style.color="blue";
    hold.style.textDecoration="yellowgreen wavy underline";
}

const boringClicked = () => {
    alert("Making your text BORING...");
    let hold= document.getElementById("textbox");
    hold.style.fontWeight="normal";
    hold.style.color="black";
    hold.style.textDecoration="none";
}

const mooClicked = () => {
    let userText=document.getElementById("textbox");
    let toUppercaseText=userText.value.toUpperCase();

    let splitSent=toUppercaseText.split(".");
    let newText=splitSent.join("-Moo");

    userText.value=newText;
}