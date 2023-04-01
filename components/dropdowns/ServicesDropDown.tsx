import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsWhatsapp, BsInstagram, BsTwitter, BsMenuUp } from "react-icons/bs";
import ButtonBlue from "../buttons/ButtonBlue";
import Link from "next/link";

export default function ServicesDropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="text-primary-black hover:text-primary-yellow hover:underline hover:underline-offset-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold">
          SERVICES
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-primary-black rounded shadow p-2 z-40"
        >
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 "></DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 ">
            <Link href="/real-eastate">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                REAL EASTATE
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/medical-and-health">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                HEALTH AND MEDICINE
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/energy-and-petroleum">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                ENERGY AND PETROLEUM
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/construction">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                CONSTRUCTION
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/manufacturing">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                MANUFACTURING
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/microfinance">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                MICROFINANCE
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/mining">
              <text className="text-text-color hover:text-primary-yellow text-lg font-semibold">
                MINING
              </text>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
