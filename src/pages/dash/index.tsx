import dynamic from 'next/dynamic';

import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
// import Dashboard from "../../client/components/dashboard";

const Dashboard = dynamic(() => import("../../client/components/dashboard"));

const Home: NextPage = () => {
  const { data: session } = useSession();
  // const fetcher = (url) => axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(
  //   "http://localhost:8000/users/" + session.user.name,
  //   fetcher
  // );

  if (session) {
    const { user } = session;
    return (
      <>
        <div className="absolute m-2 p-2 right-0">
          <ul className="flex">
            <li className="mr-5">
                <a
                  className="inline-block rounded py-3 px-6 text-[#D1C9BC]"
                  href="/dash/new"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='bg-[#D1C9BC]' viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                  </a>
            </li>
            <li className="mr-5">
                <button
                  className="inline-block rounded py-3 px-6 bg-[#D1C9BC] text-neutral-700 hover:bg-neutral-600"
                  onClick={() =>
                    signOut({
                      callbackUrl: `${window.location.origin}/`,
                    })
                  }
                  // href="/dash"
                >
                  Sign Out
                </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-screen items-center">
          <div className="px-4 md:px-16 py-12 m-16">
            <h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
              Hi
            </h1>
            <h2 className="text-4xl tracking-tight text-[#D1C9BC] font-dm">{user.name}!</h2>
            <div className="mt-8 space-y-6">
              <p className="text-2xl tracking-tight text-neutral-700 font-dm">Completed Transcriptions</p>
              <div className="flex flex-col space-y-2">
                <Dashboard />
                {/* {(data.map((item) => {
                  return (
                    <div>
                      <a href={"/dash/" + item}> {item} </a>
                    </div>
                  );
                }))} */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // if (!session) {
  //   signIn('discord');
  // }
};

export default Home;
