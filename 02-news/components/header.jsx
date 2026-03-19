import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <nav id="main-header">
      <div id='logo'>
        <Link href='/'>NextNews</Link>
      </div>
      <ul>
        <li key='home'>
          <Link href='/'>Home</Link>
        </li>
        <li key='news'>
          <NavLink href={'/news'}>News</NavLink>
        </li>
        <li key='archive'>
          <NavLink href={'/archive'}>Archive</NavLink>
        </li>
      </ul>
    </nav>
  )
}