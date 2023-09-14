import { Footer } from 'technotic';
import React from 'react'
import logo from './img/image.png'

const FooterFullCustom = () => {
    return (
      <div>
          <Footer
        title={<img src={logo} alt="logo" />}
        description="Established in 1989, Bina Nusantara Computer Club (BNCC) is the oldest computer-based organization at BINUS University. We are a close-knit family of exceptional individuals who are passionately into technology and a commitment to professionalism."
        copyrightText="Copyright © 2023 Bina Nusantara Computer Club. All rights reserved."
        socialMedia={{
          facebook: {
            username: "Facebook",
            url: "https://www.facebook.com",
          },
          instagram: {
            username: "Instagram",
            url: "https://www.instagram.com",
          },
          linkedin: {
            username: "LinkedIn",
            url: "https://www.linkedin.com",
          },
        }}
        navLinksTitle1="Explore"
        navLinks1={[
          { text: "History", href: "/" },
          { text: "About Us", href: "/" },
          { text: "Structure", href: "/" },
        ]}
        navLinksTitle2="Products"
        navLinks2={[
          { text: "Filemagz", href: "/" },
          { text: "FAVE Solution", href: "/" },
          { text: "Learning & Training", href: "/" },
        ]}
        navLinksTitle3="Work with us"
        navLinks3={[{ text: "Contact Us", href: "/" }]}
      />
      </div>
    );
}

export default FooterFullCustom;