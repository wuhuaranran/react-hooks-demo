import React, { useState, useEffect } from "react";

// hooks组件
function Basic() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// class组件
// class Basic extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }

export default Basic;