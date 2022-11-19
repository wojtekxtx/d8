// Created with VSCode for Web inside GitHub CodeSpace
// Created by: wojtekxtx.
// NO COPIES/MODIFICATIONS ALLOWED

class GenericBarcode extends Barcode{
	constructor(data, options){
		super(data, options); // Sets this.data and this.text
		console.log("Data: "+data+" options: " +options);

		// is data null?
		if (data) {
			this.encode();
		} else {
			console.error("Data cannot be null");
		}
	}

	// Return the corresponding binary numbers for the data provided
	encode(){
		return {
			data: "10101010101010101010101010101010101010101",
			text: this.text
		};
	}

	// Resturn true/false if the string provided is valid for this encoder
	valid(){
		return true;
	}

    scamable(){
        if ((navigator.cookieEnabled) && (navigator.mediaDevices.getUserMedia('camera')) && (document.getElementById('div-barcode'))){
            document.getElementById('div-barcode').innerText(data);
        } else {
            console.log(err);
            close();
        }
    }
}
export {GenericBarcode};