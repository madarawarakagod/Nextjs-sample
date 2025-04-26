import React from 'react'
import Link from 'next/link'

fucntion page()
{
    const vegis=[
        {id:1,
         veginame:"Brocoli"
        },
        {
            id:2,
            veginame:"Spinach"
        },
        {
            id:3,
            veginame:"Bean"
        },
    ]
return (
<>
<div>vegis page</div>
<ul>
    {vegis.map((vegi)=>
    {
        return(
            <li><Link href={`/product/vegis/${vegi.veginame}`}>{vegi.veginame}</Link></li>
        )
    }
    )}
</ul>
</>
)



export default page
