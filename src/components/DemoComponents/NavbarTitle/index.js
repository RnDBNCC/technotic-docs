import { Navbar } from 'technotic';
import React from 'react'
import logo from './img/image.png'

const NavbarTitle = () => {
    return (
      <div>
          <Navbar
            title={<img src={logo} alt="logo" />}
        />
      </div>
    );
}

export default NavbarTitle;