// This is my first JS // 
// TODO: improvement's latter on

const input_mail = document.getElementById("user-email")
const input_pass = document.getElementById("user-pass")
const label_email = document.getElementById("label-mail")
const label_pass = document.getElementById("label-password")
const mail_error_msg = document.getElementById("mail-error-msg")
const pass_error_msg = document.getElementById("pass-error-msg")

// const submit_button = document.getElementById("huhu")

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    
    const email = input_mail.value.trim();
    const password = input_pass.value;
    // submit_button.style.background = "black"

    if (email === "" || password === "") {
        event.preventDefault(); // >>> STOP form from submitting
        // alert("Please fill in all required fields");
		
		if (email === "") {
			label_email.style.color = "#b40000"
			input_mail.style.background = "#ffdadb"
			input_mail.style.border = "1px solid #b40000";
            mail_error_msg.style.display = "block"
		}
			
		if (password === "")
		{
			label_pass.style.color = "#b40000"
			input_pass.style.background = "#ffdadb"
			input_pass.style.border = "1px solid #b40000"
            pass_error_msg.style.display = "block"
		}
    }
});

// "real-time validation using the 'input'"
input_mail.addEventListener("input", () => {
    const email = input_mail.value.trim();
    if (email !== "")
    {
        label_email.style.color = "black";
        input_mail.style.background = "";
        input_mail.style.border = "1px solid #ccc";
        mail_error_msg.style.display = "none"
        
    }
    else {
        label_email.style.color = "#b40000"
		input_mail.style.background = "#ffdadb"
		input_mail.style.border = "1px solid #b40000";
        mail_error_msg.style.display = "block"
    }
});

input_pass.addEventListener("input", () => {
    const password = input_pass.value;
    if (password !== "")
    {
        label_pass.style.color = "black";
        input_pass.style.background = "";
        input_pass.style.border = "1px solid #ccc";
        pass_error_msg.style.display = "none"
        
    }
	else {
        label_pass.style.color = "#b40000"
		input_pass.style.background = "#ffdadb"
		input_pass.style.border = "1px solid #b40000"
        pass_error_msg.style.display = "block"
	}
});
