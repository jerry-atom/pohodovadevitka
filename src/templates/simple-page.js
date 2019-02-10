import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const SimplePage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <h1 className="py-3">{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  );
};

SimplePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SimplePage;

export const SimplePageQuery = graphql`
  query SimplePage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "simple-page" } }
    ) {
      frontmatter {
        templateKey
        title
      }
      html
    }
  }
`;
