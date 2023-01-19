import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Pet Owners',
        path: '/PetOwners',
        icon: <GiIcons.GiSittingDog />,
        cName: 'nav-text'
    },
    {
        title: 'Pet Sitters',
        path: '/PetSitters',
        icon: <FaIcons.FaHandsHelping />,
        cName: 'nav-text'
    },
]