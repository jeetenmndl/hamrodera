"use server"


const sendOTPadmin = async (phone)=>{


    let check = ["9824390430"].includes(phone);
  
   
    if(check==false){
        return { found: false }
    }else{
        //send otp
        let num1 = parseInt(phone.slice(0,5));
        let num2 = parseInt(phone.slice(-5));
        let num3 = num1 + num2;
        const date = new Date()
        let code = date.getDate()*num3
        code = code.toString();
        code = code.slice(0,5)

        //here you need to send OTP
        console.log("OTP is", code);
        return { found: true }
    }
  
    
  }

  export default sendOTPadmin;