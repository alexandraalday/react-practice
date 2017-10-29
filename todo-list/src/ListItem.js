import React, { Component } from 'react';
import './App.css';

// class component
// class ListItem extends Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.doThis}</li>
//       </div>
      
//     );
//   }
// }

// functional component
const ListItem = (props) => (
	<div>
		<li>{props.doThis}</li>
	</div>
)

export default ListItem;