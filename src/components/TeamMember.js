import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Card, CardBody } from "reactstrap";

const TeamMember = ({ name, image, description, sports, favorits }) => (
  <Card className="my-3">
    <CardBody>
      <div className="row">
        <div className="col-12 col-md-4">
          <a href={"/img/" + image.relativePath} title={name}>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={name}
              className="rounded"
            />
          </a>
        </div>
        <div className="col-12 col-md-8">
          <h2 className="my-3">{name}</h2>
          <p
            className="text-jsutify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <b>Další sporty:</b>
          <ul>
            {sports.map(sport => (
              <li key={sport}>{sport}</li>
            ))}
          </ul>
          <b>Oblíbení sportovci:</b>
          <ul>
            {favorits.map(item => (
              <li key={item.name}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  sports: PropTypes.arrayOf(PropTypes.string),
  favorits: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default TeamMember;
