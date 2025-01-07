import { useEffect, useState } from "react"

const About = () => {
    const [Count, SetCount] = useState(0)
    
    const [Title, SetTItle] = useState("Hello World")

    useEffect(() => {
        SetCount(Count + 1)
    },[])
    return (
        <div>
            About us Page
            <h1>Count : {Count}</h1>
            <button onClick={ () => { SetCount(Count + 1) } }>Increase + 1</button> <br />

            <button onClick={ () => { SetCount(Count - 1) } }> Decrease - 1</button> <br />

            <input type="text" value={Title} placeholder="Enter Title" onChange={(e)=>{SetTItle(e.target.value)}} />

            <h2>Title : {Title}</h2>
            </div>
    )
}

export default About