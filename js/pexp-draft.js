// This is heavy draft
import { pass, passttl, passChars, minPasswordLength } from "passwdMngmtUnit";
import { sanitize } from "./functions/sanitize";

// Get password from password field
pass = document.querySelector('input').value;

// Set required password length
minPasswordLength = 5;

// Set password TTL for 3600 seconds ( 1 hour )
passttl = 3600;

// Count password length
passChars = pass.Length;

// Chars count is less than required minimum pass length
if (passChars < minPasswordLength) {

    // Log error message
    console.error("Password empty or too short");

// Chars count is greater or equal than required minimum pass length
} else if (passChars >= minPasswordLength) {

    // Sanitize password
    sanitize(pass);

    // set expiration date
    setPwdExpirationDate(pass);
}

function setPwdExpirationDate(string){

    // Calculate PED
    let d = new Date();
    let ped = d.setDate(d.getDate()+10);

    // Instantise Password Managerial Unit (PMU)
    pm = new passwordMngmt();

    // Set desired PED
    pm.PasswordExpirationDate(ped);
}