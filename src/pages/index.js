import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="sosc-logo"
              alt="Blackbox logo"
            />
            <p className="sosc-header">
                Blackbox
              <br />
              Testing Community
            </p>
            <p>
              A community driven by software testing enthusiasts, industry experts and contributors, to help young students to be part of the software testing
              ecosystem by providing training and skill development.
            </p>
            <a
              href="https://goo.gl/forms/XH41TwlMxOeRwmdQ2"
              className="btn-hero-green"
            >
              Become a member
            </a>
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="hero-section2 ">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
          <div className="hero-texts">
            <p className="hero-header">Explore clubs and Activities</p>
            <div className="dash" />
            <p>
              Blackbox testing community is a conglomeration of groups and individuals who contribute
              to the community by helping us create events and activities, creating contents and oppurtunities for other testers and share knowledge, 
              experience and best practices that help shape the community
              to be pro-active.
            </p>
             <a
              href="https://goo.gl/forms/XH41TwlMxOeRwmdQ2"
              className="btn-hero-green"
            >
              Join Slack Community
            </a>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Get Trained by Experts</p>
            <div className="dash" />
            <p>
              Blackbox testing community is about training developers, tech enthusiasts and students to venture into a new field we
              by conducting workshops and trainings led by technical trainers from and software testers, and student experts. Keeping up to date
              with latest technologies and ensuring ISTQB certification and with leadership and employment skills at the end of each training session.
            </p>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Get Connected !</p>
            <div className="dash" />
            <p>
              Meet people, students and test experts with similar interest to work together on projects, tools  and
              host events to build a better collaborative environment. We are more than 50 members with lots of testing experience and get connected. Meet our
              members to know more about us and build something cool!
            </p>
            <Link to="/team" className="btn-hero-green">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_connect_.jpg" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
