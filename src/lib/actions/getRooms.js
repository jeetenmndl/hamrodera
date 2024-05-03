"use server"


const getRooms = async ()=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/rooms`, settings)
    const response = await query.json()

   return response.data;
    
  }

  export default getRooms;