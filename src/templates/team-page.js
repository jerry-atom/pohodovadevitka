import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TeamMember from "../components/TeamMember";

const TeamPage = ({ data }) => {
  const { markdownRemark: team } = data;

  return (
    <Layout>
      {team.frontmatter.members.map(member => (
        <TeamMember key={member.name} {...member} />
      ))}
    </Layout>
  );
};

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
