import React from "react"

const Hello = function(props) {
  return (
    <div id="app" onClick={() => console.log("clicked !")}>
      hello ssr {props.name}
    </div>
  )
}

export default Hello
