// const key = "3de7a47ee5bd4401901115244230501";
// const form = document.querySelector("form")
// const days = document.getElementById("days").value;
// const url = `https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=lahore&days=5`;

document.getElementById("city").addEventListener("keypress", (event) => {
  
  const city = document.getElementById("city").value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=${city}&days=6`;
  fetch(url)
    .then((realdata) => {
      console.log(realdata);
      return realdata.json()
    })
    .then((actualdata) => {
      console.log(actualdata)
      // Current Data 
      if(event.key == "Enter"){
     
      document.getElementsByClassName('city')[0].innerHTML = city;
      document.getElementsByClassName('lastupdate')[0].innerHTML = actualdata.current.last_updated;
      document.getElementsByClassName('weatherimg')[0].src = actualdata.current.condition.icon;
      document.getElementsByClassName('card-text')[0].innerHTML = actualdata.current.condition.text;
      document.getElementsByClassName('date')[0].innerHTML = `Current Weather Of: `;
      document.getElementsByClassName('feelc')[0].innerHTML = `${actualdata.current.feelslike_c} <sup> 0</sup>C`;
      document.getElementsByClassName('feelf')[0].innerHTML = `${actualdata.current.feelslike_f} <sup> 0</sup>F`;;
      document.getElementsByClassName('tempc')[0].innerHTML = `${actualdata.current.temp_c} <sup> 0</sup>C`;
      
      document.getElementsByClassName('tempf')[0].innerHTML = `${actualdata.current.temp_f} <sup> 0</sup>F`;
      document.getElementsByClassName('humidity')[0].innerHTML = actualdata.current.humidity;
      document.getElementsByClassName('windspeed')[0].innerHTML = `${actualdata.current.wind_kph} Km/h`;
    
     
      
      const wind =  actualdata.current.wind_dir;
      switch(true){
        case (wind == "N"):
        document.getElementsByClassName('wind')[0].innerHTML = "North";
        break;
        case (wind == "NE"):
        document.getElementsByClassName('wind')[0].innerHTML = "North East";
        break;
        case (wind == "E"):
        document.getElementsByClassName('wind')[0].innerHTML = "East";
        break;
        case (wind == "SE"):
        document.getElementsByClassName('wind')[0].innerHTML = "South East";
        break;
        case (wind == "S"):
        document.getElementsByClassName('wind')[0].innerHTML = "South";
        break;
        case (wind == "SW"):
        document.getElementsByClassName('wind')[0].innerHTML = "South West";
        break;
        case (wind == "W"):
        document.getElementsByClassName('wind')[0].innerHTML = "West";
        break;
        case (wind == "NW"):
        document.getElementsByClassName('wind')[0].innerHTML = "North West";
        break;
      }

      for(var j = 1; j < 7; j++){

      // ------------Icon--------------- 
      document.getElementsByClassName('weatherimg')[j].src = actualdata.forecast.forecastday[j].day.condition.icon;
      // ----------Condition------------ 
      document.getElementsByClassName('card-text')[j].innerHTML = actualdata.forecast.forecastday[j].day.condition.text;
      // ------------Date--------------- 
      document.getElementsByClassName('date')[j].innerHTML = actualdata.forecast.forecastday[j].date;

      }
    }
    })
    .catch((err)=>{
        console.log(err);
    })
});

