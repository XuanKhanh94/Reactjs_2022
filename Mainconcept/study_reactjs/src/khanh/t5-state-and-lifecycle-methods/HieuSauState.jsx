import Parents1Component from "./Parents1Component";
import Parents2Component from "./Parents2Component";
import React from "react";

// 4.Components and Props
//      1. Function And Class Components
//         b. Class component: class HieuSauState extends React.Component {
class HieuSauState extends React.Component {
  // 5. State and Lifecycle
  //      2. Add Local State to a Class:   constructor(props) {
  //                                        super(props)
  //                                         }
  constructor(props) {
    super(props);
  }
  render() {
    console.log("day la hieu sau", this);
    return (
      <div>
        <h4>Đây là trang hiểu sâu hơn về State</h4>
        <p>--------------------------------</p>
        {/* 4.Components and Props */}
        {/*     2. Rendering a Component: user-definded Components=>  <Parents1Component />
                                                                      <Parents2Component /> */}
        <Parents1Component />
        <hr />
        <Parents2Component />
      </div>
    );
  }
}
export default HieuSauState;
