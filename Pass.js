// let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lowerCase="abcdefghijklmnopqrstuvwxyz";
// let specialCharacter="@#$&"";
// let number="0123456789";

let st="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$&0123456789";

function createPassword()
{
    let password="";
    for(i=0; i<8; i++)
    {
        password+=st.charAt(Math.floor(Math.random()*st.length));
    }
    document.getElementById("password").value=password;
    let p=document.getElementById("password").value;
    console.log(p);
}