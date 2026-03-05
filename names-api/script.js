const URL = "https://api.api-ninjas.com/v1/babynames?gender=neutral";
const ApiKey = "OzhVsPI6J3tHPb2DVcfCyf16MHSuDEdqAlMxXEPc";

const item = document.querySelector(".items");
const btn = document.getElementById("btn");
const loader = document.getElementById("loader");

btn.addEventListener("click", getNames);

const option = {
  method: "GET",
  headers: {
    "X-Api-Key": ApiKey
  }
};

// timeout function
function fetchWithTimeout(url, options, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    )
  ]);
}

async function getNames() {
  loader.style.display = "block";
//   item.innerHTML = "";
  btn.disabled = true;

  try {

    const response = await fetchWithTimeout(URL, option, 5000);

    // HTTP error handling
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      item.innerHTML = "<p>No names found.</p>";
      return;
    }

    let html = "";

    for (let i = 0; i < data.length; i++) {
      html += `<p>${data[i]}</p>`;
    }

    item.innerHTML = html;

  } catch (error) {

    console.error(error);

    // user friendly messages
    if (error.message === "Failed to fetch") {
      item.innerHTML = `
        <p style="color:red;">
        🌐 Network error. Please check your internet connection.
        </p>`;
    } 
    
    else if (error.message === "Request timeout") {
      item.innerHTML = `
        <p style="color:orange;">
        ⏱ Request took too long. Please try again.
        </p>`;
    }

    else {
      item.innerHTML = `
        <p style="color:red;">
        ❌ Something went wrong. Please try again later.
        </p>`;
    }

  } finally {
    loader.style.display = "none";
    btn.disabled = false;
  }
}


