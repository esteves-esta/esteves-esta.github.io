// import React from 'react';
import classes from "./styles.module.css"

function Header({ timeOfDay }) {
  return (
    <header className={classes.header}>
      <div className="header-content">
        <h1>
          {timeOfDay == 'morning' && "bom dia"}
          {timeOfDay == 'afternoon' && "boa tarde"}
          {timeOfDay == 'night' && "boa noire"}
          <span className={classes.emoticon}>\(^-^)/</span>
        </h1>
        <h1>bem vindo ao meu portfolio</h1>
      </div>
    </header>
  );
}

export default Header;
