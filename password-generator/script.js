const passwordField=document.getElementById("passwordInputField")
let NumberAllowed=document.getElementById("NumberAllow")

const copyPassword=document.querySelector(".copyPassword")
const alertcontianer=document.querySelector(".alert-contianer")

const lengthInput=document.getElementById("lengthInput")

const lengthValue=document.getElementById("lengthValue")

lengthInput.addEventListener("input",()=>{
  lengthValue.textContent=lengthInput.value
})





const characterAllowed=document.getElementById("characterallow")
const mainButton=document.getElementById("btnM")

mainButton.addEventListener("click",()=>{
 let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmlnopqrstuvwxyz"
 if(NumberAllowed.checked){
  chars +="1234567890"
 }

 if (characterAllowed.checked) {
  chars +="!@#$%^&*+"
  
 }
 let password=""
  const length = Number(lengthInput.value)



 for (let i = 0; i < length; i++) {
  const key=Math.floor(Math.random()*chars.length)
 password +=chars.charAt(key)
 passwordField.value=password
  }

 
  
})


copyPassword.addEventListener("click",()=>{
  passwordField.select()
  passwordField.setSelectionRange(0, passwordField.value.length)
   navigator.clipboard.writeText(passwordField.value)
  alertcontianer.classList.remove("active")
  alertcontianer.textContent=passwordField.value +" copied"
  
  

})



