"use client"

import { BarChart, Users, Package, FileText, MessageSquare, Settings, ShieldAlert, LayoutDashboard, Award, Zap, Scale, Leaf, Gift, Calendar } from 'lucide-react'
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarTrigger, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton
} from "@/components/ui/sidebar"

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "User Management", href: "/admin/users" },
  { icon: Award, label: "Seller Verification", href: "/admin/seller-verification" },
  { icon: Package, label: "Listing Management", href: "/admin/listings" },
  { icon: ShieldAlert, label: "Content Moderation", href: "/admin/moderation" },
  { icon: Zap, label: "Dynamic Pricing", href: "/admin/dynamic-pricing" },
  { icon: Scale, label: "Dispute Resolution", href: "/admin/disputes" },
  { icon: BarChart, label: "Market Trends", href: "/admin/market-trends" },
  { icon: Leaf, label: "Sustainability Tracker", href: "/admin/sustainability" },
  { icon: Gift, label: "Rewards System", href: "/admin/rewards" },
  { icon: Calendar, label: "Campaign Manager", href: "/admin/campaigns" },
  { icon: Settings, label: "Platform Settings", href: "/admin/settings" },
]

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl font-bold px-4 py-2">AgriTrade Admin</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <a href={item.href}>
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  )
}

