import React from 'react'
import image from '../assets/id-card (1).png'
import image1 from '../assets/businessman.png'
import image2 from '../assets/discussion.png'
import image3 from '../assets/balance.png'
import image4 from '../assets/hand.png'
import image5 from '../assets/magistrate.png'
import image6 from '../assets/monitor.png'
import image7 from '../assets/worker.png' 


const Occupation = ({Name, Positions, img1, img2, img3, img4, img5, img6, img7, img8}) => {
  return (
    <div className='w-[200px] h-[200px] shadow-sm flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg hover:transition-all ease-in-out cursor-pointer'>
        <div className='w-[50px] h-[50px]'>
            { img1 && <img src={image} />}
            { img2 && <img src={image1} />}
            { img3 && <img src={image2} />}
            { img4 && <img src={image3} />}
            { img5 && <img src={image4} />}
            { img6 && <img src={image5} />}
            { img7 && <img src={image6} />}
            { img8 && <img src={image7} />}
        </div>
        <b className='text-[18px] font-medium mt-4'>{Name}</b>
        <p className='text-[#989DAA]'>{Positions}</p>
    </div>
  )
}

export default Occupation