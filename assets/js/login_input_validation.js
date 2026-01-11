// This is my first JS // 

/*
	>>> document -> represents all the HTML loadedin browser
	>>> getElementById -> telling the browser to get an element in HTML that loaded by it's 'ID'
*/
const input_mail = document.getElementById("user-email")
const input_pass = document.getElementById("user-pass")
const label_email = document.getElementById("label-mail")
const label_pass = document.getElementById("label-password")

const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
	const email = input_mail.value.trim();
	const password = input_pass.value.trim();

    if (email === "" || password === "") {
        e.preventDefault(); // >>> STOP form from submitting
        alert("Please fill in all required fields");
		
		if (email === "") {

			label_email.style.color = "#b40000"
			input_mail.style.background = "#ffdadb"
			input_mail.style.border = "1px solid #b40000";
		}
			
		if (password === "")
		{
			label_pass.style.color = "#b40000"
			input_pass.style.background = "#ffdadb"
			input_pass.style.border = "1px solid #b40000"
		}
    }
});

input_mail.addEventListener("focus", () => {
    label_email.style.color = "black";
    input_mail.style.background = "";
    input_mail.style.border = "1px solid #ccc";
});

input_pass.addEventListener("focus", () => {
    label_pass.style.color = "black";
    input_pass.style.background = "";
    input_pass.style.border = "1px solid #ccc";
});

/*
	blur -> is a js event that happens when an element
	lose focus
*/ 
input_mail.addEventListener("blur", () => {
    if (input_mail.value.trim() === "") {
        label_email.style.color = "#b40000";
        input_mail.style.background = "#ffdadb";
        input_mail.style.border = "1px solid #b40000";
    } else {
        label_email.style.color = "black";
        input_mail.style.background = "";
        input_mail.style.border = "1px solid #ccc";
    }
});

input_pass.addEventListener("blur", () => {
    if (input_pass.value.trim() === "") {
        label_pass.style.color = "#b40000";
        input_pass.style.background = "#ffdadb";
        input_pass.style.border = "1px solid #b40000";
    } else {
        label_pass.style.color = "black";
        input_pass.style.background = "";
        input_pass.style.border = "1px solid #ccc";
    }
});
