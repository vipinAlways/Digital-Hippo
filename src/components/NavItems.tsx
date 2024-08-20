'use client'

import { PRODUCT_CATEGORIES } from "@/app/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

function NavItems() {
    const [activeIndex,setActiveIndex] = useState<null | number>(null)

    const isAnyOpen =activeIndex !==null

    const navRef =useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
      const handler = (e:KeyboardEvent)=>{
          if (e.key === 'Escape') {
            setActiveIndex(null)
          }
      }

      document.addEventListener("keydown",handler)


      return()=>{
        document.removeEventListener("keydown",handler)
      }
    },[])

    const close = () => setActiveIndex(null)
   useOnClickOutside(navRef,()=> setActiveIndex(null))
  return (
    <div className="flex gap-4 h-full">
         {PRODUCT_CATEGORIES.map((category,i)=>{
          const handleOpen =()=>{
            if (activeIndex === i) {
              setActiveIndex(null)
            }
            else{
              setActiveIndex(i)
            }
          }

          const isOpen = i === activeIndex
          return (
            <NavItem category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen} />
          )
         })}   

    </div>
  )
}

export default NavItems