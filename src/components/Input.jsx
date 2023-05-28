import React from "react"
import PropTypes from "prop-types"

function Input({ value, onChange }) {
  // ============================================
  // return <input
  //   value={value}
  //   onChange={(event) => {
  //     onChange(event.target.value)
  //   }}
  //   type="text"
  //   placeholder="Write a name"
  //   required
  // />
  // ============================================
  return React.createElement(
    "input",
    {
      value: value,
      onChange: (event) => {
        onChange(event.target.value)
      },
      type: "text",
      placeholder: "Write a name",
      required: true,
    }
  )
  // ============================================
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input