import logo from "../assets/logo.svg"
import Button from "../../src/reuseable/Button"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-24 ">
      <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between bg-white">
        <section className=" flex">
          <Link to="/">
            <main>
              <img src={logo} alt="" />
            </main>
          </Link>
          <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            <nav className=" flex items-center gap-0.5">
            </nav>
            <Link to="/save">
              <nav>Save</nav>
              </Link>

            <Link to="/invest">
              <nav>Invest</nav>
            </Link>
            <Link to="/stories">
              <nav>Stories</nav>
            </Link>
            <Link to="/faqs">
            <nav>FAQs</nav>
            </Link>
            <Link to="/resources">
            <nav>Resources</nav>
            </Link>

            
            <nav className=" flex items-center gap-0.5">
              {" "}
              
              <span>
                {" "}
            
              </span>
            </nav>
          </main>
        </section>
        <section className=" flex gap-2 max-tablet:hidden">
          <Button title="Sign In" borderColor="#122231" />
          <Button
            title="Create free Account"
            bgColor="#122231"
            textColor="#fff"
          />
        </section>
        <section className=" hidden max-tablet:block">
    
        </section>
      </div>
    </header>
  );
};

export default Header;
