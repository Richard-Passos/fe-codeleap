/* Components */
import { CreatePostContainer, CreateBtn } from "./CreatePost.style";
import { FormRow } from "../FormRow";

/* Logic */
import { useRef, useState } from "react";
import { store } from "@/redux/store";

export default function CreatePost({ setPosts }) {
  const { username } = store.getState().username;

  const [post, setPost] = useState({
    title: "",
    author: username,
    content: "",
    createdAt: new Date(),
  });

  const isCreateEnable = !Object.values(post).includes("");

  const title = useRef();
  const content = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPosts((prevPosts) => [{ ...post }, ...prevPosts]);

    if (title && content) {
      title.current.value = "";
      content.current.value = "";
      post.title = "";
      post.content = "";
    }
  };

  return (
    <CreatePostContainer>
      <h2>What's on your mind?</h2>

      <form>
        <FormRow>
          <label htmlFor="title">Title</label>

          <input
            ref={title}
            type="text"
            id="title"
            placeholder="Hello world"
            onChange={(e) =>
              setPost((prevState) => {
                return { ...prevState, title: e.target.value };
              })
            }
          />
        </FormRow>

        <FormRow>
          <label htmlFor="content">Content</label>

          <textarea
            ref={content}
            id="content"
            placeholder="Content here"
            rows="4"
            onChange={(e) =>
              setPost((prevPost) => {
                return { ...prevPost, content: e.target.value };
              })
            }
          />
        </FormRow>

        <CreateBtn
          type="submit"
          disabled={!isCreateEnable}
          onClick={handleSubmit}
        >
          Create
        </CreateBtn>
      </form>
    </CreatePostContainer>
  );
}
