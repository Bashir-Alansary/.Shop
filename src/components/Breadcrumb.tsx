"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb = ({title}: {title: string}) => {
    const pathName = usePathname();
    const links = pathName.split('/').slice(1);
    
    
  return (
    <div className="h-[331px] bg-[url(/images/breadcrumb-bg.jpg)] bg-cover flex justify-center items-center">
        <div>
            <h1 className="text-white text-center text-3xl font-bold">{title}</h1>
            <ul className="flex justify-center mt-2">
                <li className="text-white"><Link href="/">Home</Link></li>
                {
                    links.map((link, index) =>
                    <li key={index} className="flex justify-center">
                    <span className="mx-2 text-white">/</span>
                    <div className="">
                    {index !== links.length - 1 ?
                    <Link className="text-white" href={"/"+link}>{title}</Link>
                    : <span className="text-secondary">{title}</span>
                    }
                    </div>
                    </li>
                    )
                }
            </ul>
        </div>
    </div>
  );
};

export default Breadcrumb;
