import React from "react";
import "./styles/AnimatedButton.css";
import { PopupWidget } from "react-calendly";
import "./styles/AnimatedButton.css";

const App = (props) => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/nesredin/welcome-to-jifar-agency-booking"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text={props.namee}
        style={{
          className: "glow-on-hover "
          
        }}
      />
    </div>
  );
};

export default App;
// import React from 'react'
// import Form from "./Form"

// const AnimatedButton = (props) => {

//   return (
//     <button className="glow-on-hover text-md text-red-700" style={{width : `${props.myWidth}`}}><Form /></button>
//   );
// }

// export default AnimatedButton