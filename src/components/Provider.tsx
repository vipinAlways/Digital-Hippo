"use client"

import { trpc } from '@/trpc/client'
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { PropsWithChildren, useState } from 'react'


function Provider({children}:PropsWithChildren) {

    const [queryClient]   = useState(()=>new QueryClient())
    const [trpcClient] = useState(()=> trpc.createClient({
      links:[
        httpBatchLink({
          url:`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url,options){
            return fetch(url,{
              ...options,
              credentials:"include"
            })
          }
        })
      ]
    }))


  return (
    <div></div>
  )
}

export default Provider