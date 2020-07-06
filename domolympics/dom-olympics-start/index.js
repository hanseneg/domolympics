//Created main header
const h1 = document.createElement("h1");
h1.textContent = "Javascript made this!!"
document.getElementById("header").appendChild(h1);
h1.className = "header"
//Created p for spans
const p1 = document.createElement("p");
header.append(p1);
//Created first span
const span1 = document.createElement("span");
span1.textContent = "Ethan"
span1.className = "name"
p1.append(span1);
//Created second span
const span2 = document.createElement("span");
span2.textContent = " wrote the Javascript."
p1.append(span2);
p1.style.textAlign = "center"
//Change message content
const message = document.getElementsByClassName("message");
message[0].textContent = "Hi! How are you today?";
message[1].textContent = "I'm great, how are you?";
message[2].textContent = "I'm doing amazing!";
message[3].textContent = "That's Awesome!";
for(let i = 0; i < message.length; i++){
    console.log(message[i])
}
//Clear messages
let clear = document.getElementById("clear-button");
clear.addEventListener("click", function(){
    for(let i = 0; i < message.length; i++){
        message[i].style.display = "none"
    }
})
