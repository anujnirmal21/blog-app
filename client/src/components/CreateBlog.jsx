import { useState } from "react";
import { useForm } from "react-hook-form";
import { CircleX } from "lucide-react";
import { useBlogStore } from "../store/useBlogStore";
import { LoaderIcon } from "react-hot-toast";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const { handleCreateBlog, isUploading } = useBlogStore();

  const onSubmit = (data) => {
    handleCreateBlog({ ...data, image: imagePreview });
    setImagePreview(null);
    reset();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-40 flex flex-1 justify-center py-5 max-h-screen overflow-y-scroll"
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
              className="form-input w-full rounded-xl border border-[#dbdbdb] bg-neutral-50 h-14 p-[15px] text-base placeholder:text-neutral-500 focus:outline-0 focus:border-black"
            />
            {errors.title && (
              <span className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex flex-col p-4">
          <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbdbdb] px-6 py-14 relative">
            {!imagePreview && (
              <>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#141414] text-lg font-bold text-center">
                    Upload Image
                  </p>
                  <p className="text-[#141414] text-sm font-normal text-center">
                    Drag and drop or click to upload
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                  onChange={(e) => {
                    register("image").onChange(e);
                    handleImageChange(e);
                  }}
                  className="hidden"
                  id="fileUpload"
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer flex items-center justify-center h-10 px-4 rounded-xl bg-[#ededed] text-sm font-bold"
                >
                  Upload
                </label>
                {errors.image && (
                  <span className="text-red-500 text-sm">
                    {errors.image.message}
                  </span>
                )}
              </>
            )}
            {imagePreview && (
              <div className=" relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-lg h-[80%] w-full object-cover mt-4"
                />
                <CircleX
                  className=" absolute right-4 top-8 text-white bg-black rounded-full cursor-pointer"
                  onClick={() => setImagePreview(null)}
                  size={30}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Start writing..."
              {...register("content", { required: "Content is required" })}
              className="form-input w-full rounded-xl border border-[#dbdbdb] bg-neutral-50 min-h-36 p-[15px] text-base placeholder:text-neutral-500 focus:outline-0 focus:border-black resize-none"
            />
            {errors.content && (
              <span className="text-red-500 text-sm mt-1">
                {errors.content.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex px-4 py-3 justify-start">
          <button
            type="submit"
            className="min-w-[480px] h-10 px-4 bg-black text-white rounded-xl font-bold text-sm flex items-center justify-center"
          >
            {isUploading ? <LoaderIcon /> : "Publish"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateBlog;
