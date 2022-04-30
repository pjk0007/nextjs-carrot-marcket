import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-20 px-10 grid gap-10'>
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$170</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$800</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed border-gray-300'>
          <span>Total</span>
          <span className='font-semibold'>$970</span>
        </div>
        <div className='mt-5 bg-blue-400 text-white p-3 text-center rounded-xl w-1/2 mx-auto'>Checkout</div>
      </div>

      <div className='bg-white overflow-hidden rounded-3xl shadow-xl'>
        <div className='bg-blue-400 p-6 pb-14'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 relative -top-5 bg-white'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span>Orders</span>
              <span>340</span>
            </div>
            <div className='h-24 w-24 bg-red-400 rounded-full'/>
            <div className='flex flex-col items-center'>
              <span>Spent</span>
              <span>$2,310</span>
            </div>
          </div>
          <div>
            <span>Tony Molloy</span>
            <span>New York, USA</span>
          </div>
        </div>
      </div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
    </div>
  );
}

export default Home
