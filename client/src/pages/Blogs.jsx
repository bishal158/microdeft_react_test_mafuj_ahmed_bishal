import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/blogSlice.js";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return <>Blogs</>;
};
export default Blogs;
