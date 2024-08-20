import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function Wrapper({className,children}:{className?:string ,children:ReactNode}) {
  return (
    <div className={cn(className,"mx-auto w-full max-w-screen-xl px-2.5 md:px-20")}>
            {children}
    </div>
  )
}

export default Wrapper