import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-[100dvh] pt-10 bg-gradient-to-br from-slate-500 to-slate-900 justify-center">
      <h2 className="text-5xl text-center text-slate-200 drop-shadow-2xl shadow-white">Welcome to the dashboard created utilising nextjs, mongodb and React</h2>
<Link href={`/dashboard`} className="text-3xl my-20 rounded-md bg-slate-300 p-10 border-4 border-gray-900 mx-auto hover:scale-105 transition-all duration-500 ease-in-out">DashBoard</Link>
    </main>
  );
}
