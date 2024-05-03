import { Button } from "@/components/ui/button";
import RoomCard from "@/components/RoomCard";
import Image from "next/image";
import Search from "@/components/Search";
import BuySell from "@/components/BuySell";
import HeroHome from "@/components/HeroHome";
import getRooms from "@/lib/actions/getRooms";
import MoreRooms from "@/components/MoreRooms";



export default async function Home() {

  const response = await getRooms();

  const mainRooms = response.slice(0, 12);
  const moreRooms = response.slice(12);

  let data = [1,2,3,4,5,6]

  return (
    <main>
    
      <Search />


    {/* rooms card  */}
    <section className=" mx-6 md:mx-20 my-16 ">
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
      {
        mainRooms.map((room)=>{
          return(
            <RoomCard room={room} key={room._id} />
          )
        })
      }
      </article>

      <MoreRooms rooms={moreRooms} />

    </section>

    <HeroHome />

    {/* buy sell  */}
    <BuySell />

    </main>
  );
}
