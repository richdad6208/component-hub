import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-3">
      <h1>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/login">login</Link>
          </li>
          <li>
            <Link href="/signup">signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
