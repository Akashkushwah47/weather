// getting value from search box

let searchValue = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
let showCityname = document.getElementById('cityNameShow');
showCityname.style.display='none';

let latitudeShow=document.getElementById("latitude");
// console.log(latitudeShow);

let longitudeShow=document.getElementById("longitude");


// window.onload=function(){
//     btnGetData();
// }


searchBtn.addEventListener('click', btnGetData);

function btnGetData(){
    
    getData(oneCallApi);
}

// featching data by the help of Api
function getData(callback){
     
 cityNames = searchValue.value;



let api = 'a2bbd9ea403004ed30ea8e67b36e9976';
url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=${api}`;

fetch(url).then((response) => {
    // console.log('it is working');
    return response.json();
})

    .then(data => {
        console.log(data);
        
        showCityname.style.display='block';
        let cityNameFromServer=data.name;
       
        const latitude=data.coord.lat;
        const  longitude=data.coord.lon;

        showCityname.textContent=cityNameFromServer;
    
        
        latitudeShow.textContent=`${latitude}`;
        longitudeShow.textContent=`${longitude}`;
        

        callback();
      
})


 
}





