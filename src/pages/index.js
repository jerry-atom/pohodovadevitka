import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import HomeCarousel from '../components/HomeCarousel';
import { Card, CardBody, CardFooter, Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Post = (post) => (
  <Card>
    <CardBody>
      <p class="card-title">{ post.frontmatter.title }</p>
    </CardBody>
    <CardFooter>
      <Link className="card-link" to={post.fields.slug}>
        Více &raquo;
      </Link>
      <small class="text-muted float-right">
        <i class="fas fa-calendar"></i> {post.frontmatter.date}
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
        <Container className="py-3">
          <h1 class="py-3">PoHodová devítka <small class="text-muted">běžecký závod Velké Bíteše</small></h1>
          <p class="lead">
            Běžecký závod ve Velké Bíteši, který se pořádá v září, vždy po zdejších hodech. Hlavní trasa měří 9km, děti mohou běžet kratší trasy.
          </p>

          <HomeCarousel items={items}/>

          <div className="row">
            {posts.map(({ node: post }) => <div className="col-12 col-lg-4 pb-3" key={post.id}>{Post(post)}</div>)}
          </div>
        </Container>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;