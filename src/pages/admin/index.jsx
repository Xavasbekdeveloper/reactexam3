import React, { memo } from "react";
import Sidebar from "../../components/admin-sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "./admin.scss";

const Admin = () => {
  return (
    <section className="admin">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default memo(Admin);
