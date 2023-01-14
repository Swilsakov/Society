import React from 'react'
import styles from './users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(
      [
        { id: 1, followed: false, fullName: 'Vladimir', photoUrl: 'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg', status: 'I`m a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: true, fullName: 'Alex', photoUrl: 'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg', status: 'I`m a software engineer', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, followed: true, fullName: 'Bob', photoUrl: 'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg', status: 'I`m a cook', location: { city: 'New-York', country: 'USA' } },
        { id: 4, followed: false, fullName: 'Sultan', photoUrl: 'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg', status: 'I`m a entrepreneur', location: { city: 'Almaty', country: 'Kazakhstan' } },
      ]
    )
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;