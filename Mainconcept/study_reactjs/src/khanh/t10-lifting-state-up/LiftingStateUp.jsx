import React from 'react'

// 4.Components and Props
//      1. Function And Class Components
//         b. Class component: class LiftingStateUp extends React.Component {
class LiftingStateUp extends React.Component {
    // 5. State and Lifecycle
    //      2. Add Local State to a Class:   constructor(props) {
    //                                        super(props)
    //                                         }
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="style">
                <h1>Unit 10: Lifting State Up</h1>
                <div className="content">
                    <h3>Adding a Second Input</h3>
                </div><br />
                <div className="content">
                    <h3>Writing Conversion Functions</h3>
                </div><br />
                <div className="content">
                    <h3>Lifting State Up</h3>
                    <p>Để có thể chuyển trạng thái từ component con lên component cha thì component cha sẽ gửi quyền thay đổi trạng thái cho component con</p>
                </div>

            </div>
        )
    }
}
export default LiftingStateUp;