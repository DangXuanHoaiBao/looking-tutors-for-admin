import themeOptions from '../constants/theme-constant';


function setEnableBackgroundImage(enableBackgroundImage) { 
   return{
        type: themeOptions.SET_ENABLE_BACKGROUND_IMAGE,
        enableBackgroundImage
    }
}

function setEnableFixedHeader(enableFixedHeader) { 
   return{
        type: themeOptions.SET_ENABLE_FIXED_HEADER, 
        enableFixedHeader
   }
}

function setEnableHeaderShadow(enableHeaderShadow) { 
   return{
        type: themeOptions.SET_ENABLE_HEADER_SHADOW,
        enableHeaderShadow
   }
}

function setEnableSidebarShadow(enableSidebarShadow) { 
   return{
        type: themeOptions.SET_ENABLE_SIDEBAR_SHADOW,
        enableSidebarShadow
   }
}

function setEnablePageTitleIcon(enablePageTitleIcon) { 
   return{
        type: themeOptions.SET_ENABLE_PAGETITLE_ICON,
        enablePageTitleIcon
   }
}

function setEnablePageTitleSubheading(enablePageTitleSubheading) { 
   return{
        type: themeOptions.SET_ENABLE_PAGETITLE_SUBHEADING,
        enablePageTitleSubheading
   }
}

function setEnablePageTabsAlt(enablePageTabsAlt) { 
   return{
        type: themeOptions.SET_ENABLE_PAGE_TABS_ALT,
        enablePageTabsAlt
   }
}

function setEnableFixedSidebar(enableFixedSidebar) { 
   return{
        type: themeOptions.SET_ENABLE_FIXED_SIDEBAR,
        enableFixedSidebar
   }
}

function setEnableClosedSidebar(enableClosedSidebar) { 
   return{
        type: themeOptions.SET_ENABLE_CLOSED_SIDEBAR,
        enableClosedSidebar
   }
}

function setEnableMobileMenu(enableMobileMenu) { 
   return{
        type: themeOptions.SET_ENABLE_MOBILE_MENU,
        enableMobileMenu
   }
}

function setEnableMobileMenuSmall(enableMobileMenuSmall) { 
   return{
        type: themeOptions.SET_ENABLE_MOBILE_MENU_SMALL,
        enableMobileMenuSmall
   }
}

function setEnableFixedFooter(enableFixedFooter) { 
   return{
        type: themeOptions.SET_ENABLE_FIXED_FOOTER,
        enableFixedFooter
   }
}

function setBackgroundColor(backgroundColor) { 
   return{
        type: themeOptions.SET_BACKGROUND_COLOR,
        backgroundColor
   }
}

function setHeaderBackgroundColor(headerBackgroundColor) { 
   return{
        type: themeOptions.SET_HEADER_BACKGROUND_COLOR,
        headerBackgroundColor
   }
}

function setColorScheme(colorScheme) { 
   return{
        type: themeOptions.SET_COLOR_SCHEME,
        colorScheme
   }
}

function setBackgroundImageOpacity(backgroundImageOpacity) { 
   return{
        type: themeOptions.SET_BACKGROUND_IMAGE_OPACITY,
        backgroundImageOpacity
   }
}

function setBackgroundImage(backgroundImage) { 
   return{
        type: themeOptions.SET_BACKGROUND_IMAGE,
        backgroundImage
   }
}

const themeAction = {
    setEnableBackgroundImage,
    setEnableFixedHeader,
    setEnableHeaderShadow,
    setEnableSidebarShadow,
    setEnablePageTitleIcon,
    setEnablePageTitleSubheading,
    setEnablePageTabsAlt,
    setEnableFixedSidebar,
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
    setEnableFixedFooter,
    setBackgroundColor,
    setHeaderBackgroundColor,
    setColorScheme,
    setBackgroundImageOpacity,
    setBackgroundImage,
}
export default themeAction;
