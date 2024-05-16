import CategoryPage from '@/components/CategoryPage'

export const metadata = {
  title: "Category",
  description: "View different category of stays seperately for ease of finding room. You can choose among stay type like rooms, flat, home, or office.",
};



const page = () => {

  return (
    <main className='px-4 md:px-20 py-8'>
        <CategoryPage />
    </main>
  )
}

export default page