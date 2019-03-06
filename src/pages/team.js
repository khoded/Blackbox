import React from 'react'
import { graphql } from 'gatsby'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet';
import Layout from '../components/indexLayout'
import MemberCard from '../components/member_card'
import Img from 'gatsby-image'

function getMembers(data) {
  let members = []

  let memberList = data.allMarkdownRemark.edges

  memberList.map(element => {
    return members.push(
      <MemberCard
        username={element.node.frontmatter.username}
        full_name={element.node.frontmatter.name}
        designation={element.node.frontmatter.designation}
        skills={element.node.frontmatter.skills}
        email={element.node.frontmatter.email}
        pic={element.node.frontmatter.pic}
      />
    )
  })

  return members
}

const TeamsPage = ({ data }) => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata.team} />
    <div className="page">
      <div className="container">
        <h2>Co-ordinators</h2>
        <div className="team-section">
          {/* Card for coordinators */}
          <div className="member-card white-bg elevate">

            <Img
              fluid={data.imageCoord1.childImageSharp.fluid}
              className="profile-pic"
            />

            <div className="member-details">
              <h3 className="name">Odunlade Akinola</h3>
              <p className="designation">Community Coordinator</p>
            </div>
          </div>

          <MemberCard
            username =""
            full_name="Elutade Ayobami"
            designation="Community Coordinator"
          />
        </div>
        <h2>Core Members</h2>

        <div className="team-section">{getMembers(data)}</div>
      </div>
    </div>
  </Layout>
)

export default TeamsPage



export const teamQuery = graphql`
  query membersQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___designation], order: ASC }
      filter: { fileAbsolutePath: { regex: "/members/.*md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            username
            name
            designation
            skills
            email
          }
        }
      }
    }
    imageCoord1: file(relativePath: { eq: "images/akin.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

`


