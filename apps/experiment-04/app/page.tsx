import { useId } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import UserDropdown from "@/components/user-dropdown"
import { RiSearch2Line } from "@remixicon/react"
import ThemeToggle from "@/components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  const id = useId()

  return (
    <div className="flex h-svh">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-auto px-4 md:px-6 lg:px-8">
          <header className="bg-sidebar sticky top-0 flex shrink-0 items-center gap-2 border-b py-4">
            <div className="flex-1">
              <div className="relative inline-flex">
                <Input id={id} className="h-8 ps-9 pe-9 bg-border border-transparent w-fit min-w-65" aria-label="Search" />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground peer-disabled:opacity-50">
                  <RiSearch2Line size={20} aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                  <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded bg-background shadow-xs px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    /
                  </kbd>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <UserDropdown />  
            </div>
          </header>
          <div className="flex flex-1 gap-6 py-6">
            {/* Converter widget */}
            <div className="md:order-1 md:w-90">
              <div>
                
              </div>
            </div> 
            {/* Chart and table */}
            <div className="flex-1">
              <Card>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
