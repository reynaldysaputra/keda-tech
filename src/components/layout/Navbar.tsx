import { Link } from "react-router-dom";
import Container from "./Container";
import { menus } from "../../constants/menu";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ERP.
          </Link>

          <nav className="hidden gap-8 md:flex">
            {menus.map((menu) => (
              <a
                key={menu.title}
                href={menu.href}
                className="transition hover:text-blue-600"
              >
                {menu.title}
              </a>
            ))}
          </nav>

          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}