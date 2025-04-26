import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <>
    <div>Catch All routes</div>
    <ul>
        {params.dpath.map((item)=>{
        return(
            <li>{item}</li>
  )
})
        }
    </ul>
    
    </>
  )
}

export default page