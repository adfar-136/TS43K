"use client"
import React,{useState} from 'react'
import Inputform from './Inputform'
import Displaydata from './Displaydata'
import Repolist from './Repolist'
import Pagination from './Pagination'

export default function Github() {
    const [userData,setUserData] = useState(null)
    const [repoData,setRepoData]  = useState([])
    const [currentPage,setCurrentPage]=useState(1);
    const [perPage] = useState(5)
    const fetchData =async (username)=>{
        try{
           const responseData = await fetch(`https://api.github.com/users/${username}`)
           if(responseData.ok){
            const userData = await responseData.json()
            setUserData(userData)
            const reposResponse = await fetch(userData.repos_url);
            if(reposResponse.ok){
                const repoData = await reposResponse.json()
                setRepoData(repoData)
            }
           }
        } catch(err){
          throw new Error("app nhi chal rahi hain")
        }
    }
    const lastIndex = currentPage* perPage;
    const startIndex = lastIndex -perPage;
    const currentRepo = repoData.slice(startIndex,lastIndex)
    const paginate =(pageNumber) =>{
      setCurrentPage(pageNumber)
    }
  return (
    <div>
        <Inputform fetchData={fetchData}/>
       {userData && <Displaydata user={userData}/>}
       {repoData.length > 0 && <Repolist repos={currentRepo} />}
       <Pagination length={repoData.length} paginate={paginate} perPage={perPage}/>
    </div>
  )
}
