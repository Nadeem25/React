import React, { useEffect } from 'react'
import axios from 'axios'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

function UserContainer({ userData, fetchUsers }) {
    console.log(`User Container Component Render`);
    useEffect(() => {
        console.log(`Inside useEffect()`);
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading Data....</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User Data</h2>
            <div>
                {userData && userData.users && userData.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(`Inside mapStateToProps()`);
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(`Inside mapDispatchToProps()`);
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
