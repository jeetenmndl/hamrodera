"use server"


const getSpecificUserOTP = async (phone)=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/users/${phone}`, settings)
    const response = await query.json()
    console.log(response.data)

    if(response.data==null){
        return { found: false }
    }else{
        //send otp
        let num1 = parseInt(response.data.phone.slice(0,5));
        let num2 = parseInt(response.data.phone.slice(-5));
        let num3 = num1 + num2;
        const date = new Date()
        let code = date.getDate()*num3
        code = code.toString();
        code = code.slice(0,5)
        console.log("OTP is", code);
        return { found: true, userID: response.data._id, OTP: code }
    }
  
    
  }

  export default getSpecificUserOTP;
