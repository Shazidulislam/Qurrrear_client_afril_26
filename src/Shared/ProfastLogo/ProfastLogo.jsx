import React from "react";

import logo from "../../assets/logo.png";

export default function ProFastLogo() {
  return (
    <div className="flex items-end gap-0">
      <img className="mb-2" src={logo} alt="" />
        <p className="-ml-3 text-3xl font-extrabold">ProFast</p>
    </div>
  );
}
