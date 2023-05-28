import React from "react"
import PropTypes from "prop-types"

function ListItem({ name, id }) {
  // ============================================
  // return <li>
  //   {name} - user {id}
  // </li>
  // ============================================
  return React.createElement(
    "li",
    {},
    `${name} - user ${id}`
  )
  // ============================================
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default ListItem