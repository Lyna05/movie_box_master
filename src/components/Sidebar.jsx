import { Link } from 'react-router-dom';

// import Loader from './Loaders';
import Logo from '../assets/logo2.svg';
import logout from '../assets/Logout.svg';
import play from '../assets/youtube.svg';
import home from '../assets/Home.svg';
import movies from '../assets/Movie Projector.svg';
import tv from '../assets/TV Show.svg';
import calender from '../assets/Calendar.svg';

const Sidebar = () => {
  return (
    <section className="flex flex-col justify-center w-[18%] md:w-[15%] h-screen border-r-[0.5px] border-gray-400 rounded-tr-3xl rounded-br-3xl py-4 md:py-6">
      <div className="flex flex-col items-center">
        <Link>
          <img src={play} alt="logo" className="md:hidden h-8 w-fit mb-24" />
        </Link>
        <Link to={'/'}>
          <img
            src={Logo}
            alt="logo"
            className="hidden md:block md:h-10 w-fit mb-12"
          />
        </Link>
        <Link
          className="flex items-center justify-center md:gap-2 mb-8 md:mb-6 py-2 bg-red-300 w-full border-r-4 border-red-800"
          to={'/'}
        >
          <img src={home} alt="home" className="h-8 w-fit" />
          <p className="hidden md:block text-[0.75rem] font-bold text-red-600 align-middle">
            Home
          </p>
        </Link>
        <Link className="flex items-center justify-center gap-3 mb-8 md:mb-6 hover:bg-red-300 py-2 w-full">
          <img src={movies} alt="movies" className="h-8 w-fit md:pl-2" />
          <p className="hidden md:block text-[0.75rem] font-bold">Movies</p>
        </Link>
        <Link className="flex items-center justify-center gap-2 mb-8 md:mb-6 py-2 w-full hover:bg-red-300">
          <img src={tv} alt="tv" className="h-8 w-fit md:pl-3" />
          <p className="hidden md:block text-[0.75rem] font-bold">TV Series</p>
        </Link>
        <Link className="flex items-center justify-center gap-2 w-full mb-24 py-2 md:mb-6 hover:bg-red-300">
          <img src={calender} alt="upcoming" className="h-8 w-fit md:pl-4" />
          <p className="hidden md:block text-[0.75rem] font-bold">Upcoming</p>
        </Link>

        <div className="hidden md:flex flex-col justify-center px-3 w-[80%] text-[0.72rem] pt-3 pb-2 border border-red-600 rounded-lg bg-red-200 mb-6">
          <h4 className="font-bold text-black mb-2">
            Play movie quizes and earn free tickets
          </h4>
          <p className=" text-gray-600 text-[0.65rem] mb-1">
            50K people are playing right now
          </p>
          <Link className="text-[0.65rem] font-bold text-red-600 bg-red-300 py-1 text-center flex justify-center items-center rounded-xl">
            start playing
          </Link>
        </div>

        <Link className="flex items-center justify-center gap-2 mb-8">
          <img src={logout} alt="logout" className="h-8 md:h-12 w-fit" />
          <p className="hidden md:block text-[0.75rem] font-bold">Logout</p>
        </Link>
      </div>

      {/* <Loader /> */}
    </section>
  );
};

export default Sidebar;
