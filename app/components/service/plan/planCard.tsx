import React from 'react'

type Prop = {
    title: string;
    description: string;
    price: number;
    color: string;
}

const planCard = (props:Prop) => {
  const mainColor = props.color
  return (
    <div style={{ borderColor: mainColor }} className={`border aspect rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-full h-fit`}>
        <h3 style={{ backgroundColor: mainColor }} className={`uppercase  font-bold text-white text-xl shadow-xl w-full text-center rounded-md py-2`}>{props.title}</h3>
        <p style={{ color: mainColor }} className={`text-center`}>{props.description}</p>
        <div style={{ color: mainColor }} className={`flex flex-col items-center justify-center`}>
            <span className='font-bold capitalize text-xl'>inicial</span>
            <div className='flex font-black items-center'>
                <span className='text-3xl'>S/</span>
                <span className='text-7xl'>{props.price}</span>
                <span className='text-3xl'>.00</span>
            </div>
        </div>
    </div>
  )
}

export default planCard
