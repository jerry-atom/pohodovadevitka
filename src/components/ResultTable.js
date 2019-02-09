import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

function calculatePositions(xs) {
  const categories = xs
    .map(x => x.category)
    .filter((x, i, a) => a.indexOf(x) === i)
    .reduce((a, x) => ({ ...a, [x]: 0 }), {});

  return xs
    .sort((a, b) => (b.time < a.time ? 1 : b.time > a.time ? -1 : 0))
    .map((x, i) => ({
      ...x,
      position: {
        absolute: i + 1,
        category: ++categories[x.category]
      }
    }));
}

const formatTime = time => time.replace(/.\d{3}$/, "").replace(/^[0:]+/, "");
const formatDuration = time =>
  time.replace(/^(\d+):(\d+):(\d+.\d{3})$/, "PT$1H$2M$3S");

const Row = ({ position, category, number, name, year, club, time }) => (
  <tr>
    <th scope="row">{time === "DNF" ? "" : position.absolute}</th>
    <td>{category}</td>
    <td>{time === "DNF" ? "" : position.category}</td>
    <td>{number}</td>
    <td className="name">
      <b>{name}</b> ({year}) {club}
    </td>
    <td className="number">
      {time === "DNF" ? (
        <abbr title="nedokončil(a) závod">DNF</abbr>
      ) : (
        <time dateTime={formatDuration(time)}>{formatTime(time)}</time>
      )}
    </td>
  </tr>
);

const ResultTable = ({ results }) => (
  <Table size="sm" responsive hover className="results">
    <thead>
      <tr>
        <th scope="col">
          <abbr title="absolutní pořadí">poř.</abbr>
        </th>
        <th scope="col">
          <abbr title="kategorie">kat.</abbr>
        </th>
        <th scope="col">
          <abbr title="pořadí v kategorii">poř.&nbsp;k.</abbr>
        </th>
        <th scope="col">
          <abbr title="startovní číslo">s.&nbsp;č.</abbr>
        </th>
        <th scope="col" className="name">
          jméno
        </th>
        <th scope="col" className="number">
          čas
        </th>
      </tr>
    </thead>
    <tbody>
      {calculatePositions(results).map(result => (
        <Row {...result} key={result.number} />
      ))}
    </tbody>
  </Table>
);

ResultTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.string,
      year: PropTypes.string,
      club: PropTypes.string,
      time: PropTypes.string
    })
  )
};

export default ResultTable;
