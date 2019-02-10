import React from "react";
import PropTypes from "prop-types";
import { TeamPageTemplate } from "../../templates/team-page";

const TeamPagePreview = ({ entry, getAsset }) => {
  return (
    <TeamPageTemplate
      members={entry.getIn(["data", "members"])}
    />
  );
};

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default TeamPagePreview;
