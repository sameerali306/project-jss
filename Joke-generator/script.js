const ApiKey="OzhVsPI6J3tHPb2DVcfCyf16MHSuDEdqAlMxXEPc"
const URL = "https://api.api-ninjas.com/v1/dadjokes";
const para =document.getElementById("para")


const option={
    method:"GET",
    headers:{
        "X-Api-Key":ApiKey
    }
}

async function getJoke() {
    para.innerText="updating.."
    const response=await fetch(URL,option)
    const data=await response.json()
    para.innerText=data[0].joke;
    
    
}
const btnEl=document.getElementById("btn")
btnEl.addEventListener("click",getJoke)