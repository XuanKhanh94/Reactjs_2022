import { render } from '@testing-library/react';
import React from 'react'
// 4.Components and Props
//      1. Function And Class Components
//         b. Class component: class Parent2Component extends React.Component {
class Parent2Component extends React.Component {
    // 5. State and Lifecycle
    //      2. Add Local State to a Class:   constructor(props) {
    //                                        super(props)
    //                                         }
    constructor(props) {
        super(props);
    }
    // var gioHang1 = undefined;
    // var gioHang2 = {};

    // // this["tui"] = "Qua Tao";
    // gioHang1["tui"] = "Qua cam";
    // // gioHang2["tui"] = "Qua cam";

    // console.log('day la parent 2-1', gioHang1);


    // // gioHang2['tui'] = 'Qua Nho';
    // // console.log('day la parent 2-2', gioHang2);
    render() {
        console.log('day la parent 2', this)
        return (
            <div>
                Đây là component Cha 2
            </div>
        )
    }
}
export default Parent2Component;