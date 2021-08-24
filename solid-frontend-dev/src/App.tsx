import { Component, onMount } from "solid-js";
import "./assets/css/styles.css";
import "./assets/css/custom-styles.css";
import { CookieTable, CookieCategory } from "./listing/cookie-table";
import { closeCookiebanner, disableOtherUI } from "./banner-handling";

const App: Component = () => {
  onMount(() => {
    disableOtherUI();
  });

  return (
    <div id="backgroundContainer">
      <div className="container cookieContainer content">
        <h2 textContent={window.cookiemeta.headline}></h2>
        <p innerHTML={window.cookiemeta.introduction}></p>
        <CookieTable
          category={CookieCategory.required}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <CookieTable
          category={CookieCategory.functional}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <CookieTable
          category={CookieCategory.marketing}
          cookieNameTable={window.cookiemeta.cookienameColumn}
          hostNameTable={window.cookiemeta.cookiehostColumn}
          persistenceNameTable={window.cookiemeta.cookiepersistenceColumn}
        />
        <div className="columns mt-2">
          <div className="column">
            <button
              className="button is-small is-secondary"
              onClick={() => closeCookiebanner(CookieCategory.required)}
            >
              {window.cookiemeta.declinenonrequiredbtn}
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <button
              className="button is-small is-secondary"
              onClick={() => closeCookiebanner(CookieCategory.functional)}
            >
              {window.cookiemeta.onlyfunctionalbtn}
            </button>
          </div>
          <div className="column">
            <button
              className="button  is-primary"
              onClick={() => closeCookiebanner(CookieCategory.marketing)}
            >
              {window.cookiemeta.acceptallbtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
