import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-20 px-10 grid gap-10'>
      <div className='bg-white p-10 rounded-2xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span text-grey-500>Grey Chair</span>
          <span>$19</span>
        </div>
        <div className='flex justify-between'>
          <span text-grey-500>Grey Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Total</span>
          <span>$10</span>
        </div>
        <div>Checkout</div>
      </div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
    </div>
  );
}

export default Home
