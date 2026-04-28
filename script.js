searchLocal = document.querySelector("#searchLocal");
btn = document.querySelector("#btn");

resultSearch = document.querySelector("#resultSearch");
temperature = document.querySelector("#temperature");
weather = document.querySelector("#weather");
humidity = document.querySelector("#humidity");

const apiKey = "31a90928cd962f02f131b71a744f5bf6";

async function searchCity() {
    try{
        let local = searchLocal.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}&lang=pt_br&units=metric`);
        const data = await response.json();

        resultSearch.innerHTML = `Tempo em ${data.name}`;
        temperature.innerHTML = Math.floor(data.temp) + "C°";
        weather.innerHTML = data.weather[0].description;
        humidity.innerHTML = `Umidade: ${data.humidity}`;

    }catch (error){
        console.log("Erro: ", erro)
    }
}

btn.addEventListener("click", searchCity);
