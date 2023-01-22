// import React from 'react'
// import styles from './users.module.css'
// import axios from 'axios'
// import userPhoto from '../../assets/images/user.png'

// const UsersOld = (props) => {

//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(res => {
//           console.log(res.data);
//           props.setUsers(res.data.items)
//         })
//         .catch(error => console.log(error));
//     }
//   }

//   return (
//     <div>
//       <button onClick={getUsers}>Get all Users</button>
//       {
//         props.users.map(u => <div key={u.id}>
//           <span>
//             <div>
//               <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto} />
//             </div>
//             <div>
//               {u.followed
//                 ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                 : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </span>
//             <span>
//               {/* <div>{u.location.country}</div>
//               <div>{u.location.city}</div> */}
//             </span>
//           </span>
//         </div>)
//       }
//     </div>
//   )
// }

// export default UsersOld;