import React from "react";
import { useAuthStore } from "./../store/useAuthStore";

function Profile() {
  const { authUser } = useAuthStore();
  const formattedDate = new Date(authUser?.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div className=" w-full flex flex-col justify-center">
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{
                backgroundImage:
                  'url("https://previews.123rf.com/images/mik38/mik382306/mik38230600134/206406358-young-student-avatar-generative-ai.jpg")',
              }}
            />
            <div className="flex flex-col items-center justify-center ">
              <p className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                {authUser.fullname}
              </p>
              <p className="text-neutral-500 text-base font-normal leading-normal text-center">
                Joined in {formattedDate}
              </p>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
            <span className="truncate">Edit Profile</span>
          </button>
        </div>
      </div>
      <div className="max-w-[580px] mx-auto">
        <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          About
        </h2>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
            <p className="text-neutral-500 text-sm font-normal leading-normal">
              Email
            </p>
            <p className="text-[#141414] text-sm font-normal leading-normal">
              {authUser.email}
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
            <p className="text-neutral-500 text-sm font-normal leading-normal">
              Bio
            </p>
            <p className="text-[#141414] text-sm font-normal leading-normal">
              Passionate about technology and innovation. Sharing my journey and
              insights in the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
