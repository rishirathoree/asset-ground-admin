import React, { useEffect, useRef } from 'react'
import pfp from '../../assets/pfp.jpg'
const Chatroom = () => {
    const dummychat = Array(7).fill(1)
    const search = useRef(null)
    useEffect(()=>{
        if(search.current){
            console.log(search.current.offsetHeight)
        }
    },[])
    return (
    <>
    <div className='grid grid-cols-3 h-[500px]'>
        <div className='h-full relative overflow-hidden overflow-y-auto bg-white w-full'>
            {/* search */}
            <div ref={search} className='w-full sticky  z-50 bg-white  top-0 right-0  p-4'>
                <input type="text" className='w-full font-normal ring-1 ring-black/5 rounded text-sm focus:outline-none outline-none text-gray-full0 p-4' placeholder='Search'/>
            </div>

            {/* peoples name with messages */}
            <div>
                {dummychat.map((item,index)=>{
                    return(
                        <div className='w-full p-4'>
                 <span className='w-full flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                    <div className='w-12 h-12 rounded-full bg-gray-300 overflow-hidden '><img src={pfp} className='w-full h-full object-cover' alt="" /></div>
                    <p className='font-medium text-[12px] first-letter:capitalize'>angela white</p>
                    </span>
                    <span className='font-medium text-black text-xsm'>01:00</span>
                 </span>
                 <div className='flex items-center pt-4 justify-between w-full'>
                 <span className='block  text-[12px] font-light'>Hey,I'm On Whatsapp Now!</span>
                 <p className='text-white p-1 w-[20px] h-[20px] flex items-center justify-center bg-purple-500 rounded-full text-[10px] font-medium'>4</p>
                 </div>
                </div>
                    )
                })}
            </div>
        </div>
        <div className='h-full relative overflow-hidden overflow-y-auto bg-white w-full col-start-2 col-end-4'>
            <div className='sticky top-0 right-0 bg-white flex border-b border-black/5 items-center p-3 justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-12 h-12 rounded-full bg-slate-50 overflow-hidden '><img src={pfp} className='w-full h-full object-cover' alt="" /></div>
                    <div className=''>
                        <p className='font-medium text-sm first-letter:capitalize'>angela white</p>
                        <p className='font-light text-green-500 text-[10px]'>Online</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className=''><i className='bx bx-video p-2 rounded-full ring-1 ring-black/5'></i></span>
                    <span className=''><i className='bx bx-phone p-2 rounded-full ring-1 ring-black/5'></i></span>
                    <span className=''><i className='bx bx-dots-vertical-rounded p-2 rounded-full ring-1 ring-black/5'></i></span>
                </div>
            </div>
            
                {/* chats */}
                <div className='w-full overflow-y-auto overflow-hidden h-max'>
                {dummychat.map((item,index)=>{
                    return(
                        <>
                        <span className='w-full  flex justify-start'> <p className='font-light text-[10px] text-black m-4 w-1/2 p-2 rounded-tl-xl rounded-r-xl bg-yellow-300/20 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione consequuntur necessitatibus fuga ut ab quaerat tempore excepturi aliquam nesciunt?</p></span>
                <span className='w-full  flex justify-end'><p className='font-light text-[10px] text-black m-4 w-1/2 p-2 rounded-tr-xl rounded-l-xl bg-blue-300/20 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione consequuntur necessitatibus fuga ut ab quaerat tempore excepturi aliquam nesciunt?</p></span>
                        </>
                    )
                })}
                </div>

                {/* input */}
                <div className='w-full sticky gap-2 bottom-0 right-0 bg-white flex border-t border-black/5 items-center p-3'>
                
                <span className=''><i className='bx bx-plus p-2  rounded-full ring-1 ring-black/5'></i></span>
                <input type="text" className='w-full font-medium bg-gray-100 p-3 text-sm text-gray-400 focus:outline-none outline-none rounded-full ' placeholder='Enter Message' />
                <span className=''><i className='bx bx-link p-2 rounded-full ring-1 ring-black/5'></i></span>
            </div>

        </div>
    </div>
    </>
  )
}

export default Chatroom