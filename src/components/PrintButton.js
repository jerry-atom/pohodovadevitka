import React from "react";
import { Button } from "reactstrap";
import { FaPrint } from "react-icons/fa";

const PrintButton = () => (
    <Button
        aria-label="Vytisknout"
        className="mr-2"
        color="success"
        onClick={() => window.print()}
        size="md"
        title="Vytisknout"
    >
        <FaPrint />
    </Button>
);

export default PrintButton;
