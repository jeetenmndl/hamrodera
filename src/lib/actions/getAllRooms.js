"use server"


const getAllRooms = async ()=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/category`, settings, {cache: "no-store"})
    const response = await query.json()

   return response.data;
    
  }

  export default getAllRooms;