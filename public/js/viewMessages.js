numEntries = 0;

const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot)=>{
        const data = snapshot.val();
        const message = document.querySelector("#message");
        console.log(data)
        if(numEntries<5){
            for (const key in data) {
                if(data[key].passcode===passcode.value){
                    message.innerHTML = data[key].message;
                }
            }
            numEntries++;
        } else {
            alert("You've gone over your allotted entries! Please Wait for 5 seconds to try again")
            setTimeout(() => {
                numEntries = 0;
                alert("Attempts reset!")
            }, 5000);
        }
    })
}