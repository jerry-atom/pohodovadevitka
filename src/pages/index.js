import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import HomeCarousel from '../components/HomeCarousel';
import Time from '../components/Time';
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";
import { FaCalendar } from "react-icons/fa";

const newPathRegExp = /^(\/novinky\/\d+)-(\d+)-(\d+)-(.*)/;
const toNewsPath = path => path.replace(newPathRegExp, "$1/$2/$3/$4");

const Post = (post) => (
  <Card>
    <CardBody>
      <CardTitle>{ post.frontmatter.title }</CardTitle>
    </CardBody>
    <CardFooter>
      <Link className="card-link" to={toNewsPath(post.fields.slug)}>
        Více &raquo;
      </Link>
      <small className="text-muted float-right">
        <FaCalendar /> <Time date={post.frontmatter.date} />
      </small>
    </CardFooter>
  </Card>
);

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: items } = data.allFile;

    return (
      <Layout>
        <h1 className="py-3"><span className="phd-text-green">Po</span><span className="phd-text-red">Hodová</span> <span className="phd-text-blue">devítka</span> <small className="text-muted">běžecký závod Velké Bíteše</small></h1>
        <p className="lead">
          Běžecký závod ve Velké Bíteši, který se pořádá v září, vždy po zdejších hodech. Hlavní trasa měří 9km, děti mohou běžet kratší trasy.
        </p>

        <div className="row">
          <div className="col-12 pb-3">
            <HomeCarousel items={items}/>
          </div>
          {posts.map(({ node: post }) => <div className="col-12 col-lg-4 pb-3" key={post.id}>{Post(post)}</div>)}
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allFiles: PropTypes.shape({
      edges: PropTypes.array
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allFile(filter: {sourceInstanceName: {eq: "uploads"}, name:{regex: "/carousel-[0-9]+/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;