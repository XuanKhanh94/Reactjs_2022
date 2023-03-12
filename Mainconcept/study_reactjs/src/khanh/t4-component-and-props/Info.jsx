// 4.Components and Props
//      1. Function And Class Components
//          a. Function component: function Info(props)

export default function Info(props) {
    // 4.Components and Props
    //      5. Props are readonly!:   const name = props.user.name;
    //                                const age = props.user.age;
    const name = props.user.name;
    const age = props.user.age;
    return (
        <div>
            {/* 2. Introducing JSX */}
            {/*     2. Embeding expressions in JSX: <h1>Name: {name}</h1> */}
            <h1>Name: {name}</h1>
            <h2>Age:{age}</h2>
        </div>
    )
}