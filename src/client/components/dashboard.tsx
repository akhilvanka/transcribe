import axios from "axios";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://transcribe.api.akhilv.me/users/" + session.user.name,
    fetcher
  );

  if (error)
    return (
      <div>
        <p className="text-2xl tracking-tight text-white-900 font-dm">No transcriptions available</p>
      </div>
    );

  if (!data)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="space-x-12">
      {data.map((file) => (
        <>
          <Link href={`/${file}`}>
            <a key={file} href={"/" + file} className="text-xl tracking-tight text-white-900 font-dm">{file}</a>
          </Link>
        </>
        ))} 
    </div>
  );
}
