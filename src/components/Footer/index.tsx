import { Skeleton } from "@/components/ui/skeleton"

import {LoaderProps} from '../../types'

export default function Footer({isOpen}:LoaderProps) {
  
  return (
    <>
        {
            isOpen 
        ?
            <Skeleton className="flex items-center space-x-4 w-full justify-center p-10" />
        :
            <div className="flex left-0 bg-black text-white -m-5 items-center space-x-4 w-screen h-full justify-center p-10">
                Footer
            </div>
        }
    </>
  );
}
