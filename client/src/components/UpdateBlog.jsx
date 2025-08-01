import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleX } from "lucide-react";
import { useBlogStore } from "../store/useBlogStore";
import { LoaderIcon } from "react-hot-toast";
import toast from "react-hot-toast";

function UpdateBlog({ blog }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: blog.title,
      content: blog.content,
    },
  });

  const [imagePreview, setImagePreview] = useState(blog.image || null);
  const { handleUpdate, isUpdating } = useBlogStore();

  useEffect(() => {
    setValue("title", blog.title);
    setValue("content", blog.content);
  }, [blog, setValue]);

  const onSubmit = async (data) => {
    const payload = {
      title: data.title !== blog.title ? data.title : undefined,
      content: data.content !== blog.content ? data.content : undefined,
      image: imagePreview !== blog.image ? imagePreview : undefined,
    };

    const hasChanges = Object.values(payload).some((val) => val !== undefined);

    if (!hasChanges) {
      toast.error("No changes made.");
      return;
    }

    await handleUpdate(blog._id, payload);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-40 flex flex-1 justify-center py-5 max-h-screen overflow-y-scroll"
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Title Input */}
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

        {/* Image Upload */}
        <div className="flex flex-col p-4">
          <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbdbdb] px-6 py-14 relative">
            {!imagePreview && (
              <>
                <div className="text-center">
                  <p className="text-lg font-bold">Upload Image</p>
                  <p className="text-sm">Drag and drop or click to upload</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="fileUpload"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer h-10 px-4 rounded-xl bg-[#ededed] text-sm font-bold flex items-center justify-center"
                >
                  Upload
                </label>
              </>
            )}
            {imagePreview && (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-lg h-[80%] w-full object-cover mt-4"
                />
                <CircleX
                  className="absolute right-4 top-8 text-white bg-black rounded-full cursor-pointer"
                  onClick={() => setImagePreview(null)}
                  size={30}
                />
              </div>
            )}
          </div>
        </div>

        {/* Content Input */}
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

        {/* Submit */}
        <div className="flex px-4 py-3 justify-start">
          <button
            type="submit"
            className="min-w-[480px] h-10 px-4 bg-black text-white rounded-xl font-bold text-sm flex items-center justify-center"
          >
            {isUpdating ? <LoaderIcon /> : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default UpdateBlog;
