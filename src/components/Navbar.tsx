import  { useState } from "react";
import Logo from "../assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const links = [
    { to: "/", label: "SEARCH" },
    { to: "https://girmantech.com", label: "WEBSITE" },
    { to: "https://www.linkedin.com/company/girmantech", label: "LINKEDIN" },
    { to: "mailto:contact@girmantech.com?subject=Hire Me&body=I wanted to reach out about..", label: "CONTACT" },
  ];
  return (
    <nav className="flex  flex-col sticky top-0 w-full h-[60px]  z-30">
      <div
        className={`bg-white  drop-shadow ${flexBetween} transition-all duration-200 w-full h-full`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div className="flex gap-2">
            <img className="max-w-[60px] h-[40px]" src={Logo} alt="logo" />
            <div className="flex flex-col justify-start relative">
              <h2 className="text-[25px] font-bold mt-[-10px]">Girman</h2>
              
              <span className="text-[10px] absolute uppercase font-bold leading-6 -bottom-1">Tenchnologies</span>

            </div>
            </div>
          

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm `}>
                  {links.map((e) => (
                    <a
                      className={`transition duration-500 hover:text-primary-300`}
                      key={e.to}
                      target="_blank"
                      href={e.to}
                    >
                      {e.label}
                    </a>
                  ))}
                </div>
               
              </div>
            ) : (
              <button
                className="rounded-full  p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-8 w-8 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        //exact me brackets lagao samjh me ayya kya
        <div className="sticky right-0 z-40 h-full w-full bg-white px-4 py-4 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>
          <div
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="flex overflow-auto flex-col gap-8 text-2xl"
          >
            {links.map((e) => (
              <a
                className={`transition duration-500 hover:text-primary-300`}
                key={e.to}
                target="_blank"
                href={e.to}
              >
                {e.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
