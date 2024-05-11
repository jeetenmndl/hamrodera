"use server"


const confirmOTP = async (phone,otp)=>{

    //check otp
        let num1 = parseInt(phone.slice(0,5));
        let num2 = parseInt(phone.slice(-5));
        let num3 = num1 + num2;
        const date = new Date()
        let code = date.getDay()*num3
        code = code.toString();
        code = code.slice(0,5)
    
    if(code==otp){
        return { matched: true }
    }
    else{
        return { matched: false }
    }
  
  }

  export default confirmOTP;