import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import ServicesDropDownMenu from "./ServicesDropDown";
import Link from "next/link";

export default function MobileDropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <GiHamburgerMenu className="text-text-color" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-primary-black  rounded shadow p-2 text-primary-blue"
        >
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 "></DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 ">
            <Link href="/">
              <text className="text-white text-lg font-semibold hover:text-primary-yellow">
                HOME
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2 ">
            <ServicesDropDownMenu />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/blog">
              <text className="text-white text-lg font-semibold hover:text-primary-yellow">
                BLOG
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/about-us">
              <text className="text-white text-lg font-semibold hover:text-primary-yellow">
                ABOUT
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/#">
              <text className="text-white text-lg font-semibold hover:text-primary-yellow">
                COMPANY PROFILE
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm font-semibold flex gap-2 items-center justify-start p-2">
            <Link href="/contact-us">
              <text className="text-white text-lg font-semibold hover:text-primary-yellow">
                CONTACT
              </text>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="items-center justify-center flex">
            <Link href="/projects-hub">
              <button className="rounded border-2 border-white text-white hover:text-primary-yellow hover:border-primary-yellow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold p-2">
                PROJECT HUB
              </button>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
