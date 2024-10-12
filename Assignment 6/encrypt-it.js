(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  /**
   * Enable button functions when clicked
   */
  function init() {
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click",encryptTxt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  const encryptTxt = () => {
    console.log("Encrypt it loaded!");
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let offset=1;
    let finalMessage='';
    // make message lowercase to not cause errors
    let textbox = document.getElementById("input-text"); 
    let msgHold=textbox.value.toLowerCase();

    //create cipher
    for(let i=0; i<msgHold.length;i++)
    {
      let indexAlpha=alphabet.search(msgHold[i]);
      if(indexAlpha!= -1 && msgHold[i]!='.'){
        let newIndex= (indexAlpha + offset) % alphabet.length;
        finalMessage+=alphabet[newIndex];
      }
      else {
        finalMessage+=msgHold[i];
      }
    }
    textbox.value=finalMessage;
  }

  const handleReset = () => {
    console.log("Reset button loaded!");

    let textbox = document.getElementById("input-text");
    textbox.value='';
  }
})();
