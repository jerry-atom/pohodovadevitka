import React from "react";
import Helmet from "react-helmet";
import { Container } from "reactstrap";
import { StaticQuery, graphql } from "gatsby";

import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";

import "bootstrap/scss/bootstrap.scss";
import "./all.scss";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="cs" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/uploads/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/uploads/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/uploads/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/uploads/safari-pinned-tab.svg"
            color="#ffffff"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/uploads/og-image.png" />
        </Helmet>

        <TopMenu />

        <main>
          <Container className="py-3">{children}</Container>
        </main>

        <Footer />
      </>
    )}
  />
);

export default TemplateWrapper;
