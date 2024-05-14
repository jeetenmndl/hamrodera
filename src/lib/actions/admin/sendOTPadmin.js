"use server"


const sendOTPadmin = async (phone)=>{

async function sendSMS(code) {
  const postData = {
    auth_token: '1d27bbeb161711f2cc3797b85d49f13de375f0263b3f3a2698cee6bb5c042dd5',
    to: '9824390430',
    text: `Your OTP is ${code}`
  };

  try {
    const response = await fetch('https://sms.aakashsms.com/sms/v3/send/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    const status_code = response.status;
    const responseData = await response.json();
    // console.log('Status Code:', status_code);
    // console.log('Response Data:', responseData);

    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return {error:true}
  }
}


    let check = ["9824390430"].includes(phone);
  
   
    if(check==false){
        return { found: false, message: "Access Denied." }
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
        let responseData = await sendSMS(code);
        console.log(responseData)

        if(responseData.error==true){
            return {found: false, message: "Some error occured."}
        }
        else{
            return {found:true}
        }
    }
  
    
  }

  export default sendOTPadmin;