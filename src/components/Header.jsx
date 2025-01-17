import cartImage from "../assets/cart.png";

const Header = () => {
  return (
    <header className="fixed bg-black inset-x-0 top-0 h-[69px]">
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[30px] cursor-pointer">
        <img className="w-5 h-6 bg-cover" src={cartImage} />
      </div>
    </header>
  );
};

export default Header;
