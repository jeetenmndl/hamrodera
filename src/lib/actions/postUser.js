"use server"


const postUser = async (formData,image)=>{

    let details = {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        study: formData.study,
        document: image
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  try{
    const check = await fetch(`${process.env.DOMAIN}/api/users/${details.phone}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }})
    const checkResponse = await check.json()

    if(checkResponse.data==null){
      const query = await fetch(`${process.env.DOMAIN}/api/users`, settings)
      const response = await query.json()
      return {success:true, data:response}
    }
      else{
        return {success:false, data:"User already exists"}
    }

  }
  catch(error){
    return {success:false, data:"Some error occured"}

  }
  }

  export default postUser;