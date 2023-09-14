import { Navbar } from 'technotic';
import React from 'react'
import logo from './img/image.png'

const NavbarFullCustom = () => {
    return (
      <div>
          <Navbar
            title={<img src={logo} alt="logo" />}
            navLinks={[
                { text: "Home", href: "/" },
                { text: "Products", href: "/products" },
                { text: "Event", href: "/events" },
            ]}
            buttonLink={{ text: "Contact Us", href: "/contact" }}
        />
      </div>
    );
}

export default NavbarFullCustom;