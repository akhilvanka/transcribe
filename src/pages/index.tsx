import { motion } from "framer-motion"
import {signIn} from 'next-auth/react'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="absolute m-2 p-2 right-0">
        <ul className="flex">
          <li className="mr-5">
			<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <button
              className="inline-block rounded py-3 px-6 bg-[#D1C9BC] text-neutral-700"
              onClick={() => signIn('discord', {callbackUrl: `${window.location.origin}/dash`})}
              // href="/dash"
            >
              Login In
            </button>
			</motion.div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-medium tracking-wide text-[#D1C9BC]">
            Transcribe
          </h1>
          <h2 className="text-xl tracking-tight text-neutral-700 font-dm">
            A simple web tool to help transcribe audio to text
          </h2>
        </div>
      </div>
    </main>
  );
}
