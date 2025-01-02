
import React from 'react'
import Container from './Container'
import Link from 'next/link'

const NavBar = async() => {
  
 const navBarList = [

    {
        title:"Home",
        link:"/",
    },
    {
        title:"Shop",
        link:"/shop",
    },
    {
        title:"Contact",
        link:"/contact",
    },
    {
        title:"About",
        link:"/about",
    },
]

  

  return (
    <div >
        <Container className='h-10 '>
            
            <div className='h-full gap-3 md:gap-7 flex items-center justify-end'>
              
                {navBarList?.map((item)=>(
                    <Link key={item.title} href={item.link} className='navBarItem'>
                        {item.title}</Link>
                ))}
                
                
                           <Link href={"/dashboard"} className="navBarItem"  >
                            Dashboard </Link>
                          
                           <Link href={"/signin"} className="navBarItem" >
                            Sign in </Link>
                
                
                            <Link href={"/studio"} className="navBarItem" >
                            Studio </Link> 
                
                            <Link href={"/orders"} className="navBarItem" >
                            Orders </Link> 
            </div>
        </Container>

    </div>
  )
}

export default NavBar