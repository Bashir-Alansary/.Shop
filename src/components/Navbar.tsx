"use client"
import { navLinks } from '@/constants'
import { RootState } from '@/lib/store';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import Subcart from './Subcart';
import { setShowSubcart, toggleSubcart } from '@/lib/slices/globalSlice';
import { totalCartItemSelector } from '@/lib/slices/cartSlice';

const Navbar = () => {

  const [activeNav, setActiveNav] = useState<boolean>(false);
  const total = useSelector(totalCartItemSelector);
  const dispatch = useDispatch();

  window.addEventListener('scroll', ()=> {
    if (window.scrollY > 100) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  })

  return (
    <header className={`${activeNav? "top-0 bg-softGrayBg shadow-md" : "top-6 bg-transparent"} fixed left-0 w-full z-50 transition-all duration-500`}>
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className={`${activeNav? "bg-softGrayBg" : "bg-white rounded-md"} flex h-16 items-center justify-between px-10`}>
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link href="/">
          <img src='/images/logo.png' className='w-24' />
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-base">
            {
              navLinks.map(item => {
                const {id, name, link} = item;
                return (
                  <li key={id}>
                    <Link 
                    className="text-primary font-bold transition hover:text-secondary"
                    href={link}
                    >
                    {name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        {/* <div className="hidden md:relative md:block">
          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >
            <span className="sr-only">Toggle dashboard menu</span>

            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-10 object-cover"
            />
          </button>

          <div
            className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                My profile
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Billing summary
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Team settings
              </a>
            </div>

            <div className="p-2">
              <form method="POST" action="#">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>

                  Logout
                </button>
              </form>
            </div>
          </div>
        </div> */}
        <div className='flex items-center'>
          <div>
            <button
            className='relative block -mb-1 text-[28px] text-primary bg-none p-0 border-none'
            onClick={() => dispatch(toggleSubcart())}
            >
              <MdOutlineShoppingCart/>
              <span 
              className="absolute top-[-13px] left-0 text-secondary font-bold min-w-full min-h-5 flex items-center justify-center text-[15px]"
              >
              {total}
              </span>
            </button>
            <Subcart />
          </div>
          <div className="block md:hidden ml-7">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar