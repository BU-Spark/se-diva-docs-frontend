import React from "react";
import Search from "./Search";

type Post = {
  id: string;
  name: string;
};

const posts: Post[] = [
  { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" },
];

const filterPosts = (posts: Post[], query: string | null) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

const { search } = window.location;
const query = new URLSearchParams(search).get("s");
const filteredPosts = filterPosts(posts, query);
const SideBar = () => {
  return (
    <div>
      <Search></Search>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
