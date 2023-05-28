import React from "react"
import ListItem from "./ListItem"
import PropTypes from "prop-types"

function List({ people = [] }) {
  // ============================================
  // return <ul>
  //   {
  //     people.map(({ name, id }) => (
  //       <ListItem name={name} id={id} key={id} />
  //     ))
  //   }
  // </ul>
  // ============================================
  return React.createElement(
    "ul",
    {},
    people.map(({ name, id }) => React.createElement(
      ListItem,
      {
        key: id,
        name: name,
        id: id
      }
    ))
  )
  // ============================================
}

List.propTypes = {
  people: PropTypes.array.isRequired
}

export default List