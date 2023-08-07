import React, { useEffect, useState } from 'react';
import account from '../Photos/account.jpg'
import account2 from '../Photos/account2.jpg'
import Roles_fighter_C from '../Photos/Roles_fighter_C.png'


const FlippingImage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFlipped(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="  ">
      <div
        className="transition-transform duration-500 ease-in-out transform hover:rotate-y-180"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
        onClick={handleClick}
      >
        <div className="bg-white rounded-full " style={{
          boxShadow: '0px 5px 15px 0px rgba(139, 21, 57, 0.50)',
        }}>

          <div className="overflow-hidden">

            <img
              className=" w-12  md:w-16  rounded-full"
              src={isFlipped ? Roles_fighter_C : account}
              alt="none"
            />

          </div>

        </div>
      </div>
    </div>
  );
};


export default FlippingImage;
