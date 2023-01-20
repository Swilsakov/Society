import React from 'react'
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'

class UsersC extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        // console.log(res.data);
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
      .catch(error => console.log(error));
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        console.log(res.data);
        this.props.setUsers(res.data.items)
      })
      .catch(error => console.log(error));
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    };

    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
      <div>
        <div>
          {slicedPages.map(p => {
            return <span className={this.props.currentPage === p && styles.selectedPage}
              onClick={(e) => { this.onPageChanged(p) }}>{p} </span>
          })}
        </div>
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