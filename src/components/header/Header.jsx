'use client'
import {DesktopHeader} from "@/components/header/DesktopHeader";
import {MobileHeader} from "@/components/header/MobileHeader";


export const Header = () => {

    return (
        <div className='common-header'>
            <DesktopHeader/>
            <MobileHeader/>
        </div>
    )
}
