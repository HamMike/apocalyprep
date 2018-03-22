// import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import axios from 'axios';
// import { Collapsible, CollapsibleItem, Input } from 'react-materialize'
// import { connect } from 'react-redux';
//
// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     googleUser: state.googleUser
//   }
// }
//
// class ConnectedUserList extends Component  {
//
//   constructor() {
//     super();
//     this.state = {
//       allSupply: [],
//       medicalArray: [],
//       foodwaterArray: [],
//       toolArray: [],
//       techArray: [],
//       docArray: [],
//     }
//
//     this.filterSupply = this.filterSupply.bind(this)
//   }
//
//
//
//   filterSupply = () => {
//
//     // filter all supplies into categories & new arrays using swich case
//     this.state.allSupply.forEach((item) => {
//       switch(true) {
//         case item.category === "Medical":
//           this.setState({
//             medicalArray: [...this.state.medicalArray, item]
//           })
//           break;
//         case item.category === "Food and Water":
//           this.setState({
//             foodwaterArray: [...this.state.foodwaterArray, item]
//           })
//           break;
//         case item.category === "Tools and Supplies":
//           this.setState({
//             toolArray: [...this.state.toolArray, item]
//           })
//           break;
//         case item.category === "Tech":
//           this.setState({
//             techArray: [...this.state.techArray, item]
//           })
//           break;
//         case item.category === "Documents":
//           this.setState({
//             docArray: [...this.state.docArray, item]
//           })
//           break;
//         default:
//           return 'foo';
//       }
//     })
//   }
//
// this.props.checkIfLoggedInAndSetUserToState
// this.props.user
//
//
//   //
//   // getUserSupplyData = () => {
//   //   console.log(this.props.user);
//   //   if (this.props.user) {
//   //     console.log("Entering componentDidMount")
//   //     //call database using Axios. this route is set up in server.js
//   //     //put all things in 1 big array -- allSupply[].
//   //     //this call runs only once.
//   //     if (this.props.user) {
//   //       console.log('user', this.props.user)
//   //     } else {
//   //       console.log('nouser', this.props.user)
//   //     }
//   //     axios.get('/api/userlist?id=' + this.props.user.id).then(result => {
//   //       console.log("Just got the supplyList")
//   //       console.log(result)
//   //       this.setState({
//   //         //we're getting the data sent from server.js
//   //         allSupply: result.data
//   //       })
//   //     }).then(() => {
//   //       console.log('hihi');
//   //       this.filterSupply()
//   //       console.log(this.state)
//   //
//   //     })
//   //   }
//   // }
//
//   componentDidMount() {
//     this.getUserData()
//   }
//
//   componentWillUpdate(nextProps, nextState) {
//     console.log('hi');
//     this.getUserData()
//   }
//
//   render() {
//      // map through the 5 arrays i've built to create li elements
//      console.log(this.props.user);
//      var medicalList = this.state.medicalArray.map((item,index) =>
//      <li key={index}>
//      <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
//      {item.name}</li>)
//
//      var foodwaterList = this.state.foodwaterArray.map((item,index) =>
//      <li key={index}>
//      <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
//      {item.name}</li>)
//
//      var toolList = this.state.toolArray.map((item,index) =>
//      <li key={index}>
//      <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
//      {item.name}</li>)
//
//      var techList = this.state.techArray.map((item,index) =>
//      <li key={index}>
//      <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
//      {item.name}</li>)
//
//      var docList = this.state.docArray.map((item,index) =>
//      <li key={index}>
//      <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange}  />
//      {item.name}</li>)
//
//
//       return (
//         <div>
//
//           <Collapsible accordion className="collapsible-accordion">
//             <CollapsibleItem header='Medical' icon='arrow_drop_down_circle'>
//               <ul>{medicalList}</ul>
//             </CollapsibleItem>
//
//             <CollapsibleItem header='Food & Water' icon='arrow_drop_down_circle'>
//               <ul>{foodwaterList}</ul>
//             </CollapsibleItem>
//
//             <CollapsibleItem header='Tools & Supplies' icon='arrow_drop_down_circle'>
//               <ul>{toolList}</ul>
//             </CollapsibleItem>
//
//             <CollapsibleItem header='Tech' icon='arrow_drop_down_circle'>
//               <ul>{techList}</ul>
//             </CollapsibleItem>
//
//             <CollapsibleItem header='Documents' icon='arrow_drop_down_circle'>
//               <ul>{docList}</ul>
//             </CollapsibleItem>
//
//           </Collapsible>
//
//         </div>
//       )
//
//   }
// }
//
// const UserList = connect(mapStateToProps, null)(ConnectedUserList);
//
// export default UserList;
