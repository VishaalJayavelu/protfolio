import { useEffect, //useState, 
  useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { Skeleton } from "@/components/ui/skeleton"
import { LoaderProps } from '@/types';

export default function Home({isOpen}:LoaderProps){

  const {pathname} = useLocation()
  console.log("pathname",pathname,pathname.split('/')[1])
  const divRef = useRef<null | HTMLDivElement>(null)
  
  useEffect(()=>{
    if(pathname.split('/')[1]=="") divRef?.current?.scrollIntoView( { behavior: "smooth", block: "center", } );
  },[pathname])

    return(
        <>
        {
            isOpen 
        ?
            <Skeleton className="flex items-center space-x-4 border w-screen h-[90vh] border-black justify-center" />
        :
            <div ref={pathname.split('/')[1]==""? divRef : null} className='flex flex-col  align-bottom gap-0 bg-black text-white font-black '>
                <div className='pt-96 p-5 mx-10 w-1/4 text-justify justify-stretch'>
                    Vishaal, an engineering-driven web developer, thrives on challenges, pushing boundaries with creativity. His proactive approach and robust skill set keep him ahead in the fast-paced world of web development. Passionate about innovation, he seeks opportunities to expand his knowledge and tackle projects with precision and enthusiasm.
                </div>
                <div className="flex justify-center item-center text-[14em] -m-14">
                    WEB DEVELOPER
                </div>
            </div>
        }
    </>
    );
}
