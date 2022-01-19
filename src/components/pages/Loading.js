import React from 'react'
import { Skeleton } from '@mui/material'

const Loading = () => {
    return (
        <>
            <div className='col-md-6'>
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6' style={{lineHeight: 2 }}>
            <Skeleton height={75} width={100}/>
            <Skeleton height={50}/>
            <Skeleton height={100} width={200}/>
            <Skeleton height={25} width={30}/>
            <Skeleton height={25} witdh={100}/>
            <Skeleton height={25} style={{marginLeft: 6 }}/>
            </div>
        </>
    )
}

export default Loading