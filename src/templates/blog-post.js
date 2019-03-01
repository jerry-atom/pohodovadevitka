import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Time from "../components/Time";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  title,
  helmet,
  next,
  prev
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <PostContent content={content} />
            <p className="text-right text-muted"><Time date={date} /></p>
            <div className="text-center">
              {next &&
                <Button outline color="secondary" tag={Link} to={next.fields.slug} className="mr-3">&laquo; Novější</Button>
              }      
              {prev && 
                <Button outline color="secondary" tag={Link} to={prev.fields.slug}>Starší  &raquo;</Button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  next: PropTypes.object,
  prev: PropTypes.object
};

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        prev={prev}
        next={next}
        helmet={
          <Helmet titleTemplate="%s | Novinka">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        description
      }
    }
  }
`;
