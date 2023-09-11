import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen 
    h-72 bg-gradient-to-l from-blue-600/[0.5] to-white-600
      flex-col items-center
     p-24">
      <h1 className="text-3xl">Home page</h1>
      <Link className="text-lg hover:text-white "  href="/products" >All Products</Link>

    </main>
  );
}
