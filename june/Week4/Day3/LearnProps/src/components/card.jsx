import React from 'react'

function card() {
  return (
    <div className='w-[100px] border-2 border-solid border-blue-500 p-2'>
        <div>
            <img src="https://tse3.mm.bing.net/th?id=OIP.XGvRwx1I7qo-wuVZUfCOWAHaEo&pid=Api&P=0&h=180" alt="" className='rounded-[50%]' />
        </div>
        <div className='p-4'>
            <strong className='p-2 text center font-bold-text-2xl'>Cute Puppy</strong>
            <p className='text-gray-600 text-center'>Golden Retriver Puppy</p>
        </div>
      This is my card
    </div>
  )
}

export default card
