"use client"
import NoTrades from "@/components/trades/noTrades"
import { useState } from "react"

export default function  Page(){
    const [trade, setTrade] = useState<boolean>(false)
    // Get user Data and check if the onboarding has happened
    return (trade == false ? <NoTrades/>:""
   )
}
