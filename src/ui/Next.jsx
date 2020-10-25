// import React, { useState } from 'react'

// const Next = ({ getOffset}) => {
//     const magicMax = 15
    
//     const next = (offset) => {
//         if (Number(offset) < magicMax )
//             getOffset(offset)
//     }

//     return (
//         <section>
//             <button className='myButton' onClick={ () => next(offset) }>
//                 Next 
//             </button>
//         </section>
//     )
// }

// export default Next
// import React,{Component} from "react"

// class Next extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//   }
//   next(offset, max) {
//     if (offset < max )
//        return offset + 10
//   }
//   render() {
//     return (
//         <section>
//             <button className='myButton' onClick={ () => this.next(this.props.offset, this.props.max) }>
//                 Next 
//             </button>
//         </section>
//     )
//   }
// }

// export default Next
