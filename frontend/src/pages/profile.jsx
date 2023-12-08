import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Works = [
    { name: "Mars-v" },
    { name: "Nepko Kids" },
    { name: "Loud Library" },
    { study: "IBT" },
    { study: "Pinecone" },
  ];
  return (
    <div className="h-screen bg-slate-300">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="./galaxy.jpeg"
            className="w-[900px] h-[200px] mt-20 rounded-xl "
          ></img>
          <img src="./dog.jpeg" className="rounded-full w-32 h-32 absolute bottom-[-30px] left-[30px] border-[5px]"></img>
          <p className="text-2xl font-bold absolute bottom-[5px] left-[170px] text-white">Amaraa</p>
        </div>
        <div className="flex gap-20 mt-12">
          <div className="flex flex-col gap-5">
            <div className="w-96 h-56 bg-slate-200 text-black  rounded-xl p-5">
              <h1 className="font-bold">About</h1>
              <p className="w-full h-10">
                hi, I'm Amaraa, I'm creative greekfrom Mongolia.I enjoy creating
                eye candy solutions for web and mobile apps
              </p>
              <div className="flex items-center gap-2 mt-10 mb-2">
                <img src="./email.jpeg" className="w-8 h-8 rounded-full "></img>
                <p>amarsanaa.tumurbaatar26@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="./phone.png" className="w-8 h-8 rounded-full "></img>
                <p>86870550</p>
              </div>
            </div>
            <div className="w-96 h-56 bg-slate-200 text-black rounded-xl p-5">
              <h1 className="font-bold">Job & Education</h1>
              <div>
                {Works.map((Work, index) => (
                  <div className="flex gap-2 items-center">
                    <img
                      src="./work.png"
                      className="w-6 h-6 rounded-full mt-2"
                    ></img>
                    <p>{Work.name}</p>
                    <p>{Work.study}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[370px] bg-slate-200 rounded-xl p-3 mt-8">
            <div className="flex items-center gap-4  ">
              <img src="./dog.jpeg" className="w-10 h-10 rounded-full w-"></img>
              <p className="font-bold text-black">Amaraa</p>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="text-black font-bold mt-2">Future of earth</p>
              <div className="flex justify-center">
                <img
                  src="./earth.jpeg"
                  className="w-[400px] h-48 rounded-xl "
                ></img>
              </div>
              <div className="flex gap-4 ">
                <img src="./love.png" className="rounded-full w-10 h-8"></img>
                <p className="text-black">Like</p>
                <img src="./comment.png" className="rounded-xl w-10 h-8"></img>
                <p className="text-black">Comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
