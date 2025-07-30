import React from "react";

function CreateBlog() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Title"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Tags (comma separated)"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex flex-col p-4">
          <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbdbdb] px-6 py-14">
            <div className="flex max-w-[480px] flex-col items-center gap-2">
              <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                Upload Image
              </p>
              <p className="text-[#141414] text-sm font-normal leading-normal max-w-[480px] text-center">
                Drag and drop or click to upload
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Upload</span>
            </button>
          </div>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Start writing..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] min-h-36 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
              defaultValue={""}
            />
          </label>
        </div>
        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Preview
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          This is where the markdown preview will appear.
        </p>
        <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4">
          Draft saved 2 minutes ago
        </p>
        <div className="flex px-4 py-3 justify-end">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Publish</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
