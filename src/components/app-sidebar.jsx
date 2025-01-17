import {Home, Compass, BookHeart, LayoutGrid ,Settings, Headphones, ChevronsRight, ChevronRight, DollarSign} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Explore",
    url: "#",
    icon: Compass,
  },
  {
    title: "Saved",
    url: "#",
    icon: BookHeart,
  },
  {
    title: "Catagories",
    url: "#",
    icon: LayoutGrid,
    Catagories: [
      {
        title: "Saved1",
        url: "#",
        icon: BookHeart,
      },
      {
        title: "Saved2",
        url: "#",
        icon: BookHeart,
      },
      {
        title: "Saved3",
        url: "#",
        icon: BookHeart,
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: 'Selling',
    url: '#',
    icon: DollarSign
  },
  {
    title: "Profiles",
    url: "#",
    icon: LayoutGrid,
    Catagories: [
      {
        title: "pro1",
        url: "#",
        icon: BookHeart,
      },
      {
        title: "pro2",
        url: "#",
        icon: BookHeart,
      },
      {
        title: "pro3",
        url: "#",
        icon: BookHeart,
      },
    ],
  },
]

/* <Headphones size={52} color="#016170" className="bg-[#E8FCFF] p-1"/> */

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="pl-[6px] flex w-full gap-2 items-center">
          <Headphones size={52} color="#016170" className="bg-[#E8FCFF] p-1 rounded-xl"/>
          <h1 className="text-2xl font-bold text-[#016170]">Soundix.</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.Catagories? 
                  <Collapsible className="group/collapsible">
                    <CollapsibleTrigger className="w-full h-8 p-2 gap-2 flex items-center hover:bg-[#E8FCFF] rounded-[8px]">
                      <item.icon size={22}/>
                      <span className="text-base font-medium">{item.title}</span>
                      <ChevronRight size={22} className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"/>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-2 pl-1">
                      {item.Catagories.map((item)=>(
                      <SidebarMenuButton key={item.title} className={'hover:bg-[#E8FCFF] rounded-[8px]'} asChild>
                        <a href={item.url}>
                          <item.icon size={22}/>
                          <span className="text-base font-medium">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  :
                  <>
                    <SidebarMenuButton className={'hover:bg-[#E8FCFF] rounded-[8px]'} asChild>
                      <a href={item.url}>
                        <item.icon size={22}/>
                        <span className="text-base font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </>
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="w-full p-2 h-[280px]">
            <div className="flex justify-center items-center size-full bg-[#A1D2FF] rounded-xl">
              Adds
            </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

// const Icons = {
//   logo: ()=>(

//   )
// }