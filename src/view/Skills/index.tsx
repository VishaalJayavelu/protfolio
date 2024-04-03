import { useEffect, //useState, 
  useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { Skeleton } from "@/components/ui/skeleton"
import { LoaderProps } from '@/types';

export default function Skills({isOpen}:LoaderProps){

  const {pathname} = useLocation()
  console.log("pathname",pathname,pathname.split('/')[1])
  const divRef = useRef<null | HTMLDivElement>(null)
  
  useEffect(()=>{
    if(pathname.split('/')[1]=="skills") divRef?.current?.scrollIntoView( { behavior: "smooth", block: "center", } );
  },[pathname])

    return(
        <>
        {
            isOpen 
        ?
            <Skeleton className="flex items-center space-x-4 border w-full border-black justify-center p-10" />
        :
            <div ref={pathname.split('/')[1]=="skills"? divRef : null} className="flex items-center space-x-4 border w-full border-black justify-center p-10">
                Skills
            </div>
        }
    </>
    );
}
