import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };
  let curP = props.currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div>
        {slicedPages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage} key={p.id}
            onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  usersAPI.unfollowAPI(u.id)
                    .then(res => {
                      if (res.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    });
                }}>Unfollow</button>
                : <button onClick={() => {
                  usersAPI.followAPI(u.id)
                    .then(res => {
                      if (res.data.resultCode === 0) {
                        props.follow(u.id)
                      }
                    });

                }}>Follow</button>}
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

export default Users