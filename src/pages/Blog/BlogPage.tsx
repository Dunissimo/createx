import Title from "@src/UI/Title/Title";
import BlogToolbox from "@src/components/BlogToolbox/BlogToolbox";
import ItemsList from "@src/components/ItemList/ItemList";
import Navbar from "@src/components/Navbar/Navbar";
import { BlogTabsTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";

import SubscribeNews from "@src/components/SubscribeNews/SubscribeNews";
import { useSearchParams } from "react-router-dom";
import styles from "./BlogPage.module.scss";

const BlogPage: FC = () => {
  const [params] = useSearchParams();
  const type = params.get("type") || "";

  return (
    <section>
      <Navbar />

      <Title align="center" style={{ margin: "80px 0 60px 0" }}>
        <h2>Our blog</h2>
        <h3>Createx School Journal</h3>
      </Title>

      <div className="blogToolbox">
        <div className="container">
          <BlogToolbox type={type as BlogTabsTypeEnum} />
        </div>
      </div>

      <div className={styles.postsList}>
        <div className="container">
          <ItemsList
            type="blog"
            limit={9}
            // Строчка ниже нужна, чтобы отрезать "с" у табов Videos, Articles, Podcasts
            // у All "s" нет, так что резать ничего не надо
            itemType={(type !== "All" ? type.slice(0, -1) : type) as BlogTabsTypeEnum}
          />
        </div>

        {/* pagination */}
      </div>

      <div className={styles.newsletters}>
        <div className="container">
          <SubscribeNews />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
