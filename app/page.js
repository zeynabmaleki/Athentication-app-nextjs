import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center px-6 py-2 lg:px-8 bg-zinc-800">

      <h1 className="mb-15 text-center text-3xl font-bold  text-white">Main page</h1>

      <div className='mx-25 text-gray-200 text-center'>
        <h2 className="text-lg pb-10">
          This is the page you see when you have entered this website or logged in.
          <br />
          To see the post page, you must
          <Link href='/auth/register'
            className="text-indigo-400 hover:text-indigo-300"> register</Link> ,
          or if you have an account, you need to
          <Link href='/auth/login'
            className="text-indigo-400 hover:text-indigo-300"> log in </Link>.
        </h2>

        <Link href="/posts" className="px-3 py-2 rounded-4xl bg-indigo-500 text-white hover:bg-indigo-400 transition-colors text-sm sm:px-4 sm:py-2 sm:text-base">
          See what people have shared!
        </Link>
      </div>

    </div >
  );
}
