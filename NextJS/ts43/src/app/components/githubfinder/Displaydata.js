import React from 'react'

export default function Displaydata({user}) {
  return (
    <div>
        <h1>{user.name}</h1>
        <img src={user.avatar_url} alt="profile pic" /> <br />
        <strong>Followers: {user.followers}</strong> <br />
        <strong>Following: {user.following}</strong> <br />
        <p>Description: {user.bio}</p>
        <h2>Public Repositories: {user.public_repos}</h2>
    </div>
  )
}
