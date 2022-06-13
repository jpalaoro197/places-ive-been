function Destination(place, climate, weather) {
  this.place = place;
  this.climate = climate;
  this.weather = weather;
}

let destination = new Destination("portland", "valley", "wet");
let destination2 = new Destination("maupin", "high-desert", "hot");
let destination3 = new Destination("govt. camp", "mountain", "snowy");
let destination4 = new Destination("florence", "beach", "windy")



// User Interface Logic ---------

function doSomething(){
  let portlandString = JSON.stringify(destination);
  $("#portland-info").text(portlandString);
}

function doSomething2(){
  let maupinString = JSON.stringify(destination2);
  $("#maupin-info").text(maupinString);
}

function doSomething3(){
  let govtString = JSON.stringify(destination3);
  $("#govt-info").text(govtString);
}

function doSomething4(){
  let florenceString = JSON.stringify(destination4);
  $("#florence-info").text(florenceString);
}




