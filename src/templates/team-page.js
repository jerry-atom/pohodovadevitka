import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";

export const TeamPageTemplate = ({ members }) => (
  <>
    {members.map(member => <TeamMember key={member.name} {...member} />)}
  </>
);

const TeamPage = ({ data }) => (
  <Layout>
    <h1 className="py-3">{data.markdownRemark.frontmatter.title}</h1>
    <TeamPageTemplate members={data.markdownRemark.frontmatter.members} />
  </Layout>
);

TeamPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TeamPage;

export const teamPageQuery = graphql`
  query TeamPage {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        templateKey
        title
        members {
          name
          image {
            relativePath
            childImageSharp {
              fluid(maxWidth: 466) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          favorits {
            name
            url
          }
          sports
        }
      }
    }
  }
`;
