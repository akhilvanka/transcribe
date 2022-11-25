import "tailwindcss/tailwind.css";
import "../styles/main.css";

import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";

import { AnimatePresence, motion } from "framer-motion";

// px-4 md:px-16 space-y-24 py-24
export default function App({ Component, pageProps: {session, ...pageProps}, router }: AppProps) {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-max max-h-max overflow-hidden">
            <Head>
              <title>Transcribe</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
