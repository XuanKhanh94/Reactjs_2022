import Child1Component from "./Child1Component";
import React from 'react'

// 4.Components and Props
//      1. Function And Class Components
//         b. Class component: class Parents1Component extends React.Component {
class Parents1Component extends React.Component {
    // 5. State and Lifecycle
    //      2. Add Local State to a Class:   constructor(props) {
    //                                        super(props)
    //                                         }
    constructor(props) {
        super(props);

        this.state = {
            gioHang: 'hoa'
        }
    }

    render() {
        console.log('day la parent 1', this)
        return (
            <div>
                Đây là component Cha 1
                {/* 4.Components and Props */}
                {/*     2. Rendering a Component: user-definded Components=>   <Child1Component />*/}
                <Child1Component />
            </div>
        )
    }

}




export default Parents1Component;