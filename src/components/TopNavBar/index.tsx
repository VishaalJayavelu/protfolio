// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useLocation } from 'react-router-dom'

import logo from '../../assets/Logo.png'

import {LoaderProps} from '../../types'

export default function TopNavBar({isOpen}:LoaderProps) {

    const navigate = useNavigate()
    const {pathname} = useLocation()
  
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
                    <Button variant="ghost" onClick={()=>navigate('/')} >
                        <img src={logo} className="h-10 text-black"/>
                    </Button>
                    <span className="ml-auto mr-10">
                        <Button variant="link" onClick={()=>navigate('/')} className={`${pathname.split('/')[1]=='' ? 'underline' : '' }`}>Home</Button>
                        <Button variant="link" onClick={()=>navigate('/about')} className={`${pathname.split('/')[1]=='about' ? 'underline' : '' }`}>About</Button>
                        <Button variant="link" onClick={()=>navigate('/skills')} className={`${pathname.split('/')[1]=='skills' ? 'underline' : '' }`}>Skills</Button>
                        <Button variant="link" onClick={()=>navigate('/projects')} className={`${pathname.split('/')[1]=='projects' ? 'underline' : '' }`}>Projects</Button>
                        <Button variant="link" onClick={()=>navigate('/qualifications')} className={`${pathname.split('/')[1]=='qualifications' ? 'underline' : '' }`}>Qualifications</Button>
                        <Button variant="link" onClick={()=>navigate('/contact')} className={`${pathname.split('/')[1]=='contact' ? 'underline' : '' }`}>Contact</Button>
                    </span>
                </>
            }
        </div>
    );
}
