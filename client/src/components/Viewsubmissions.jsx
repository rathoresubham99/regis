import React, {useEffect, useState} from 'react'
import './views.css'
import ReactDOM , {NavLink} from 'react-router-dom'
function Viewsubmissions() {
    const[views, setView]=useState([{
        username: '',
        email: '',
        password:'',

    }])

    useEffect(()=>{
        fetch('http://localhost:3001/view').then(res=>{  // fetching the data from the API
            if(res.ok)
            {
                return res.json()
            }
        }).then(jsonRes=>setView(jsonRes))
    })
    return (
        <>
        <div className="container c1">
        <h1 style={{textAlign:"center"}}>View the Results</h1>
        <NavLink to="/"><button type="submit">Go back</button></NavLink>
        <table border="1">
        <thead>
            <tr>
                <th>Username</th>
                <th>E-mail</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {views.map((item,id)=>(
                <tr key={id}>
                    <td>
                     {item.username}
                    </td>
                    <td>
                       {item.email} 
                    </td>
                    <td>
                        {item.password}
                    </td>
                </tr> 
            ))}
                
            </tbody>
        
        </table>
        </div>
        </>

    )
}
export default Viewsubmissions