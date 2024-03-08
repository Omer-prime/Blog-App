import React from 'react'
import styles from "./about.module.css"
const About = () => {
  return (
    <div className={styles.container}>

      <title>About - Your Blog</title>
      <meta name="description" content="Learn more about our blog and team." />


      <main className={styles.main}>
        <h1 className={styles.head}>About Us</h1>
        <p>Welcome to our blog! We're passionate about sharing knowledge and ideas.
          Explore a world of diverse topics on our blog, where we dive into everything
          from technology trends and lifestyle tips to travel adventures and thought-provoking insights.
          Our blog is a melting pot of ideas, where you'll find something for everyone. From the latest
          news in health and wellness to fascinating tidbits on history and culture, we've got your curiosity covered.
          "Embark on a discovery of the extraordinary. Our blog spans the spectrum, sharing insights on technology, culture,
          and everything in between. There's always something new to learn and explore!"
        </p>

        <section className={styles.team}>
          <h2>Our Team</h2>

          <div className={styles.member}>
            <img src="/team.jpg" alt="Profile Picture" className={styles.profilePic} />
            <div className={styles.memberInfo}>

            </div>
          </div>

          {/* Add more team members if needed */}
        </section>

        <section className={styles.story}>
          <h2 className={styles.h4}>Our Story</h2>
          <p>"Our journey began with a passion for sharing diverse stories and insights.
            We aim to create a digital space that fosters curiosity, sparks inspiration,
            and connects people through the exploration of an array of compelling topics."
            "Founded on the belief that knowledge knows no boundaries, our story is a testament
            to the power of diverse narratives. Our aim is to curate content that
            informs, inspires, and fosters a sense of community, inviting readers to embark
            on a continuous journey of discovery with us."

            .</p>
        </section>
      </main>
    </div>
  );
}









export default About;