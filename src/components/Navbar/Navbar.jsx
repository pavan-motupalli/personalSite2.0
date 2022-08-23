import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import MenuItems from './MenuItems';

const Navbar = ({current}) => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }
    return (
    <div className='relative w-full flex justify-between p-4 items-center z-50'>
        <nav>
        <div className='fixed right-8 top-6 scale-150'>
            <MenuOutlined className='top-0 scale-150 cursor-pointer hover:bg-black/20' onClick={showMenu}/>
        </div>
            <MenuItems current={current} showMenu={showMenu} active={active}/>
        </nav>
    </div>
  )
}

export default Navbar