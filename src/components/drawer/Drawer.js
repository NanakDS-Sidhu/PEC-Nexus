import React from 'react'
import NavBar from '../Navbar/Navbar'

export default function Drawer(props) {
  return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <NavBar>            
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">PEC Nexus</a>
            </div></label>
            </NavBar>
            {props.children}
        </div> 
        
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a href="/">Home</a></li>
            <li><a href="/group">Chats</a></li>
            <li><a href="/devblog">Blogs</a></li>
            <li><a href="/devblog/createpost">Create Post</a></li>
            </ul>
        </div>
        </div>
  )
}
