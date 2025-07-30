import React from "react";
import NavBar from "../components/NavBar";

function BlogDetails() {
  return (
    <>
      <NavBar />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
            The Future of Sustainable Living: Innovations and Insights
          </h1>
          <div className="flex items-center gap-4 bg-neutral-50 px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkL_ldjA9cOlKAkyIH1ii6O_l6ddovGSYqbjOUC49gllVqUXT7sJLHL6bl1yVV6qKlYsHTsMhkHOi9Uf8XjTkLngh6GT2QjgSWhEQWtmpbSlHw9WAm5kgxP1809xd1RDfF9o6fXTUndxmUgwGIizhJkaYTWFEiTjSGuluXEHMrOOU-UWTTOztIbsc-0vb4xUucMRLdBaX2Q3yDGBXVwmRGQXuT2Kop6enZzAGthnFrTn0T-Eg1nX08Y9qM3rHv4bP1jputsxvcFE_R")',
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#141414] text-base font-medium leading-normal line-clamp-1">
                By Amelia Harper
              </p>
              <p className="text-neutral-500 text-sm font-normal leading-normal line-clamp-2">
                Published on January 15, 2024
              </p>
            </div>
          </div>
          <div className="flex w-full grow bg-neutral-50 @container py-3">
            <div className="w-full gap-1 overflow-hidden bg-neutral-50 @[480px]:gap-2 aspect-[3/2] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMzLzaETY3euIO25u0J64e1B75U9R74A6ubizQaBA3XNYhKByQbYhiIUARJraJhNiwStAbRzSIX4w0vRDoirrnqyFJoZ5il4A3d-1psd4kMA7ynXtoMz-Q41UsJJsCpeL22YtMufD6yRTH_bCZcSa5sY9iR-H_FoBfdbRuYNRYjB4seq1LuVRbIZ-LmY3j33bVRavBomIAGpEIp-NoQY_4yHUN3tL52DzX-IE2R-8Q3UWkFwkqj3Y4ljgM5rNfBM6o8DI60dtY7p-U")',
                }}
              />
            </div>
          </div>
          <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
            In an era defined by environmental consciousness, the concept of
            sustainable living has transcended from a niche lifestyle to a
            global imperative. This article delves into the latest innovations
            and insights shaping the future of sustainable living, exploring how
            individuals and communities can minimize their ecological footprint
            while enhancing their quality of life. From renewable energy
            solutions to eco-friendly building materials and sustainable
            consumption practices, we uncover the transformative potential of
            embracing a greener lifestyle. Join us as we navigate the path
            towards a more sustainable future, where harmony between humanity
            and nature is not just a vision, but a tangible reality.
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
