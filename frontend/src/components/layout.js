import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";
import getToken from "../helpers/getToken";

const Layout = ({ children, seo }) => {
  useEffect(() => {
    async function fetchData() {
      const token = await getToken();
      localStorage.setItem("token", token);
    }
    fetchData();
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            seo {
              metaTitle
              metaDescription
              shareImage {
                publicURL
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Seo seo={seo} />
          <Nav />
          <main>{children}</main>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
