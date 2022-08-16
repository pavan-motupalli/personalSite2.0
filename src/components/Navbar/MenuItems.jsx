import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';




const MenuItems = ({showMenu, active, current}) => {
    const tabs = [
        {
            url: "/",
            page: "Home"
        },
        {
            url: "/about",
            page: "About",
        },
        {
            url: "/leadership",
            page: "Leadership"
        },
        {
            url: "/involvement",
            page: "Involvement"
        },
        {
            url: "/experience",
            page: "Experience"
        },
        {
            url: "/contact",
            page: "Contact"
        }
    ]
    
  
    return (
    <div>
        <ul className={active ? 'text-2xl transition ease-in duration-1000 flex-col flex items-center fixed inset-0 left-1/4  uppercase bg-black/20 backdrop-blur-lg gap-8 p-8 justify-center' : 'hidden'}>
            <Close onClick={showMenu} className='hover:text-sky-500 cursor-pointer' />
            {tabs.map((page) => (
                <li className= {page.page === current ? 'underline font-bold hover:text-sky-500' : 'hover:text-sky-500'}><Link to={page.url} onClick={showMenu}>{page.page}</Link></li>
            ))}
        </ul>

    </div>
  )
}

export default MenuItems