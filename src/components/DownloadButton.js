import React from "react";
import { Button } from "reactstrap";
import { FaDownload } from "react-icons/fa";
import PropTypes from "prop-types";
import { withPrefix } from 'gatsby';

const DownloadButton = ({ relativePath }) => (
    <Button
        aria-label="Stáhnout jako PDF"
        className="text-white"
        color="secondary"
        download
        href={withPrefix(relativePath)}
        size="md"
        tag="a"
        title="Stáhnout jako PDF"
    >
        <FaDownload />
    </Button>
);

DownloadButton.propTypes = {
    relativePath: PropTypes.string.isRequired
};

export default DownloadButton;