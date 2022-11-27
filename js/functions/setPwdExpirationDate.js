export function setPwdExpirationDate(string) {

    // Calculate PED
    let d = new Date();
    let ped = d.setDate(d.getDate() + 10);

    // Instantise Password Managerial Unit (PMU)
    pm = new passwordMngmt();

    // Set desired PED
    pm.PasswordExpirationDate(ped);
}
