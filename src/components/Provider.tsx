"use client"

import { QueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

function Provider() {

    const {queryClient}   = useState(()=>new QueryClient())
    const {trpcClient} = useState(()=> trpcClient.createClient())


  return (
    <div></div>
  )
}

export default Provider