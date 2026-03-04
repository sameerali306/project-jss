const URL = "https://api.api-ninjas.com/v1/babynames?gender=neutral";
const ApiKey="OzhVsPI6J3tHPb2DVcfCyf16MHSuDEdqAlMxXEPc"
const item=document.querySelector(".items")
const btn=document.getElementById("btn")
btn.addEventListener("click",getNames)
const loader=document.getElementById("loader")

const option = {
    method: "GET",
    headers: {   
        "X-Api-Key": ApiKey
    }
}

async function getNames() {
    item.style.display = "none";
    loader.style.display = "block";
    btn.disabled = true;
    try {
        // item.innerHTML="update..."
        const response = await fetch(URL, option);
        const data = await response.json();
       for (let i = 0; i < data.length; i++) {
        const element = data[i];
        item.innerHTML=element
        
        
       }
    } catch (error) {
        console.log("failed to fetch");
    } finally{
        item.style.display = "block";
        loader.style.display = "none";
        btn.disabled = false;
    }
}

