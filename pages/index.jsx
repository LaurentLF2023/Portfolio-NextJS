const uriCards = 'http://localhost:1337/api/posts?populate=*'

import Link from 'next/link';
import Image from 'next/image'
import Contact from '../components/contact';
import Biography from '../components/biography';
import Projects from '../components/projects';

function Index({data}) {

    return (
      <div className='w-full flex flex-wrap justify-center bg-emerald-200 roboto font-sans'>
        <div className=' w-full border-solid border-b-8 border-b-black mb-8'>
          <h2 className='mt-5 mb-8 ml-8 text-right font-bold'>Laurent Le Foulgoc</h2>
          <h1 className="mb-5 mx-3 text-7xl font-bold">.PORTFOLIO</h1>
        </div>
        <div className='w-5/6'>
        <div className='justify-center'>
          <div className ='bg-emerald-600'>
            <div>
              <img className='w-content' src="https://i.skyrock.net/1641/83461641/pics/3085736435_1_13_sJ5Bk2vo.jpg" alt="" />
            </div>
            <nav className='flex flex-col'>
              <Link href='/bio'>
                <a className='text-white text-4xl font-bold my-4 ml-6'>Bio</a>
              </Link>
              <Link href='/projects'>
                <a className='text-white text-4xl font-bold my-2 ml-6'>Projects</a>
              </Link>
              <Link href='/contact'>
                <a className='text-white text-4xl font-bold my-4 ml-6'>Contact</a>
              </Link>
            </nav>
          </div>
          <div className='flex flex-col md:flex-row my-4'>
            <p className='font-bold m-2'>Latest portofolio</p>
            <p className='font-bold m-2'>Studies and side-projects</p>
          </div>
        </div>
      </div>
        <div className="border-solid border-t-8 border-t-black mt-8 mb-8 w-full">
          <Biography></Biography>
        </div>
      <div className="border-solid border-t-8 border-t-black mt-8 mb-8 w-full">
        <Projects data = {data}></Projects>
        </div>
        <Contact></Contact>
      </div>
    )
  }
 
  export async function getServerSideProps(){
    const res = await fetch(uriCards)
    const data = await res.json()
    console.log({data})
    return { props: {data}}
  }
  export default Index