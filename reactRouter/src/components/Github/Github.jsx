//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData();
    console.log('data', data);

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/pushprajchaudhary')
    //         .then(res => res.json())
    //         .then(response => {
    //             console.log(response)
    //             setData(response)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git_pic" className='w-80' />
        </div>
    )
}

export default Github;

export const dataFromRouterLoader = async () => {
    const data = await fetch('https://api.github.com/users/pushprajchaudhary')
    return data.json();
}

