import React, { Fragment } from "react";
import PostForm from "./PostForm";
import Post from "./Post";

export default function PostsContainer() {
  return (
    <Fragment>
      <PostForm />
      <Post />
    </Fragment>
  );
}
