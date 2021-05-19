import React from 'react';
import {MenuList} from './MenuList';

const Navbar = () => {
    
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

    const menuList = MenuList.map(({url , title})=>{
        return(
            <li>
                <a href={url}>{title}</a>
            </li>
        );
    });
return(
    <nav className ="nav-wrapper">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        
        <div className="brand-logo">
            Doosan Bears
        </div>
        <ul className="right hide-on-med-and-down">
        {menuList}
        </ul>
        
        <ul className="sidenav" id="mobile-demo">
            {menuList}
        </ul>
    </nav>

    
)
}

export default Navbar;