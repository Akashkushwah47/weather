// let lati=document.getElementById("latitude").innerHTML;
// let longi=document.getElementById("longitude").innerHTML;
// console.log(lati)
// console.log(longi)
//  oneCallApi();
function oneCallApi() {
  let lati = document.getElementById("latitude").innerHTML;
  let longi = document.getElementById("longitude").innerHTML;
  // console.log(lati)
  // console.log(longi)

  let api = '4aa5071e467729ae0e1bc9bfb7f82a11';
  url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&exclude={part}&appid=${api}`

  fetch(url).then((response) => {
    // console.log('Hourly is working');
    return response.json();
  })

    .then(data => {

      console.log(data);

      // to show data in left window of parent of two div means to show current temp temp icon weathe name 
      let currenttemp = parseInt(data.current.temp) - 273;
      document.getElementById('temperature').innerHTML = `${currenttemp}`;

      let currentWeatherName = data.current.weather[0].main;
      document.getElementById("weatherName").innerHTML = `${currentWeatherName}`;

      let weatherImage = document.getElementById("weatherIcon");
      let weatherIcon = data.current.weather[0].icon;
      weatherImage.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);

      //    working on other table components
      document.getElementById("temperatureInSecondTable").innerHTML = `${currenttemp} °c`;

      let windspeed = data.current.wind_speed;
      document.getElementById("windspeed").innerHTML = `${windspeed} km/h`;

      let visibility = data.current.visibility;
      document.getElementById("visibility").innerHTML = `${visibility} m`;

      let airPressure = data.current.pressure;
      document.getElementById("airPressure").innerHTML = `${airPressure} hPa`;




      // to show data in middle slidebar-------------------------------------------------------

      let date = new Date();
      let hour = date.getHours();
      // console.log(hour);
      let ampm = 'AM'
      let j = 0;

      //  console.log(fetchHoulyIcon);
      for (let i = 0; i < 37; i++) {
        let fetchHourlyDataTemp = data.hourly[i].temp - 273;
        fetchHourlyDataTemp = parseInt(fetchHourlyDataTemp);

        let fetchHoulyIcon = data.hourly[i].weather[0].icon;

        // for time show 
        hour = hour + 1;
        //  console.log(i);
        //  console.log(hour);
        if (hour >= 12) {

          hour = hour - 12;
          // console.log(ampm)
          if (j == 0) {
            ampm = "PM"
            // console.log("check");
            j = 1;
          }
          else {
            ampm = "AM"
            j = 0;
          }



        }
        //  if(hour==0){
        //    hour=12;
        //    ampm="AM";
        //  }


        let smallHourlyDiv = document.getElementsByClassName('smallHourlyDiv');
        // console.log(smallHourlyDiv);
        let smallhouly = smallHourlyDiv[i];
        smallhouly.innerHTML = `<div class=smallHourlyDivTemp >${fetchHourlyDataTemp}°c</div> <div class=smallHourlyDivTime>${hour}:00 ${ampm} </div>   <div class=smallHourlyDivImg><img src=http://openweathermap.org/img/wn/${fetchHoulyIcon}@2x.png></div>`;

      }
      // }

      console.log("working correctly")


      //  to show data for daily forcastin-----------------------------------------

      let day=date.getDay();
      console.log(day);
      let arrayforshowweaksday;
     
     
      if(day==0){
        arrayforshowweaksday=["Today","Monday","Tuesday","wednesday","thursday","friday","saturday"]
        
      }
    
      if(day==1){
         arrayforshowweaksday=['Today','tuesday','wednesday','thursday','friday','saturday','sunday']
        
      }
      if(day==2){
        arrayforshowweaksday=["Today","wednesday","thursday","friday","saturday","sunday","monday"]
        
      }
      if(day==3){
        arrayforshowweaksday=["Today","thursday","friday","saturday","sunday","tuesday","wednesday"]
        
      }
      if(day==4){
        arrayforshowweaksday=["Today","friday","saturday","sunday","monday","tuesday","wednesday"]
        
      }
      if(day==5){
        arrayforshowweaksday=["Today","saturday","sunday","monday","tuesday","wednesday","thursday"]
        
      }
      if(day==6){
        arrayforshowweaksday=["Today","sunday","monday","tuesday","wednesday","thursday","friday"]
        
      }
      // console.log(arrayforshowweaksday)


      for (i = 0; i < 7; i++) {
        let dailytempmax = parseInt(data.daily[i].temp.max - 273);
        let dailytempmin = parseInt(data.daily[i].temp.min - 273)
        let dailyicon = data.daily[i].weather[0].icon;
        let dailyweathername = data.daily[i].weather[0].description;

        let dailyDiv = document.getElementById("dailyRowMainDiv")
        let dailydivclass = document.getElementsByClassName("dailyRow")[i];
        dailydivclass.innerHTML = `<div class="dailyDivOne">${arrayforshowweaksday[i]}</div> 
        <div  class="dailyDivTwo"><img src="http://openweathermap.org/img/wn/${dailyicon}@2x.png"></div> 
        <div  class="dailyDivThree">${dailyweathername}</div>
         <div class=dailyDivFour>${dailytempmax}/${dailytempmin}°c</div>`;
      }

    })
}
