'use client'

import { Metadata } from "next";
import Link from "next/link";
import {  useState } from "react";


 
  export default function DashBoardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [activeTab, setActiveTab] = useState('employees')
    return (
      <html lang="en">
      <body>
      <header className="flex flex-row justify-center items-center h-20 bg-slate-500">
        <nav className="">
          <ul className="flex flex-row gap-7 items-center text-2xl text-white">
            <li><Link href="/dashboard/employees">Dashboard</Link></li>
            <li><Link href="/dashboard/chat">Chat area</Link></li>
            <li><Link href="/dashboard/account">Account</Link></li>
          </ul>
        </nav>
      </header>
        {children}
        </body>
      </html>
    );
  }