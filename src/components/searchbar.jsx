'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkIcon, SearchIcon } from "lucide-react"
import Link from 'next/link';  

export function Searchbar() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className={'w-96 justify-start gap-2 rounded-xl p-5'} variant="outline">
              <SearchIcon size={20}/>
              <h1 className="text-base text-[#5C5C5C] font-medium">Search Product</h1>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] pb-3">
            <DialogHeader>
              <DialogTitle>
                <SearchFrom/>
              </DialogTitle>
              <DialogDescription className={'px-[18px] pt-3'}>
                Product
              </DialogDescription>
            </DialogHeader>
              <ul className="flex flex-col gap-1 px-2"> 
                <li className="p-1 w-full flex gap-2 hover:bg-slate-200 rounded">
                  <LinkIcon/>
                  <Link href="#"> Computers</Link>
                </li> 
                <li className="p-1 w-full flex gap-2 hover:bg-slate-200 rounded">
                  <LinkIcon/>
                  <Link href="#"> Smartphones</Link>
                </li> 
                <li className="p-1 w-full flex gap-2 hover:bg-slate-200 rounded">
                  <LinkIcon/>
                  <Link href="#"> Tablets</Link>
                </li>  
              </ul>
          </DialogContent>
        </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        {/* <ProfileForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function SearchFrom({ className }) {
  return (
    <form>
        <SearchIcon size={26} className={'absolute top-2 pl-1'}/>
        <Input className={'px-7 rounded'} id="search-product" placeholder="search product" />
    </form>
  )
}
