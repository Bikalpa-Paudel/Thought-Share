import { BsStars, BsFire } from 'react-icons/bs'
import { BiSolidMedal } from 'react-icons/bi'
import Link from 'next/link'

function FilterFeed() {
  return (
    <div className="bg-white py-2 px-4  flex items-center gap-2 justify-between">
    <div className='flex gap-5'>
        <Link href="#" className='flex gap-1 items-center'>
           <BsStars /> 
           <p>New</p>
        </Link>
        <Link href="#"  className='flex gap-1 items-center'>
           <BsFire /> 
           <p>Hot</p>
        </Link>
        <Link href="#"  className='flex gap-1 items-center'>
           <BiSolidMedal /> 
           <p>Top</p>
        </Link>
    </div>
    <div>K</div>
  </div>
  )
}

export default FilterFeed