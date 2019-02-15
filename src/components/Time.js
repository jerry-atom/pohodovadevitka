import React from "react";

const monthNames = [
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec",
]

function formatDate(string) {
    const date = new Date(string)
    const month = date.getMonth()
    const monthName = monthNames[month] || (month + 1)
    return date.getDate() + ". " + monthName + " " + date.getFullYear()
}

const Time = ({ date }) => <time dateTime={date}>{formatDate(date)}</time>

export default Time
