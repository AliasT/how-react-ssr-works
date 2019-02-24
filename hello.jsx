import React from "react"

class Hello extends React.Component {
  componentDidMount() {
    console.log("mounted !")
  }

  render() {
    return (
      <div onClick={() => console.log("clicked !")}>
        hello {this.props.name}
      </div>
    )
  }
}

export default Hello
