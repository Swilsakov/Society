import React from 'react'
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'

class UsersC extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
          console.log(res.data);
          this.props.setUsers(res.data.items)
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get all Users</button>
        {
          this.props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto} />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
              </span>
            </span>
          </div>)
        }
      </div>
    )
  }
}

export default UsersC; 