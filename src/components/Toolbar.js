import React from "react";
import { ButtonToolbar } from "reactstrap";
import PropTypes from "prop-types";
import PrintButton from "./PrintButton";
import DownloadButton from "./DownloadButton";

const Toolbar = ({ print, download }) =>
  (print || Boolean(download) && Boolean(download.relativePath)) && (
    <header>
      <ButtonToolbar className="justify-content-end d-print-none">
        {print && <PrintButton />}
        {download && <DownloadButton {...download} />}
      </ButtonToolbar>
      <hr />
    </header>
  );

Toolbar.propTypes = {
  print: PropTypes.number,
  download: PropTypes.shape({
    relativePath: PropTypes.string
  })
};

export default Toolbar;
