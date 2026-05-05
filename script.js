const searchLocal = document.querySelector("#searchLocal");
const btn = document.querySelector("#btn");

const resultBox = document.querySelector("#resultBox");
const resultSearch = document.querySelector("#resultSearch");
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const humidity = document.querySelector("#humidity");

const apiKey = "31a90928cd962f02f131b71a744f5bf6";

async function searchCity(e) {
    e.preventDefault();
    try{
        let local = searchLocal.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}&lang=pt_br&units=metric`);
        const data = await response.json();
        
        //Limpa conteúdo do elemento para não ser duplicado
        humidity.innerHTML = "";

        //Criando elemento imagem
        const imgForecast = document.createElement("img");

        //Exibindo dinamicamente
        resultSearch.innerHTML = `Tempo em ${data.name}`;
        temperature.innerHTML = Math.floor(data.main.temp) + " C°";
        weather.innerHTML = data.weather[0].description;

        //Realizando atribuições do elemento criado
        imgForecast.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        imgForecast.alt = "Weather icon";
        imgForecast.className = "mx-auto w-20 h-20";
        humidity.appendChild(imgForecast); //Inserindo imagem dentro do elemento

        //Adicionando informações abaixo da imagem
        humidity.append(`Umidade: ${data.main.humidity}%`);
        resultBox.classList.remove("hidden");
        searchLocal.value = "";

    }catch (error){
        console.log("Erro: ", error)
    }
}

btn.addEventListener("click", searchCity);
