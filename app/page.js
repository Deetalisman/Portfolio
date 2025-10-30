import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#151515] text-white h-[100vh] flex justify-between px-[5%] pt-20 pb-5">
      <main className="w-[45%]">
        <div>
          <h1 className="text-5xl font-bold">Ismail Ajiboye.</h1>
          <h1 className="mt-3 text-xl font-bold">
            Frontend And React Engineer.
          </h1>
          <p className="text-gray-400 mt-10">
            I create interactive{" "}
            <span className="text-white font-bold">Web Experiences</span> using
            frontend technologies that solve real world problems.
          </p>
          <p className="text-gray-400 mt-4">
            <span className="text-white font-bold">Collaboration</span> is a key
            part of my approach.Whether its developing or building robust web
            pages, tackling complex problems or optimizing existing systems.
          </p>
          <p className="text-gray-400 mt-4">
            <span className="text-white font-bold">Technologies:</span>{" "}
            HTML5,CSS,Javascript,Tailwind Css,Responsive Design,Styled
            Components
          </p>
          <p className="text-gray-400 mt-4">
            <span className="text-white font-bold">Frameworks/Libraries:</span>{" "}
            ReactJs,NextJs,Redux
          </p>
        </div>
        <nav className="mt-15 w-[12rem] text-[0.9rem]">
          <div className="flex cursor-pointer group">
            <p>00</p>
            <hr className="w-13 group-hover:w-17 mt-2 ml-3 mr-3"></hr>
            <p>PROJECTS</p>
          </div>
          <Link
            href="
            https://drive.google.com/file/d/1eSo0p1NP-g5-ZCwg7mkSTMGVIDTbgYaB/view?usp=drive_link
          
          "
            className="flex cursor-pointer group mt-6"
          >
            <p>01</p>
            <hr className="w-13 group-hover:w-17 mt-2 ml-3 mr-3"></hr>
            <p>RESUME</p>
          </Link>
          <Link
            href="https://github.com/Deetalisman"
            className="flex cursor-pointer group mt-6"
          >
            <p>02</p>
            <hr className="w-13 group-hover:w-17 mt-2 ml-3 mr-3"></hr>
            <p>GIT</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ismail-ajiboye-52207b27a/"
            className="flex cursor-pointer group mt-6"
          >
            <p>03</p>
            <hr className="w-13 group-hover:w-17 mt-2 ml-3 mr-3"></hr>
            <p>LINKED IN</p>
          </Link>
        </nav>
      </main>
      <aside className="w-[45%] overflow-auto  no-scrollbar">
        <p className="text-gray-500">Projects</p>
        <figure className="mt-5">
          <div className="bg-[#1c1c1f] p-8">
            <h1 className="text-lg">Quick Cart</h1>
            <p className="text-[0.8rem] mt-2 text-gray-400">
              NEXT JS + TAILWIND
            </p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              An E-commerce website for a gadget company with view of products.
            </p>
            <Link
              href="https://deequickcart.vercel.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
          <div className="bg-[#1c1c1f] p-8 mt-7">
            <h1 className="text-lg">Burgershop</h1>
            <p className="text-[0.8rem] mt-2 text-gray-400">
              NEXT JS + TAILWIND
            </p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              Landing page for a Burgershop where users can check for burgers.
            </p>
            <Link
              href="https://deeburgershop.vercel.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
          <div className="bg-[#1c1c1f] p-8 mt-7">
            <h1 className="text-lg">Invoice Creator</h1>
            <p className="text-[0.8rem] mt-2 text-gray-400">
              NEXT JS + TAILWIND
            </p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              An Invoice issuing website that can be used by buisness owners to
              track buisness transaction.
            </p>
            <Link
              href="https://deeinvoice-app.vercel.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
          <div className="bg-[#1c1c1f] p-8 mt-7">
            <h1 className="text-lg">Ip Address Tracker</h1>
            <p className="text-[0.8rem] mt-1 text-gray-400">REACT + TAILWIND</p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              A webpage that tracks and display Ip address,location and time of
              a user.
            </p>
            <Link
              href="https://deeiptracker.netlify.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
          <div className="bg-[#1c1c1f] p-8 mt-7">
            <h1 className="text-lg">Country Search</h1>
            <p className="text-[0.8rem] mt-1 text-gray-400">
              NEXT JS + TAILWIND
            </p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              A webpage where user can learn about all countries,
              Region,Population,Capital,Currency etc
            </p>
            <Link
              href="https://dee-country.vercel.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
          <div className="bg-[#1c1c1f] p-8 mt-7">
            <h1 className="text-lg">Packing List</h1>
            <p className="text-[0.8rem] mt-1 text-gray-400">
              NEXT JS + TAILWIND
            </p>
            <p className="mt-5 mb-7 text-gray-600 text-[0.78rem]">
              A webpage that a user can use to list important things to be
              done,more like a Todo
            </p>
            <Link
              href="https://dee-packinglist.vercel.app/"
              className=" text-gray-300 text-[0.9rem]"
            >
              Live site
            </Link>
          </div>
        </figure>
      </aside>
    </div>
  );
}
