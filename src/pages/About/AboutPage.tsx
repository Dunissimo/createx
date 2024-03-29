import { FC } from "react";

import Button from "@src/UI/Button/Button";
import Direction from "@src/UI/Cards/Direction/Direction";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Steps from "@src/UI/Steps/Steps";
import Title from "@src/UI/Title/Title";
import Value from "@src/UI/Values/Value";
import LatestPosts from "@src/components/LatestPosts/LatestPosts";
import Navbar from "@src/components/Navbar/Navbar";
import Subscribe from "@src/components/Subscribe/Subscribe";
import Testimonials from "@src/components/Testimonials/Testimonials";
import { handleLinkClick } from "@src/utils/helpers";
import { CourseTypeEnum } from "@src/utils/interfaces";
import { Link } from "react-router-dom";

import styles from "./AboutPage.module.scss";

import calendar from "@assets/blog/ic-calendar.svg";
import chat from "@assets/blog/ic-chat.svg";
import strucure from "@assets/blog/ic-structure.svg";
import target from "@assets/blog/ic-target.svg";
import process from "@assets/illustration-about.svg";
import about from "@assets/illustration-blog.svg";
import job1 from "@assets/jobs/Atlantis Health Logo.svg";
import job2 from "@assets/jobs/Complete Health Logo - Untitled Page.svg";
import job4 from "@assets/jobs/For Sale Logo.svg";
import job5 from "@assets/jobs/Happy Home Logo.svg";
import job12 from "@assets/jobs/Higher Fit Logo - Untitled Page.svg";
import job6 from "@assets/jobs/InDepth Consulting Logo - Untitled Page.svg";
import job7 from "@assets/jobs/National Health Logo.svg";
import job8 from "@assets/jobs/Sentinal Consulting Logo.svg";
import job10 from "@assets/jobs/Ultimate Gym Logo.svg";
import job11 from "@assets/jobs/United Strategy Logo.svg";
import video from "@assets/video.svg";
import ItemsList from "@src/components/ItemList/ItemList";

