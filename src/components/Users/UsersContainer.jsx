import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  actionCreateChangeFollow,
  actionCreateSetUsers,
} from "../../redux/users-reducer";

// const UsersContainer = () => {
//   return (
//     <Users
//       users={[
//         {
//           name: "Dmitry",
//           description: "Ya daun",
//           city: "SPB",
//           country: "Russia",
//           follow: true,
//         },
//         {
//           name: "Dmitry",
//           description: "Ya daun",
//           city: "SPB",
//           country: "Russia",
//           follow: false,
//         },
//       ]}
//     />
//   );
// };

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => ({
  changeFollow: (id, value) => dispatch(actionCreateChangeFollow(id, value)),
  setUsers: (users) => dispatch(actionCreateSetUsers(users)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
