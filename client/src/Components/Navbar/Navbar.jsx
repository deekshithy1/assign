import React, { useRef } from 'react';
import logo from '../../Assets/logo.png';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const fileInputRef = useRef(null);

  const openFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        localStorage.setItem('uploadedPDF', fileContent); // Save to local storage
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  };

  return (
    <header className="header">
      <nav>
        <div className='hello'>
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><button className="upload" onClick={openFileUpload}>Upload PDF</button></li>
          </ul>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
