import React from 'react';
const Footer = () => {
  return (
    <div>
      <footer className='bg-body-tertiary text-center text-lg-start'>
        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2020 Copyright:
          <a className='text-body' href='https://megamart.com/'>
            Megamart.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
