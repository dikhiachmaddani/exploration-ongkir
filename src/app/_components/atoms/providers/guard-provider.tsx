"use client"

import * as React from "react"
import { useUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface GuardProps {
  children: React.ReactNode
}

export function GuardProvider({ children }: GuardProps) {
  const { isSignedIn } = useUser();
  if (isSignedIn == false) redirect('/')
  return <main>{children}</main>
}
