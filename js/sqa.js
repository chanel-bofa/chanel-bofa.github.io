var selected = 0; 
var curRole; 
var thing = "asfsasdf";
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

function role(button_number){
	switch(button_number){
		case 1: 
			document.getElementById("dText").innerHTML = sqa_tester_d; 
			document.getElementById("rText").innerHTML = sqa_tester_r;	
			break; 
		case 2: 
			document.getElementById("dText").innerHTML = sqa_lead_d; 
			document.getElementById("rText").innerHTML = sqa_lead_r;	
			break; 
		case 3: 
			document.getElementById("dText").innerHTML = sqa_lead_s_d; 
			document.getElementById("rText").innerHTML = sqa_lead_s_r;	
			break; 
		case 4: 
			document.getElementById("dText").innerHTML = sqa_manager_d; 
			document.getElementById("rText").innerHTML = sqa_manager_r;
			break; 
		case 5: 
			document.getElementById("dText").innerHTML = sqa_tester_d; 
			document.getElementById("rText").innerHTML = sqa_tester_r;	
			break; 
		default: 
			alert("Something is terribly wrong");
			break; 
	}
	selected = button_number; 
}
		
function select(){
	if(selected == 0){
		alert("Please select a role");
	}
	else{
		var id = 20 + selected; 
		if(newRole == "false"){
				window.location = '../index.html?role=' + id;
			}
		else{
			var windowstring = "path.html"+ "?newRole=" +newRole +"&oldRole=" + id;
			window.location = windowstring;
		}
	}
	return false; 
	
}
