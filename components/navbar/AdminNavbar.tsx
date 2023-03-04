import Link from "next/link"
import { BsWhatsapp,BsInstagram,BsTwitter,BsSearch,BsXCircleFill} from 'react-icons/bs'
import AdminMobileDropDownMenu from "../dropdowns/AdminMobileDropDownMenu"
import ButtonBlue from "../buttons/ButtonBlue"
import Searchbar from "../searchbar/Searchbar"
import Image from "next/image"
import React, {useState} from 'react'



export default function AdminNavbar(){

    const [showMobileSearchbar, setShowMobileSearhBar] = useState(false)


    return(
        <div className="fixed top-0 w-screen  bg-gray-100 shadow p-4 md:px-64 items-center justify-between flex py-2 h-12 z-10 text-primary-blue">
            <Image src="/images/logo.png" height={30} width={90} alt="logo" />
            <div className="hidden md:flex w-96 items-center justify-center">
                <Searchbar />
            </div>
            <div className=" hidden md:flex items-center justify-between gap-4">
                <Link href="/admin/all-cars">
                    All Cars
                </Link>
                <Link href="/admin/car-dealers">
                    Car Dealers
                </Link>
                <Link href="/admin/add-car">
                    <ButtonBlue text="Add New Car" onClick={()=>{}} />
                </Link>
            </div>
            <div className="flex items-center md:hidden gap-4">
               <BsSearch  onClick={()=>setShowMobileSearhBar(true)}/>
               <AdminMobileDropDownMenu />
            </div>
            { showMobileSearchbar &&
                <div className="absolute top-0 w-screen flex md:hidden left-0 bg-gray-200 h-12 px-4 items-center justify-center">
                    <div className="flex w-64 items-center flex-row ">
                        <Searchbar />
                        <BsXCircleFill onClick={()=>setShowMobileSearhBar(false)}  className="-ml-6"/>
                    </div>
                    
                </div>
            }
        </div>
    )
}