import UserInfo from "./UserInfo"

// 4.Components and Props
//      1. Function And Class Components
//          a. Function component:  function ComponentAndProps

export default function ComponentAndProps(props) {
    const dataUser = {
        name: 'Phan Xuan Khanh',
        age: 29,
        avatar: 'https://picsum.photos/200/300'
    }
    return (
        <div>
            {/* 4. Components and Props */}
            {/*     2. Rendering a Component: user-definded Components => <UserInfo dataUser={dataUser} /> */}
            <UserInfo dataUser={dataUser} />
        </div>
    )
}