import react from "react";

export default fuction Navbar ({ onBrandClick}) {
    return (
        <header className="bg-orange-500 text-white">
          <div className="max-w-6xl mx-auto flex items-centre justify-between p-4">
            <div clssName="flex items-center space-x-4 cursor-pointer" on click={onBrandClick}>
               <span className="text-2xl font-bold"> Recipe Finder</span>
            </div>
            
            <nav className="hidden md:fex items-center gap-6">
              <a className="hover:underline" href="#features">Features</a>
              <a className="hover:underline" href="#about">About</a>
              <a clssName="hover:underline" href="#contact">Contact</a>
              <a className="hover:underline" href="#signin">Sign In</a>
              <button className="bg-white text-orange-500 px-4 py-1 rounded-full font-semivold">Get Started</button>
            </nav>
            
            <div className="md:hidden">
              <button className="px-3 py-2">☰</button>
            </div>
          </div>
        </header>
    );
};
