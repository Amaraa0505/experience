import Image from 'next/image';
import { Inter } from 'next/font/google';
import Base from "./components/Base";
import Header from "./components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    
   <div className='bg-slate-200 h-screen p-16 flex flex-col gap-6'>
    <Header/>
    <div className='flex flex-col gap-6 '>
  <div className='flex justify-between'>
  <div className='w-96 h-36 bg-blue-600 rounded-xl flex p-8 gap-2'>
    <img src="./Vector.svg" className='w-4 h-4'></img>
    <img src="./Geld.svg" className='w-8 h-4'></img>
  </div>
  <div className='w-96 h-36 bg-white rounded-xl'> 
      <div className='flex p-2 gap-2 items-center'>
      <img src="./Ellipse 124.svg" className='w-3 h-3'></img>
      <p className='font-bold'>Your Income</p>
      </div>
      <div className='bg-gray-400 h-[0.5px] w-full'></div>
      <div className='ml-6 mt-2'>
      <p className='font-bold text-2xl '>1,200,000</p>
      <p className='text-slate-400 '>Your income account</p>
      <div className='flex'>
      <img src="./Leading icon.svg" className=''></img>
      <p className=''>32% from last month</p>
      </div>
      </div>
  </div>
  <div className='w-96 h-36 bg-white rounded-xl'>
    <div className='flex p-2 gap-2 items-center'>
        <img src="./Ellipse 124-2.svg" className='w-3 h-3'></img>
        <p className='font-bold'>Total expense</p>
    </div>
    <div className='bg-gray-400 h-[0.5px] w-full'></div>
    <div className='ml-6 mt-2'>
      <p className='font-bold text-2xl '>1,200,000</p>
      <p className='text-slate-400 '>Your income account</p>
      <div className='flex'>
        <img src="./Leading icon-2.svg" className=''></img>
        <p className=''>32% from last month</p>
      </div>
    </div>
  </div>
  </div>
  <div className='flex justify-between'>
      <div className='bg-white w-[600px] h-48 rounded-xl'>
        <div className='flex p-2 gap-2 items-center'>
          <p className='font-bold'>Income-Expense</p>
        </div>
        <div className='bg-gray-400 h-[0.5px] w-full'></div>
      </div>
      <div className='bg-white h-48 w-[600px] rounded-xl '>
        <div className='flex p-2 gap-2 items-center'>
          <p className='font-bold'>Income-Expense</p>
        </div>
        <div className='bg-gray-400 h-[0.5px] w-full'></div>
      </div>
  </div>
  </div>
 
    <Base/>
  
   </div>
  
  )
}
