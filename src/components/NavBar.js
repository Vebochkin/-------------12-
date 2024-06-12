import React from 'react';

import duckGif from '../assets/duckGif.gif';

// Компонент для отображения страницы
const VPNSetupPage = () => {
  return (
    <div className="container">
      <div className="content">
        <img src={duckGif} alt="Duck" className="gif" />
        <h2 className="title">Давайте настроим VPN</h2>
        <p className="description">
          Чтобы подключить vpn, установите приложение, а затем нажмите Завершить настройку
        </p>
        <div className="footer">
          <button className="btn install-btn">
            Установить приложение
          </button>
          <button className="btn setup-btn">Завершить настройку</button>
        </div>
      </div>
    </div>
  );
};

export default VPNSetupPage;