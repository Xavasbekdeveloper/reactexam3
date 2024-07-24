import React, { memo } from "react";
import { SERVICE_DATA } from "../../static";

import "./service.scss";

const Service = () => {
  const cards = SERVICE_DATA.map((item) => (
    <div key={item.id} className="service__card">
      <div>
        <img src={item.img} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ));
  return (
    <section className="service">
      <div className="container service__container">{cards}</div>
    </section>
  );
};

export default memo(Service);
