import React, { useState } from "react";
import "./tabs.css";

function Tabs() {
  const [toggle, setToggle] = useState(1);
  let langs = [1, 2, 3, "y", 8];

  return (
    <div className="tabs">
      {/* <div className='check'> {langs.map(it=><p>{it}</p>)}</div> */}
      <div className="tabone">tab1</div>
      <div className="tabtwo">tab2</div>
      <div className="tabthree">tab3</div>
    </div>
  );
}

export default Tabs;
