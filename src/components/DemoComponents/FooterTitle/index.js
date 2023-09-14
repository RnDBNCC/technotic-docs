import { Footer } from 'technotic';
import React from 'react'
import logo from './img/image.png'

const FooterTitle = () => {
    return (
      <div>
          <Footer
        title={<img src={logo} alt="logo" />}
        description="Established in 1989, Bina Nusantara Computer Club (BNCC) is the oldest computer-based organization at BINUS University. We are a close-knit family of exceptional individuals who are passionately into technology and a commitment to professionalism."
        copyrightText="Copyright © 2023 Bina Nusantara Computer Club. All rights reserved."
      />
      </div>
    );
}

export default FooterTitle;