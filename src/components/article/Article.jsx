import React, { memo } from "react";
import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./article.scss";

const Article = ({ isShow }) => {
  return (
    <section className="article max-container">
      <div className="container">
        {isShow ? (
          <div className="article__top">
            <h2 className="article__title">Article</h2>
            <Link className="banner__link" to={"/blog"}>
              More Articles <FaArrowRightLong />
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="article__cards">
          <div className="article__card">
            <div className="article__card__img">
              <img src={article1} alt="article img" />
            </div>
            <div className="article__card__info">
              <h3>7 ways to decor your home</h3>
              <Link className="banner__link" to={"/blog"}>
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="article__card">
            <div className="article__card__img">
              <img src={article2} alt="article img" />
            </div>
            <div className="article__card__info">
              <h3>Kitchen organization</h3>
              <Link className="banner__link" to={"/blog"}>
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="article__card">
            <div className="article__card__img">
              <img src={article3} alt="article img" />
            </div>
            <div className="article__card__info">
              <h3>Decor your bedroom</h3>
              <Link className="banner__link" to={"/blog"}>
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Article);
