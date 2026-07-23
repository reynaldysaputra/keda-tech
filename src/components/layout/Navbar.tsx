import { Link } from "react-router-dom";
import Container from "./Container";
import { menus } from "../../constants/menu";
import Button from "../ui/Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
          >
            ERP<span className="text-blue-600">Pro</span>
          </Link>

          <nav className="hidden gap-8 md:flex">
            {menus.map((menu) => (
              <a
                key={menu.title}
                href={menu.href}
                onClick={() => setActive(menu.title.toLowerCase())}
                className={
                  active === menu.href
                    ? "text-blue-600 font-semibold"
                    : ""
                }
              >
                {menu.title}
              </a>
            ))}
          </nav>

          <div>
            <Link to="/login" className="mr-2">
              <Button>Login</Button>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {
                isOpen
                  ? <FaTimes size={22} />
                  : <FaBars size={22} />
              }
            </button>
          </div>
        </div>

        {
          isOpen && (

            <div className="absolute left-0 top-full w-full bg-white shadow-lg">

              {menus.map(menu => (
                <a
                  key={menu.title}
                  href={menu.href}
                  className="block border-b p-5"
                >
                  {menu.title}
                </a>
              ))}

            </div>

          )
        }
      </Container>
    </header>
  );
}