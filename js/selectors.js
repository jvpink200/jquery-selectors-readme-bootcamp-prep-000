// declare your functions here...
function paragraphSelector(){
  var p = $("p");
  return p;
}

function firstListItem(){
  var item = $("ul li:first-child");
  return item;
}
function lastImageSelector(){
  var img = $("div img:last-child");
  return img;
}

function divSelector(){
  var div = $(".pics");
  return div;
}

function ninjaBabySelector(){
  var ninja = $("img[id='baby-ninja']");
  return ninja;
}
