import React from 'react'
import {GoHome, GoSearch} from 'react-icons/go'
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5'
import {MdOutlineExplore} from 'react-icons/md'
import {FiPlusSquare} from 'react-icons/fi'
import {LuUserCircle} from 'react-icons/lu'

function NavLink() {
  return (
    <div className='flex flex-col gap-2'>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <GoHome />
            <p>Home</p>
        </div>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <GoSearch />
            <p>Search</p>
        </div>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <IoChatbubbleEllipsesOutline />
            <p>Chats</p>
        </div>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <MdOutlineExplore />
            <p>Explore</p>
        </div>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <FiPlusSquare />
            <p>Create</p>
        </div>
        <div className='transition-colors flex gap-2 items-center text-xl p-2 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>
            <LuUserCircle />
            <p>Profile</p>
        </div>

    </div>
  )
}

export default NavLink