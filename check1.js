function togetlocation( check){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML =
    "Geolocation is not supported by this browser.";
  }
  
function showPosition(position) {
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;
    
    let t=document.getElementById("latitude").innerText=`${latitude}`;
    let u=document.getElementById("longitude").innerText=`${longitude}`;
    // console.log(t);
    check();
  }
}
togetlocation(oneCallApi);
