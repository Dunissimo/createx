import ToolboxTabs from "@src/UI/Tabs/ToolboxTab/ToolboxTab";
import { BlogTabsTypeEnum, CourseTypeEnum } from "@src/utils/interfaces";
import { FC, MouseEventHandler } from "react";

import Input from "@src/UI/Form/Input/Input";
import Select from "@src/UI/Form/Select/Select";
import styles from "./BlogToolbox.module.scss";

import article from "@assets/blog/article.svg";
import podcast from "@assets/blog/podcast.svg";
import video from "@assets/blog/video.svg";
import { useSearchParams } from "react-router-dom";

const BlogToolbox: FC = () => {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "";
  const search = params.get("search") || "";

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!(e.target instanceof HTMLDivElement)) return;

    setParams({ type: e.target.dataset.type || "" });
  };

  return (
    <div className={styles.toolbox}>
      <ToolboxTabs
        type="blog"
        className={styles.tabs}
        values={[
          { text: BlogTabsTypeEnum.All },
          { text: BlogTabsTypeEnum.Article, icon: article },
          { text: BlogTabsTypeEnum.Video, icon: video },
          { text: BlogTabsTypeEnum.Podcast, icon: podcast },
        ]}
        onClick={clickHandler}
        defaultValue={BlogTabsTypeEnum.All}
      />

      <div className={styles.toolboxRight}>
        <div className={styles.toolboxItem}>
          <label htmlFor="themes">Blog category</label>

          <Select
            className={styles.toolboxSelect}
            id="themes"
            values={[
              "All themes",
              CourseTypeEnum.Design,
              CourseTypeEnum.Development,
              CourseTypeEnum.Management,
              CourseTypeEnum.Marketing,
              CourseTypeEnum.Recruting,
            ]}
            onChange={(e) => {
              setParams({
                type,
                search,
                theme: e.target.value,
              });
            }}
          />
        </div>

        <Input
          image="search"
          placeholder="Search blog..."
          type="search"
          value={search}
          onChange={(e) =>
            setParams({
              type,
              search: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default BlogToolbox;
