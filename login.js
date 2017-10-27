var objPeople = [
	{
        username: "admin",
        password: "admin",
        location: "users/u1s2r31.html"
    },
    {
    	username: "gast",
    	password: "gast",
    	location: "users/u1s2r32.html",
    }

];

function getInfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var form = document.getElementById("form");
	
	//alert("your username is " + username + "and your password is" + password + ".")
	
	for (var i = 0; i < objPeople.length; i = i + 1) {
		if (username == objPeople[i].username ) {
			if (password == objPeople[i].password ) {
				location.href = objPeople[i].location;
				
			} else {
				alert("Falsches Passwort");
				form.reset();
			}
		}
	}
}