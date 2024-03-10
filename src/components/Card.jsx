import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
function card({data,reference}) {
  return (
    <>
         <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-56 h-64 bg-zinc-900/90 rounded-[20px] text-white p-3  overflow-hidden '>
            <FaFileAlt/>
            <p className='text-sm mt-5 leading-tight font-semibold '>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full  left-0 '>
                <div className='flex justify-between items-center px-6 mb-3 '>
                    <h5>{data.filesize}</h5>
                    <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {data.close ? <MdClose color='#000'/> : <MdDownload size={".7em"} color='#000'/> }
                    
                    </span>
                </div>
                {
                    data.tag.isOpen && ( <div className={`tag flex justify-center items-center w-full h-12 bg-${data.tag.tagColor}-600`}>
                         <h5 className=' text-sm font-semibold '>{data.tag.tagTItle}</h5>
                        </div>

                    )
                }
                
            </div>
            
         </motion.div>
    </>
  )
}

export default card