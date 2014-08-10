function validate_name(ele)
{
	if(ele.name === "fname")
	{
		if(ele.value === "")
			{
				document.getElementById("validation-message-fname").innerHTML = "First Name is mandatory!";
				ele.setAttribute("style","border-style:solid;border-color:#8b0300");
				ele.focus();
			}
		else if(!containsLetters(ele.value))
		{
			document.getElementById("validation-message-fname").innerHTML = "First Name can contain only letters!";
			ele.setAttribute("style","border-style:solid;border-color:#8b0300");
			ele.focus();
		}
		else
		{
			document.getElementById("validation-message-fname").innerHTML = "";
			ele.removeAttribute("style");
		}
	}
	else
	{
		if(ele.value === "")
			{
				document.getElementById("validation-message-lname").innerHTML = "Last Name is mandatory!";
				ele.setAttribute("style","border-style:solid;border-color:#8b0300");
				ele.focus();
			}
		else if(!containsLetters(ele.value))
		{
			document.getElementById("validation-message-lname").innerHTML = "Last Name can contain only letters!";
			ele.setAttribute("style","border-style:solid;border-color:#8b0300");
			ele.focus();
		}
		else
		{
			document.getElementById("validation-message-lname").innerHTML = "";
			ele.removeAttribute("style");
		}
	}
}

function containsLetters(x)
{
	var count =0;
for(var i = 0 ; i<x.length ; i++)
{
	if((x.charAt(i)>='a' && x.charAt(i)<='z')||(x.charAt(i)>='A' && x.charAt(i)<='Z'))
	{
		count++;
	}
	else
		break;
}
if(count === x.length)
	return true
else
	return false;
}

function validate_email(ele)
{
	if(ele.value != "")
	{
	if(!ele.value.lastIndexOf('.')>ele.value.indexOf('@'))
	{
		document.getElementById("validation-message-email").innerHTML = "Email is invalid!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
	}
	else
	{
		document.getElementById("validation-message-email").innerHTML = "";
		ele.removeAttribute("style");
	}
	}
	else

	{
		document.getElementById("validation-message-email").innerHTML = "Email is mandatory!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
	}
}
function validate_mobnumber(ele)
{

	if(ele.value!= "")
	{
	if(!containsNumbers(ele.value))
	{
		document.getElementById("validation-message-mobno").innerHTML = "Mobile Number can contain only digits!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
		
	}
	else
	{
		document.getElementById("validation-message-mobno").innerHTML = "";
		ele.removeAttribute("style");
	}
	}
	else
	{
		document.getElementById("validation-message-mobno").innerHTML = "Mobile Number is mandatory!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
	}
}

function containsNumbers(x)
{
	var count = 0;
	for(var i = 0;i<x.length;i++)
	{
		if(x.charAt(i)>='0'&& x.charAt(i)<='9')
		{
			count++;
		}
		else
			break;
	}
		if(count == x.length)
			return true;
		else
			return false;
}
var password;
function validate_password(ele)
{
	var count = 0;
	password = ele.value;
	if(ele.value!="")
	{
		if(ele.value.length<=13 && ele.value.length>=6)
		{
			document.getElementById("validation-message-pass").innerHTML = "";
			ele.removeAttribute("style");
		}
		else
		{
			document.getElementById("validation-message-pass").innerHTML = "Password should contain 6-13 characters!";
			ele.setAttribute("style","border-style:solid;border-color:#8b0300");
			ele.focus();
		}
	}
	else
	{
		document.getElementById("validation-message-pass").innerHTML = "Password is mandatory!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
	}
}
function confirm_password(ele)
{

	if(ele.value !== password)
	{
		document.getElementById("validation-message-cpass").innerHTML = "Passwords don't match!";
		ele.setAttribute("style","border-style:solid;border-color:#8b0300");
		ele.focus();
	}
	else
	{
		document.getElementById("validation-message-cpass").innerHTML = "";
		ele.removeAttribute("style");
	}
}	