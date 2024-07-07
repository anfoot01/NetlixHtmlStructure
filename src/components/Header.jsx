import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container__left">
        <div className="header-container__left__logo">Netflix |</div>
        <div className="header-container__left__date"></div>
      </div>
      <div className="header-container__right">
        <div className="header-container__right__search">Search</div>
        <div className="header-container__right__user">UserIcon</div>
      </div>
    </header>
  );
};

export default Header;
