import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <nav id="main-header">
      <div id='logo'>
        <Link href='/'>NextNews</Link>
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <NavLink href={'/news'}>News</NavLink>
        </li>
        <li>
          <NavLink href={'/archive'}>Archive</NavLink>
        </li>
      </ul>
    </nav>
  )
}