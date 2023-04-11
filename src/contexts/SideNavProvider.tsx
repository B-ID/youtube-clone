import React, { ReactNode, useContext } from 'react'
import { createContext } from 'react'

type Props = {
    children: ReactNode
}

const SideNavContext = createContext({})

export function useSideNav() {
    return useContext(SideNavContext)
}



export default function SideNavProvider({children}: Props) {

    const value = {}
    return (
        <SideNavContext.Provider value={value}>
            {children}
        </SideNavContext.Provider>
    )
}