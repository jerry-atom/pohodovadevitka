import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ResultTable from "../components/ResultTable";
import Toolbar from "../components/Toolbar";

const Race = ({ name, results }) => (
  <section>
    <h2 className="py-3">{name}</h2>
    <ResultTable results={results} />
  </section>
);

const ResultsPage = ({ data }) => {
  const { title, proposition, races } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Toolbar download={({relativePath: proposition.relativePath})} print={1} />
      <h1 className="py-3">{title}</h1>
      {races.map(race => (
        <Race {...race} key={race.name} />
      ))}
    </Layout>
  );
};

ResultsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultsPage;

export const resultsPageQuery = graphql`
  query ResultsPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "results-page" } }
    ) {
      frontmatter {
        title
        proposition {
          relativePath
        }
        startDate
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
