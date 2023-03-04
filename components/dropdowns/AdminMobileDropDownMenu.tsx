import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { BsWhatsapp,BsInstagram,BsTwitter,BsMenuUp } from 'react-icons/bs'
import ButtonBlue from '../buttons/ButtonBlue'
import Link from 'next/link'


export default function AdminMobileDropDownMenu(){
    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <BsMenuUp />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
               <DropdownMenu.Content sideOffset={5} className="bg-white rounded shadow p-2 text-primary-blue">
                 <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 ">
                       
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 ">
                        <Link href="/admin/all-cars">
                            <text>All Cars</text>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
                        <Link href="/admin/car-dealers">
                            <text>Car Dealers</text>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="items-center justify-center flex">
                        <Link href="/admin/add-car">
                            <ButtonBlue text="Add new car" onClick={()=>{}} />
                        </Link>
                    </DropdownMenu.Item>
               </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}