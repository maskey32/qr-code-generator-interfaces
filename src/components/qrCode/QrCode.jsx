import React, { useState, useEffect } from 'react';
import { QrCodeStyles } from './QrCodeStyles';
import { HiOutlineCamera } from 'react-icons/hi';
import { apiGet } from '../../utils/api';

const QrCode = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchQRCodeUrl = async () => {
      try {
        const response = await apiGet('qrcode');

        setUrl(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQRCodeUrl();
    // const intervalId = setInterval(() => {
    //   fetchQRCodeUrl();
    // }, 10000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);


  return (
    <QrCodeStyles>
      <h1>QR Code Generator</h1>
      <hr />
      <main>
        <div className="text">
          <HiOutlineCamera />
          <p>Scan QR Code</p>
        </div>
        <div className="right-side">
          <img src={url} alt="QR code" />
        </div>
      </main>
    </QrCodeStyles>
  );
};

export default QrCode;