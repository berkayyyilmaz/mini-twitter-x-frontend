import React, { useContext } from 'react';
import { TwitterLogo } from '../components/Icon';
import { Menu } from '../components/Menu';
import avatar from '../assets/usersprofilepictures/profilepic.png'
import threeDots from '../assets/icons/threedots.png'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
const Sidebar = () => {
  const {setToken, userData, setUserData} = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    setToken(null);
    setUserData(null);
    navigate("/login")
  }
  return (
    <div className="md:w-[270px] sticky top-0 flex  flex-col h-screen p-4 flex-1 justify-between border-r ">
      <div>
        <div className='mb-12'><TwitterLogo/></div>
        <Menu/>
        <button className="sm:w-11/12 py-3 rounded-full bg-twitter-light-blue text-white text-lg cursor-pointer mb-4 mt-4 hover:bg-twitter-blue">
          Tweet
        </button>
        </div>
        <button onClick={handleLogOut} className='flex p-2 items-center gap-2 justify-between hover:bg-tw-hover rounded-full'>
          <div className='flex items-center gap-2'>
          <img src={avatar} alt="" className='w-12 h-12 rounded-full'/>
          <div className='text-sm hidden xl:inline-block max-w-28 flex-shrink-0'>@{userData}</div>
          </div>
          <img className='hidden mr-2 md:inline-block' src={threeDots} alt="" />
        </button>
    </div>
  );
};

export default Sidebar;
