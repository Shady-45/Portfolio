import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8
"
        >
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react2.png"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FireBase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/wordpress.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
