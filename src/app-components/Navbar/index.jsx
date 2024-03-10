import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import './styles.scss';


export default () => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>About us</NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Events</NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Blog</NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Contact</NavigationMenu.Trigger>
        </NavigationMenu.Item>

      <NavigationMenu.Indicator className="NavigationMenuIndicator" />
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>

  )