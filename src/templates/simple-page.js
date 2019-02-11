import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";

const SimplePage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <Toolbar {...page.frontmatter} />
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
        title
        print
        download {
          relativePath
          id
        }
      }
      html
    }
  }
`;
