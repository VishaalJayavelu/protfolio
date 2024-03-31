// import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import logo from '../../assets/Logo.png'

import {LoaderProps} from '../../types'

export default function TopNavBar({isOpen}:LoaderProps) {
  
  return (
    <div className='flex gap-5 mt-0 justify-center items-center mb-auto top-0 w-screen h-fit p-5 opacity-100 bg-white border-b-2 shadow-2xl sticky '>
        {
            isOpen 
        ?
            <>
                <Skeleton className="h-10 w-64"/>
                <span className="flex flex-row gap-5 ml-auto mr-14 justify-center items-center">
                    <Skeleton className="h-5 w-12"/>
                    <Skeleton className="h-5 w-12"/>
                    <Skeleton className="h-5 w-10"/>
                    <Skeleton className="h-5 w-14"/>
                    <Skeleton className="h-5 w-28"/>
                    <Skeleton className="h-5 w-12"/>
                </span>
            </>
        :
            <>
                <Button variant="link">
                    <img src={logo} className="h-10 text-black"/>
                </Button>
                <span className="ml-auto mr-10">
                    <Button variant="link">Home</Button>
                    <Button variant="link">About</Button>
                    <Button variant="link">Skills</Button>
                    <Button variant="link">Projects</Button>
                    <Button variant="link">Qualifications</Button>
                    <Button variant="link">Contact</Button>
                </span>
            </>
        }
    </div>
  );
}
