import React, { memo, useEffect } from "react";
import Article from "../../components/article/Article";

import "./blog.scss";

const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__container">
          <div className="blog__top">
            <h1>Our Blog</h1>
            <p>Home ideas and design inspiration</p>
          </div>
          <Article isShow={false} />
          <Article isShow={false} />
          <Article isShow={false} />
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
