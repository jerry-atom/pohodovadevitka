import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <h1 class="py-3">
      Chyba 404 <small className="text-muted">Stránka nenalezena :(</small>
    </h1>
    <p>Požadovaná stránka nebyla nalezena.</p>
  </Layout>
);

export default NotFoundPage;
