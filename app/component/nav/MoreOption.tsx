import React from 'react'
import {FiMoreVertical} from 'react-icons/fi'

function MoreOption() {
  return (
     <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
         <FiMoreVertical />
         <p>More</p>
     </div>
  )
}

export default MoreOption