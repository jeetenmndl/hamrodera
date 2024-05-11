"use server"


const allRooms = async (phone)=>{

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone: phone})
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/admin/rooms`, settings, { next: { revalidate: 600 } })
    const response = await query.json()

    return response
  }

  export default allRooms;

  