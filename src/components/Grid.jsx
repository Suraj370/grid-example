import React from 'react'
import data from "../data"
import Card from './Card';
const Grid = () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto p-20 '>
        {data.map((data) => {
          return <div key = {data.id}>
            <Card title = {data.title} imgSrc={data.imgSrc} category={data.category} timeToRead={data.timeToRead}/>
          </div>
        })}
    </div>
  )
}

export default Grid