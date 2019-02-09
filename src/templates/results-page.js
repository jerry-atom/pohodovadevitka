import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ResultTable from '../components/ResultTable';

const Race = ({ name, results }) => (
  <section>
    <h2 className="py-3">{name}</h2>
    <ResultTable results={results} />
  </section>
);

const ResultsPage = ({ data }) => {
  // const categories = data.markdownRemark.frontmatter.categories;
  const races = data.markdownRemark.frontmatter.races;

  return (
    <Layout>
      <h1 className="py-3">{data.markdownRemark.frontmatter.title}</h1>
      {races.map(race => <Race {...race} key={race.name} />)}
    </Layout>
  );
};

ResultsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultsPage;

export const resultsPageQuery = graphql`
  query ResultsPage($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: "results-page"}}) {
      frontmatter {
        title
        races {
          name
          categories {
            abbr
            gender
            name
            yearFrom
            yearTo
          }
          results {
            category
            club
            name
            number
            time
            year
          }
        }
      }
    }
  }  
`;
