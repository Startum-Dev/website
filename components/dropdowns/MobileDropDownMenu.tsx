import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { BsWhatsapp,BsInstagram,BsTwitter,BsMenuUp } from 'react-icons/bs'
import ButtonBlue from '../buttons/ButtonBlue'


export default function MobileDropDownMenu(){
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
                       <BsTwitter /> Follow us on Twitter
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
                       <BsInstagram /> Follow us on Instagram
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
                       <BsWhatsapp /> Join our whatsapp groups
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="items-center justify-center flex">
                        <ButtonBlue text="Sell Car" onClick={()=>{}} />
                    </DropdownMenu.Item>
               </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}