/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PostSidebar } from "../components";

const Blog = ({ title, blogs }) => {
  return (
    <div className="bg-black">
      <div className="w-main mx-auto">
        {title && (
          <h1 className="uppercase font-bold text-main pt-4 pb-8 text-center">
            {title}
          </h1>
        )}
        <div className="flex gap-4 pb-8">
          <div className="flex gap-3 pr-4 border-r-2 border-white flex-wrap w-[75%] justify-between pb-8">
            {blogs.map((blog) => (
              <div className="flex flex-col items-center" key={blog.id}>
                <Link to={blog.link}>
                  <img
                    src={blog.image}
                    alt=""
                    className="w-[435px] object-cover"
                  />
                </Link>
                <div className="w-[435px] py-5">
                  <Link
                    to={blog.link}
                    className="text-main w-full block text-center text-sm font-bold"
                  >
                    {blog.title}
                  </Link>
                  <span className="text-white w-full block text-center mt-2">
                    {blog.desc}
                  </span>
                  {blog.comments && (
                    <span className="text-xs text-[#777] text-center block mt-2">
                      {blog.comments} COMMENTS
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[20%]">
            <PostSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
