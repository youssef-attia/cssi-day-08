
const submitMessage = () => {
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;

    //message restrictions
    let messageRestrictions = (messageInput.length < 25)
    
    //passcode restrictions
    let passcodeRestrictions = passcodeInput.length > 5
    
    const payload = {passcode:passcodeInput, message:messageInput}
    if(messageRestrictions&&passcodeRestrictions){
        console.log(payload)
        firebase.database().ref().push(payload)
    }
    if(!messageRestrictions){console.log("Your message does not meet the restrictions")}
    if(!passcodeRestrictions){console.log("Your passcode does not meet the restrictions")}

}