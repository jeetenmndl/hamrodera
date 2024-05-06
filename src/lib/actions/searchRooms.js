"use server"


const searchRooms = async (searchParams)=>{

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchParams)
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/search`, settings, { next: { revalidate: 300 } })
    const response = await query.json()

    console.log("sesarch",response)
    return response
  }

  export default searchRooms;

  