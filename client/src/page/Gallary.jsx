import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";


const Gallary = () => {

    const data = ['https://res.cloudinary.com/coderanil/image/upload/a_-90//v1707036080/474_1000_nvfqxf.webp',
                'https://res.cloudinary.com/coderanil/image/upload/a_-90//v1707036059/475_1000_d36udd.webp',
                'https://res.cloudinary.com/coderanil/image/upload/v1707037142/422870947_1077826899935768_7967851658093377718_n.jpg_zcpfkj.jpg',
                'https://res.cloudinary.com/coderanil/image/upload/v1707036209/467_1000_ndx9ht.webp',
                'https://res.cloudinary.com/coderanil/image/upload/v1707036193/471_1000_wkeq5g.webp',
                'https://res.cloudinary.com/coderanil/image/upload/v1707036135/464_1000_nmviso.webp',
                'https://res.cloudinary.com/coderanil/image/upload/v1707036233/465_1000_zfhibb.webp',
                'https://res.cloudinary.com/coderanil/image/upload/v1707036218/466_1000_riqgdh.webp',
                'https://res.cloudinary.com/coderanil/image/upload/a_90//v1707036326/515_1000_ulpyqv.webp',
                'https://res.cloudinary.com/coderanil/image/upload/a_90//v1707036338/514_1000_jntkbj.webp',
            ]

    const [imageOpen, setImageOpen] = useState(false);
    const [imageModel, setImageModel] = useState('');

  return (
    <>
    <div className='gallary'>
        <div className='homepage-heading'>My <span>Photoes</span></div>
        <div className='gallary-container'>
            {data.map((e, index)=>(
                <img key={index} className='gallary-images' onClick={()=> {setImageModel(e), setImageOpen(true)} } src={e} alt="" />
            ))}
        </div>
      </div>

      {imageOpen && <div className="image-model-full">
      <div onClick={()=> setImageOpen(false)} className='image-model-close'><IoClose/></div>
      <img src={imageModel} alt="" />
    </div>}
    </>
  )
}

export default Gallary
