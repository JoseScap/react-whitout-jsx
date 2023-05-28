import React from "react"
import PropTypes from "prop-types"
import Input from "./Input"

function Form({ onSubmit, value, onChange }) {
  // ============================================
  // return <form onSubmit={(event) => {
  //   event.preventDefault()
  //   onSubmit()
  // }}>
  //   <Input value={value} onChange={onChange} />
  //   <button>Add</button>
  // </form>
  // ============================================
  return React.createElement(
    "form",
    {
      onSubmit: (event) => {
        event.preventDefault()
        onSubmit()
      }
    },
    [
      React.createElement(
        Input,
        {
          key: "input",
          value: value,
          onChange: onChange
        }
      ),
      React.createElement(
        "button",
        {
          key: "button"
        },
        "Add"
      )
    ]
  )
  // ============================================
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Form