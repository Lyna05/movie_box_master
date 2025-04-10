import Search from './Search';
import Logo from '../assets/Logo.svg';
import SignIn from '../assets/Menu.svg';

const Navbar = ({ handleSearch, handleSearchChange }) => {
  return (
    <div className="flex items-center justify-around">
      <div>
        <img
          alt="logo"
          src={Logo}
          className="h-6 w-fit md:h-10 cursor-pointer hover:opacity-90"
        />
      </div>
      <Search
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
      />
      <div className="flex items-center justify-center gap-2">
        <p className="text-white text-xs md:text-sm cursor-pointer hover:opacity-90">
          Sign in
        </p>
        <img
          alt="signin"
          src={SignIn}
          className="h-5 w-fit md:h-10 cursor-pointer hover:opacity-95"
        />
      </div>
    </div>
  );
};

export default Navbar;
