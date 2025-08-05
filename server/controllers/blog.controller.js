import { Blog } from "./../models/blog.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const getAllBlogs = async (req, res) => {
  try {
    //sort by time of creation
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(allBlogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};
const getUserBlogs = async (req, res) => {
  const { _id: userId } = req.user;
  // console.log("called");
  try {
    //sort by time of creation
    const allBlogs = await Blog.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(allBlogs);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const getBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not exist." });
    }
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog", error: error.message });
  }
};

const handleCreateBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const { _id: userId } = req.user;
  console.log(image[0]);
  try {
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    let uploadedImage = null;

    if (image) {
      uploadedImage = await uploadToCloudinary(image);
    }

    const newBlog = new Blog({
      userId,
      title,
      content,
      image: uploadedImage || "",
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to create blog", error: error.message });
  }
};

const handleUpdateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;
  const { _id: userId } = req.user;

  try {
    const blog = await Blog.findById(id);
    if (blog.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized to perform this action" });
    }

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let updatedImage = blog.image;

    if (image && image !== blog.image) {
      updatedImage = await uploadToCloudinary(image);
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.image = updatedImage;

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update blog", error: error.message });
  }
};

const handleDeleteBlog = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (blog.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized to perform this action" });
    }

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete blog", error: error.message });
  }
};

//handles likes and dislikes
const handleLikeBlog = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const alreadyLiked = blog.likes.some(
      (likeId) => likeId.toString() === userId.toString()
    );

    if (alreadyLiked) {
      // Unlike
      blog.likes = blog.likes.filter(
        (likeId) => likeId.toString() !== userId.toString()
      );
      await blog.save();
      return res.status(200).json({ message: "Blog unliked successfully" });
    } else {
      // Like
      blog.likes.push(userId);
      await blog.save();
      return res.status(200).json({ message: "Blog liked successfully" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to toggle like",
      error: error.message,
    });
  }
};

const handleCommenteBlog = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const { text } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Comment cannot be empty" });
    }

    blog.comments.push({ userId, text });
    await blog.save();
    return res.status(200).json({
      message: "Comment added successfully",
      comment: { userId, text },
      blog,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to comment blog", error: error.message });
  }
};

export {
  handleDeleteBlog,
  handleCreateBlog,
  handleUpdateBlog,
  getAllBlogs,
  getBlog,
  getUserBlogs,
  handleLikeBlog,
  handleCommenteBlog,
};
