"use server"


const getAllRooms = async ()=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };

  try{
    const query = await fetch(`${process.env.DOMAIN}/api/category`, settings, {cache: "no-store"})
    const response = await query.json()

    // console.log("response", response)
  
   return {success: true, data: response.data};

  }catch(err){
    return {success:false, error: err}
  }
  
    
  }

  export default getAllRooms;