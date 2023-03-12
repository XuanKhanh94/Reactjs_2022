// 4.Components and Props
//      1. Function And Class Components
//          a. Function component:  function Avatar(props)

export default function Avatar(props) {
    // 4.Components and Props
    //      Props: props =>const avatar = props.avatar
    const avatar = props.avatar
    return (
        <div>
            {/* 2. Introducing JSX */}
            {/*     4. Specifying attribute with JSX: src={avatar} */}
            <img src={avatar} />
        </div>
    )
}