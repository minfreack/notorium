import React from "react";
import "./login.scss";

export const Login = () => {
  return (
    <div className="main-container">
      <div class="switch-button">
        <input class="switch-button-checkbox" type="checkbox"></input>
        <label class="switch-button-label" for="">
          <span class="switch-button-label-span">Registrarse</span>
        </label>
      </div>
    </div>
  );
};
