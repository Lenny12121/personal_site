import React from "react";
import { Link } from "gatsby";
import ProfilPic from "../components/ProfilePic";
import Container from "../components/Container";
import SEO from "../components/seo"

const IndexPage = () => (
  <Container>
    <ProfilPic />
    <Link to="/about">About</Link>
  </Container>
)

export default IndexPage
