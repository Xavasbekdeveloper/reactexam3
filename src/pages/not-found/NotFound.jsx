import React, { memo } from "react";
import Empty from "../../components/empty";
import notFound from "../../assets/images/not-found.png";

const NotFound = () => {
  return <Empty img={notFound} />;
};

export default memo(NotFound);
