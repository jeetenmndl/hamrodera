"use server"


const getUserProfile = async (id)=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/users/${id}`, settings,{cache: "no-store"})
    const response = await query.json()

   return response;
    
  }

  export default getUserProfile;