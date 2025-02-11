import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-4xl font-bold tracking-light">Software Developer and <span className="block text-purple-600">Designer</span></h1>
         <p>Lorem ipsom gibom</p>
         <div>
             <button>About Me</button>
             <button>Contact Me</button>
         </div>
      </div>
    </div>
  );
}
