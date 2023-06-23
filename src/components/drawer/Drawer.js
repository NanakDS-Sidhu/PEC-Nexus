import React from 'react'
import NavBar from '../Navbar/Navbar'
import Link from 'next/link'

export default function Drawer(props) {
  return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <NavBar>            
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">PEC Nexus</Link>
            </div></label>
            </NavBar>
            {props.children}
        </div> 
        
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/group">Chats</Link></li>
            <li><Link href="/devblog">Blogs</Link></li>
            <li><Link href="/devblog/createpost">Create Post</Link></li>
            </ul>
        </div>
        </div>
  )
}
