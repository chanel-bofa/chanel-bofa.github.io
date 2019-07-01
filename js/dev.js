var selected = 0; 
var curRole; 

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onload = function(){
	newRole = getParameterByName('newRole'); 
	document.body.classList.remove("fade-out");
}

function fun1() {

	document.getElementById("dText").innerHTML = "THIS IS A DESCRIPTION OF MANAGER ROLE THIS IS A DESCRIPTION OF MANAGER ROLE THIS IS A DESCRIPTION OF MANAGER ROLE"
	document.getElementById("rText").innerHTML = "THESE ARE THE RESPONSIBILITIES OF MANAGER ROLE THESE ARE THE RESPONSIBILITIES OF MANAGER ROLE THESE ARE THE RESPONSIBILITIES OF MANAGER ROLE"
	selected = 1; 
}
	
function fun2() {

	document.getElementById("dText").innerHTML = "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"
	document.getElementById("rText").innerHTML = "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"
	selected = 2; 
}

function fun3() {

	document.getElementById("dText").innerHTML = "SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1"
	document.getElementById("rText").innerHTML = "SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1 SOMETHING1"
	selected = 3; 
}

function fun4() {
	document.getElementById("dText").innerHTML = "SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2"
	document.getElementById("rText").innerHTML = "SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2 SOMETHING2"
	selected = 4; 
}
		
function select(){
	if(selected == 0){
		
	}
	else{
	//IDS: 11=MANAGER, 12=SOMETHING, 13=SOMETHING1, 14=SOMETHING2	
		var id = 10 + selected; 
		if(newRole == "false"){
				window.location = '../main.html?role=' + id;
			}
		else{
			var windowstring = "path.html"+ "?newRole=" +newRole +"&oldRole=" + id;
			window.location = windowstring;
		}
	}
	return false; 
	
}
