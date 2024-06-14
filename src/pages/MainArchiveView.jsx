import React from "react";
import archiveData from "../data/archive";

export default function MainArchiveView() {
  // Extract the last part of the URL path
  const urlPath = window.location.pathname.split("/archive/").pop();
  console.log(urlPath);

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-normal items-start mt-20">
      <div className="flex h-full w-full overflow-auto md:overflow-hidden md:w-4/12">
        {archiveData
          .filter((item) => item.id === `${urlPath}`)
          .map((items, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col p-4 xl:px-24 gap-8"
            >
              {items.intern_img.map((item, i) => (
                <img key={i} className="rounded-2xl" src={item}></img>
              ))}
            </div>
          ))}{" "}
      </div>
      <div className="h-full w-full md:-8/12 space-y-6 md:space-y-12 px-4 flex flex-col items-center md:items-start">
        <p className="text-[#323576] font-bold text-8xl text-start">
          {urlPath}
        </p>
        <p className="text-gray-500 text-xl text-justify md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae
          atque doloribus, voluptatibus blanditiis ad molestiae ab, repudiandae
          quis architecto placeat rerum natus asperiores tempore non cupiditate.
          Quis, ipsum? Error voluptatum ipsam similique, non ab alias debitis
          tenetur tempora optio, aperiam reiciendis tempore nihil earum
          accusamus ipsum, harum magni itaque porro provident. Distinctio
          exercitationem corporis fuga illo ratione, corrupti amet reprehenderit
          hic vitae, tenetur, provident sapiente. Voluptatem saepe accusamus ex
          veniam, qui neque eaque natus tempore quam! Omnis natus magni illum
          quia corporis, eos ipsum? Animi voluptatum voluptates blanditiis
          consectetur odit accusantium, sit magni? Sit et eaque sunt est
          repellat voluptatum aliquid porro repudiandae, optio eius commodi,
          consectetur tempora ad quidem. Nostrum, modi delectus laborum labore
          obcaecati explicabo consequuntur id, ullam facilis tempore excepturi
          suscipit.
        </p>
        <div className="space-y-4">
          <p className="font-semibold text-center md:text-start">GPCSSI'{urlPath} Interns</p>
          {archiveData
            .filter((item) => item.id === `${urlPath}`)
            .map((items, index) => (
              <div key={index} className="flex flex-wrap text-gray-600 justify-center md:justify-normal">
                {items.intern_list.map((item, i) => (
                  <p key={i} className="text-start capitalize px-12 min-w-52 max-w-52">
                    {item.trim()}{" "}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}