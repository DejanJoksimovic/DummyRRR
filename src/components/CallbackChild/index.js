import React, { Component } from "react"

export default class CallbackChild extends Component {
    componentDidUpdate(prevProps) {
        console.log('someCallback', this.props.someCallback === prevProps.someCallback);
        console.log('anotherCallback', this.props.anotherCallback === prevProps.anotherCallback);
    }
    render() {
        return (<div>
            <div onClick={this.props.someCallback}>
                TEST
            </div>
            <div onClick={this.props.anotherCallback}>
                ANOTHER_TEST
            </div>
        </div>
        )}
}

// export default ({ someCallback, anotherCallback }) => {
//     return (
//         <div>
//             <div onClick={someCallback}>
//                 TEST
//             </div>
//             <div onClick={anotherCallback}>
//                 ANOTHER_TEST
//             </div>
//         </div>
//     )
//   }
