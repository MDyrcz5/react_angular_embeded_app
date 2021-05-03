import React from "react";

const BasicReactPage: React.FC = () => {
  return (
    <div className={`app`}>
      <header className={`app-header`}>
        <img src="../assets/logo.svg" className={`app-logo`} alt="logo" />
      </header>
    </div>
  );
};

export default BasicReactPage;
