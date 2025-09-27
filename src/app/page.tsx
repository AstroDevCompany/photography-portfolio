import { Button } from "@/components/ui/button"
import logo from "../../public/logo.jpg";
import img_s1_dark_sparkle from "../../public/dark/sparkler.png";
import img_s1_light_sparkle from "../../public/light/sparkler.png";
import img_s1_light_pics from "../../public/light/pics.png";
import img_s1_dark_pics from "../../public/dark/pics.png";
import img_s1_dark_loc from "../../public/dark/loc.png";
import img_s1_light_loc from "../../public/light/loc.png";
import img_s1_dark_globe from "../../public/dark/globe.png";
import img_s1_light_globe from "../../public/light/globe.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 dark:bg-black bg-white">
      <div id="topSection" className="w-full h-full flex flex-col justify-start items-center">
        <div className="flex justify-center w-[50%] text-5xl font-medium">
          <p className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">luca</p>
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">shot</p>
          <p className="bg-gradient-to-r from-cyan-600 to-green-500 bg-clip-text text-transparent">edits</p>
        </div>
        <div className="flex justify-center w-[50%] text-gray-600 dark:text-gray-500 text-2xl">Luca's Amateur Photography Portfolio</div>
        <div className="mt-20 flex flex-col justify-center items-center">
          <div className="flex gap-10 text-lg w-[80vw] h-[30vh]">
            <img src={logo.src} className="w-auto h-fill"></img>
            <div className="align-middle justify-center flex flex-col">
              <div className="flex items-center mb-4 bg-black/5 dark:bg-white/5 rounded-md p-2">
                <div className="dark:hidden">
                  <img src={img_s1_light_globe.src} className="w-10 h-10"></img>
                </div>
                <div className="hidden dark:block">
                  <img src={img_s1_dark_globe.src} className="w-10 h-10"></img>
                </div>
                <p className="ml-2">Beautiful shots from around the globe.</p>
              </div>

              <div className="flex items-center mb-4 bg-black/5 dark:bg-white/5 rounded-md p-2">
                <div className="dark:hidden">
                  <img src={img_s1_light_loc.src} className="w-10 h-10"></img>
                </div>
                <div className="hidden dark:block">
                  <img src={img_s1_dark_loc.src} className="w-10 h-10"></img>
                </div>
                <div className="flex ml-2">
                  <p>Based in&nbsp;</p>
                  <p className="text-green-600">It</p>
                  <p>a</p>
                  <p className="text-red-600">ly</p>
                  <p>.</p>
                </div>
              </div>

              <div className="flex items-center mb-4 bg-black/5 dark:bg-white/5 rounded-md p-2">
                <div className="dark:hidden">
                  <img src={img_s1_light_pics.src} className="w-10 h-10"></img>
                </div>
                <div className="hidden dark:block">
                  <img src={img_s1_dark_pics.src} className="w-10 h-10"></img>
                </div>
                <p className="ml-2 max-w-[30vw]">Any form of picture (e.g. landscape, wildlife, vehicles, urban, sky, nature).</p>
              </div>

              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-md p-2">
                <div className="dark:hidden">
                  <img src={img_s1_light_sparkle.src} className="w-10 h-10"></img>
                </div>
                <div className="hidden dark:block">
                  <img src={img_s1_dark_sparkle.src} className="w-10 h-10"></img>
                </div>
                <p className="ml-2">No AI. Just real, amazing shots.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
