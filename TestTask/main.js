var hobby = document.getElementsByClassName('only_click')[0];
	photo = document.getElementsByClassName('my_photo')[0];

function openHobby(){
  	hobby.style.display = "block";
}

function openPhoto(){
  	photo.style.display = "block";
  	hobby.style.display = "none";
}