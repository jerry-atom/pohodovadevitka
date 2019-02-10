import React from "react";
import { Button, ButtonToolbar } from "reactstrap";
import { FaDownload, FaPrint } from "react-icons/fa";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ResultTable from "../components/ResultTable";

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
      <ButtonToolbar className="justify-content-end d-print-none">
        <Button
          aria-label="Vytisknout"
          className="mr-2"
          color="success"
          onClick={() => window.print()}
          size="md"
          title="Vytisknout"
        >
          <FaPrint />
        </Button>
        <Button
          aria-label="Stáhnout propozice jako PDF"
          className="text-white"
          color="secondary"
          download
          href={proposition}
          size="md"
          tag="a"
          title="Stáhnout propozice jako PDF"
        >
          <FaDownload />
        </Button>
      </ButtonToolbar>
      <hr />
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
        proposition
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