const AboutPage: FC = () => {
  return (
    <section>
      <Navbar />

      <section className={styles.about}>
        <div className="container">
          <Row settings={{ gap: "165px" }}>
            <RowItem>
              <Title style={{ color: "#1e212c" }}>
                <h2>about us</h2>
                <h3>Createx Online School</h3>
              </Title>

              <h4>
                Createx Online School is a leader in online studying. We have lots of
                courses and programs from the main market experts.
              </h4>

              <p>
                We provide relevant approaches to online learning, internships and
                employment in the largest companies in the country. Our educational
                programs help you get a new specialty from scratch. During your studies,
                we will help you find a job. Check the courses and online events that we
                organise.
              </p>

              <div className={styles.aboutButtons}>
                <Link onClick={handleLinkClick} to="/events">
                  <Button outline>Explore events</Button>
                </Link>
                <Link onClick={handleLinkClick} to="/courses?type=All">
                  <Button>Explore courses</Button>
                </Link>
              </div>
            </RowItem>

            <RowItem className={styles.aboutRight} contentPosition="center">
              <img src={about} alt="" />
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.video}>
        <div className="container">
          <Row settings={{ gap: "135px" }}>
            <RowItem className={styles.videoLeft} width="65%">
              {/* Here must be video */}
              <img src={video} alt="" />
            </RowItem>

            <RowItem className={styles.videoRight} width="35%">
              <div className={styles.videoStats}>
                <h3>1200</h3>
                <span>students graduated</span>
              </div>

              <div className={styles.videoStats}>
                <h3>84</h3>
                <span>completed courses</span>
              </div>

              <div className={styles.videoStats}>
                <h3>16</h3>
                <span>quilified tutors</span>
              </div>

              <div className={styles.videoStats}>
                <h3>5</h3>
                <span>years of experience</span>
              </div>
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <Title className={styles.valuesTitle} align="center">
            <h2>we always stand for</h2>
            <h3>Our core values</h3>
          </Title>

          <Row className={styles.valuesRow} settings={{ justify: "center", gap: "45px" }}>
            <Value
              img={strucure}
              title="Structured Approach"
              par={
                <>
                  Aenean urna dictum adipiscing <br /> nec, cras quisque. Nunc in mauris.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={chat}
              title="Professional Feedbacks"
              par={
                <>
                  Culpa nostrud commodo ea <br /> consequat reprehenderit aliquip.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={target}
              title="Efficiency"
              par={
                <>
                  Viverra scelerisque consequat net. <br /> Adipisicing esse consequat.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={calendar}
              title="Flexible Schedule"
              par={
                <>
                  Aute eiusmod dolore dolore <br /> deserunt veniam ad deserunt.
                </>
              }
            />
          </Row>
        </div>
      </section>

      <section className={styles.directions}>
        <div className="container">
          <Title align="center" style={{ color: "#1e212c", marginBottom: "60px" }}>
            <h2>Our main directions</h2>
            <h3>What do we teach</h3>
          </Title>

          <div className={styles.directionsRow}>
            <Direction
              directionData={{
                imgUrlWithExtension: "directions/image-4.svg",
                type: CourseTypeEnum.Marketing,
                button: (
                  <Link onClick={handleLinkClick} to="/courses?type=Marketing">
                    Check courses
                  </Link>
                ),
                paragraph:
                  "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
              }}
            />

            <Direction
              directionData={{
                imgUrlWithExtension: "directions/image-3.svg",
                type: CourseTypeEnum.Management,
                button: (
                  <Link onClick={handleLinkClick} to="/courses?type=Management">
                    Check courses
                  </Link>
                ),
                paragraph:
                  "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
              }}
            />

            <Direction
              directionData={{
                imgUrlWithExtension: "directions/image-2.svg",
                type: CourseTypeEnum.Recruting,
                button: (
                  <Link onClick={handleLinkClick} to="/courses?type=Recruting">
                    Check courses
                  </Link>
                ),
                paragraph:
                  "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
              }}
            />

            <Direction
              directionData={{
                imgUrlWithExtension: "directions/image-1.svg",
                type: CourseTypeEnum.Design,
                button: (
                  <Link onClick={handleLinkClick} to="/courses?type=Design">
                    Check courses
                  </Link>
                ),
                paragraph:
                  "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
              }}
            />

            <Direction
              directionData={{
                imgUrlWithExtension: "directions/image.svg",
                type: CourseTypeEnum.Development,
                button: (
                  <Link onClick={handleLinkClick} to="/courses?type=Development">
                    Check courses
                  </Link>
                ),
                paragraph:
                  "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
              }}
            />

            <Direction isEmpty />
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <Title style={{ color: "#1e212c" }}>
            <h2>Studying process</h2>
            <h3>That`s how we do it</h3>
          </Title>

          <Row settings={{ gap: "210px" }}>
            <RowItem>
              <Steps
                data={[
                  {
                    head: "Watching online video lectures",
                    p: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
                  },
                  {
                    head: "Passing test",
                    p: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. ",
                  },
                  {
                    head: "Curator's feedback",
                    p: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. ",
                  },
                  {
                    head: "Corrections if needed",
                    p: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.",
                  },
                ]}
              />
            </RowItem>

            <RowItem contentPosition="end">
              <img src={process} alt="" />
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <Title align="center" style={{ color: "#1e212c", marginBottom: "60px" }}>
            <h2>Best tutors are all here</h2>
            <h3>Meet our team</h3>
          </Title>

          <ItemsList limit={8} type="team" />
        </div>
      </section>

      <Testimonials />

      <section className={styles.companies}>
        <div className="container">
          <Title align="center" style={{ color: "#1e212c", marginBottom: "60px" }}>
            <h2>Best jobs for you</h2>
            <h3>Our students work here</h3>
          </Title>

          <Row className={styles.companiesRow}>
            {[job1, job2, job4, job5, job6].map((job) => (
              <img key={job} src={job} alt="" />
            ))}
          </Row>
          <Row className={styles.companiesRow}>
            {[job7, job8, job10, job11, job12].map((job) => (
              <img key={job} src={job} alt="" />
            ))}
          </Row>
        </div>
      </section>

      <LatestPosts />

      <Subscribe />
    </section>
  );
};

export default AboutPage;
