import ProfileCard from '@/components/ProfileCard'
import RoomsInProfile from '@/components/RoomsInProfile'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  title: "Profile",
  description: "See your profile info and the rooms that you have posted at hamrodera.",
};


const page = () => {
  return (
   <main className='flex flex-col-reverse lg:flex-row gap-8 mx-4 lg:mx-20 my-4 min-h-96 '>
        <RoomsInProfile />
        {/* <Separator orientation="vertical" /> */}
        <ProfileCard />
   </main>
  )
}

export default page