const ApiKey="OzhVsPI6J3tHPb2DVcfCyf16MHSuDEdqAlMxXEPc"
const URL = "https://api.api-ninjas.com/v1/dadjokes";

const JokeText=document.getElementById("jokeText")
const loader=document.getElementById("loader")
const btnEl=document.getElementById("btn")

const options={
    method:"GET",
    Headers:{
        "X-Api-Key":ApiKey

    }
}

btnEl.addEventListener("click",getData)

async function getData() {
    JokeText.style.display=none
    loader.style.display=block
    btnEl.disable=true

    try {
        const response=await fetch(URL,options);
        const data=await response.json();
        JokeText.innerText=data[0].joke;
    } catch (error) {
        JokeText.innerText="failed to fetch..."
    } finally{
        JokeText.style.display=block
        loader.style.display=none
        btnEl.disable=false

    }


    
    
}