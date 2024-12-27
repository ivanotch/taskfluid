'use client'

import ButtonGradient from '@/components/Buttons/Button-gradient/Button';
import Link from 'next/link';

export default function LoginPage() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <main className="flex items-center justify-center h-[100vh] px-[1rem] py-[1rem] overflow-hidden" style={{ margin: '-0.5rem -1rem' }}>
      <div className="flex flex-col justify-between rounded-[30px]  w-[50%] h-[100%] bg-cover bg-center" style={{ backgroundImage: "url('/laptop.jpg')" }}>
        <div className='flex mt-[1.5rem] justify-between items-center md:py-3'>
          <span className='text-white pl-[2rem] text-[1.6rem] tracking-[0.4rem] font-sub'>TASKFLUID</span>
          <a className='text-white mr-[2rem] bg-[#726161] px-[0.7rem] rounded-full' href='/'>back to website<img className='ml-[0.5rem] inline' src="arrow-right.svg" alt="icon" width="20" height="20" /></a>
        </div>
        <p className='text-white mx-[auto] text-center font-sub pb-[4rem] text-[2.5rem]'>Your productivity, reimagined with TaskFluid </p>
      </div>


      <div className="w-[50%] h-[100%] bg-white flex flex-col items-center justify-center">
        <div className='flex flex-col items-center mt-[1.5rem] mb-[4rem]'>
          <span className='text-[3.5rem] font-main leading-[3rem]'>Welcome Back!</span>
          <span className='text-[1.2rem] font-inter'>Don't have an account?  <a href="">Sign up</a></span>
        </div>
        <form className='w-[45%] text-center mb-[4rem]'>
          <div className="relative mb-[2rem] pt-4 mt-2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-600 text-black text-lg focus:outline-none focus:ring-0 focus:border-gradient-to-r focus:border-primary-to-secondary transition-all duration-200 placeholder-transparent"
            />
            <label
              htmlFor="name"
              className=" absolute left-0 top-0 text-gray-600 text-sm transition-all duration-200 ease-in-out transform peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:text-sm peer-focus:text-primary peer-focus:font-semibold peer-focus:top-0"
            >
              Name
            </label>
          </div>

          <div className="relative mb-[2rem] pt-4 mt-2">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-600 text-black text-lg focus:outline-none focus:ring-0 focus:border-gradient-to-r focus:border-primary-to-secondary transition-all duration-200 placeholder-transparent"
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-0 text-gray-600 text-sm transition-all duration-200 ease-in-out transform peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-focus:text-sm peer-focus:text-primary peer-focus:font-semibold peer-focus:top-0"
            >
              password
            </label>
          </div>
          <ButtonGradient input="Log In" />
        </form>
      </div>

    </main>
  );
}