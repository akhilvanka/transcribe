import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function FileHandler() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showResults, setShowResults] = useState(true);
  const [results, setResults] = useState(null);
  const router = useRouter()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    setShowResults(false);
    try {
      const response = await axios({
        method: "post",
        url: "https://transcribe.api.akhilv.me/upload?id=" + session.user.name, 
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(response.data);
      await delay(3000);
      router.push('/' + response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const ResultsPage = () => {
    return (
      <div className="flex flex-col h-screen items-center justify-center lg:w-3/4">
        <div className="px-4 md:px-16 py-12 m-16 space-y-3">
          {(results != null) ? (
            <>
              <h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
                Done!
              </h1>
              <h2 className="text-xl tracking-tight text-neutral-700 font-dm">
                Your transcription is ready! <br /> Redirecting you to the transcription page...
              </h2>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
                Uploading...
              </h1>
              <h2 className="text-xl tracking-tight text-neutral-700 font-dm">
                This may take a few minutes
              </h2>
            </>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="absolute m-12 p-2 left-0">
        <ul className="flex">
          <li className="mr-5">
            <a
              className="inline-block py-3 px-6 ext-[#D1C9BC] font-dm"
              href="/dash"
            >
              ../
            </a>
          </li>
        </ul>
      </div>
      <div className="flex h-screen">
        {showResults ? (
          <>
            <div className="flex flex-col h-screen items-center justify-center lg:w-3/4">
              <div className="px-4 md:px-16 py-12 m-16 space-y-3">
                <h1 className="text-4xl font-medium tracking-tight font-dm text-white-300">
                  Let's get started!
                </h1>
                <h2 className="text-xl tracking-tight text-neutral-700 font-dm">
                  Grab your audio file, it'll only take a few minutes
                </h2>
                <br />
                <br />
                <div className="mt-16 space-y-6">
                  <p className="text-2xl tracking-tight text-white-900 font-dm">
                    Upload a link to the file
                  </p>
                  <form className="space-y-2 mt-4">
                    <input
                      className="rounded max-w-lg w-80 p-2 text-[#D1C9BC]"
                      type="text"
                      placeholder="https://example.com/audio.wav"
                    />
                  </form>
                  <p className="text-xl tracking-tight text-white-900 font-dm">
                    - or -
                  </p>
                  <p className="text-2xl tracking-tight text-white-900 font-dm">
                    Upload a file
                  </p>
                  <form onSubmit={handleSubmit} className="text-sm">
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-neutral-700 file:text-[#D1C9BC]
                    hover:file:bg-neutral-600"
                    />
                    <br />
                    <button
                      className="bg-neutral-700 hover:bg-neutral-500 text-white-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-60"
                      type="submit"
                    >
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ResultsPage />
        )}
        <div className="bg-[#D1C9BC] h-screen w-screen invisible lg:visible"></div>
      </div>
    </>
  );
}
