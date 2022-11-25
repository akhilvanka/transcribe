import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://transcribe.api.akhilv.me/uploads/" + slug,
    fetcher
  );

  if (error) return (
	<div className="px-4 md:px-16 space-y-24 py-24 max-w-4xl">
      <div className="space-y-4 max-w-4xl">
        <div>
          <Link href="/dash">
            <a className="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-neutral-600 font-dm">
              ../
            </a>
          </Link>
        </div>

        <main className="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert font-dm">
		<h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
                Sorry, that file doesn&apos;t exist!
        </h1>
        </main>
      </div>
    </div>
  ); 

  if (!data) return (
	<div className="px-4 md:px-16 space-y-24 py-24 max-w-4xl">
	<div className="space-y-4 max-w-4xl">
	  <div>
		<Link href="/dash">
		  <a className="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-neutral-600 font-dm">
			../
		  </a>
		</Link>
	  </div>

	  <main className="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert font-dm">
	  <h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
			  Loading...
	  </h1>
	  </main>
	</div>
  </div>
  );


  return (
    <div className="px-4 md:px-16 space-y-24 py-24 max-w-4xl m-8">
      <div className="space-y-4 max-w-4xl">
        <div>
          <Link href="/dash">
            <a className="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-neutral-600 font-dm">
              ../
            </a>
          </Link>
        </div>

        <p>
          {/* <time dateTime={post.date.toISOString()}>{post.date.toDateString()}</time> */}
        </p>

        <main className="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert font-dm">
          <h1 className="text-[#D1C9BC]">{slug}</h1>
		      <p className="text-xl tracking-tight text-neutral-300 font-dm">{data}</p>
        </main>
      </div>
    </div>
  );
}
