import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-semibold">ALX Next.js Project</h1>
       <Link href="/">Home</Link>
      <Link href="/home">Go to Home Page</Link>
      <Link href="/about">About</Link>
         <Link href="/posts">Posts</Link>
    </header>
    )
}

export default Header;