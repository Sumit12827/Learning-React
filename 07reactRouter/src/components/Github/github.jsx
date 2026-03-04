import React from "react";
//import { userLodaderData } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = userLodaderData();
    // const  [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Sumit12827")
    //     .then (response => response.json())
    //     .then (data => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // } , [])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers} 
        <img src={data.avatar_url} alt="Git picture" width = {300} /></div>
    )
}
export default Github;

export const GithubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Sumit12827");
    return response.json()
}