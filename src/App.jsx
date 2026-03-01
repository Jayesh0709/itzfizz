import { useRef } from 'react'
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  const circle = useRef();
  const back = useRef();
  useGSAP(() => {
    gsap.to(circle.current, {
      x: 1200,
      scrollTrigger: {
        trigger: back.current,
        pin: true,
        scrub: 1.4,
        start: "0%",
        end: "100%"
      }
    })
    gsap.from('.card', {
      y: 20,
      opacity: 0,
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
        trigger: back.current,
        start: "-.1%",
        scrub: 1.4,
        end: "100%",
      }
    })
  })
  return (
    <>
      <div ref={back} className='h-[calc(100vh)] w-100vw bg-gray-500 overflow-hidden relative py-10 '>
        <div className='flex gap-26 w-auto justify-center'>
          <div className='card bg-white h-50 w-50 rounded flex flex-col justify-center p-5 gap-3 cursor-pointer '>
            <h1 className='font-bold text-5xl'>58%</h1>
            <p className='font-semibold text-xl'>Increase in pick up point use</p>
          </div>
          <div className=' card bg-white h-50 w-50 rounded flex flex-col justify-center p-5 gap-5 '>
            <h1 className='font-bold text-5xl'>27%</h1>
            <p className='font-semibold text-xl'>Increase in pick up point use</p>
          </div>
        </div>
        <div className='sticky flex top:20 items-center bg-white px-10 translate-y-15'>

          <div className='h-40 w-[90%] mt-20 bg-[#45DB7D] rounded-full absolute text-center text-9xl font-stretch-50% font-bold items-center justify-center flex'><h1>WEL COME ITZFIZZ</h1></div>
          <div ref={circle} className='h-40 w-[90%] mt-20 bg-blue-300 rounded-full absolute'>
            <img src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png" alt="" className='h-40' />
          </div>
        </div>
        <div className='flex gap-26 w-auto justify-center translate-y-50 translate-x-30'>
          <div className='card bg-white h-50 w-50 rounded flex flex-col justify-center p-5 gap-3'>
            <h1 className='font-bold text-5xl'>23%</h1>
            <p className='font-semibold text-xl'>Decreased in customer phone calls</p>
          </div>
          <div className='card bg-white h-50 w-50 rounded flex flex-col justify-center p-5 gap-3'>
            <h1 className='font-bold text-5xl'>40%</h1>
            <p className='font-semibold text-xl'>Decreased in customer phone calls</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
