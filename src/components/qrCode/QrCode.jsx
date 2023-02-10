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

    const intervalId = setInterval(() => {
      fetchQRCodeUrl();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const diagramUrl = 'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-1.jpg';

  return (
    <QrCodeStyles>
      <h1>QR Code Generator</h1>
      <hr />
      <main>
        {/* <div className="left-side"> */}
            <div className="diagram">
                <img src={diagramUrl} alt="" />
            </div>
            <div className="text">
                <HiOutlineCamera />
                <p>Scan QR Code</p>
            </div>
        {/* </div> */}
        <div className="right-side">
          <img src={url} alt="QR code" />
        </div>
      </main>
    </QrCodeStyles>
  );
};

export default QrCode;