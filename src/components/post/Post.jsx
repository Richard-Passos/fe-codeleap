/* Components */
import { PostContainer, Container } from "./Post.style";
import { Trash, Edit } from "@styled-icons/boxicons-solid";
import { ModalEdit } from "../modal-edit";
import { ModalDelete } from "../modal-delete";

/* Logic */
import { store } from "@/redux/store";
import { useState } from "react";

export default function Post({ post, index, posts, setPosts }) {
  const { username } = store.getState().username;

  const handleMinutesDiff = (date) => {
    const timeDiff = Math.abs(new Date().getTime() - date.getTime());
    const diffMinutes = Math.ceil(timeDiff / (1000 * 3600 * 24 * 60));

    return diffMinutes;
  };

  /* Handle delete post */
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    const allPosts = [...posts];
    allPosts.splice(index, 1);

    setPosts(allPosts);
    setIsDeleteModalOpen(false);
  };
  /*  */

  /* Handle edit post */
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editedPost, setEditedPost] = useState({
    title: "",
    author: username,
    content: "",
    createdAt: new Date(),
  });
  const isSaveEnable = !Object.values(editedPost).includes("");

  const handleEdit = (e) => {
    e.preventDefault();

    const allPosts = [...posts];
    allPosts.splice(index, 1, { ...editedPost });

    setPosts(allPosts);
    setIsEditModalOpen(false);

    editedPost.title = "";
    editedPost.content = "";
  };
  /*  */

  return (
    <PostContainer>
      <header>
        <h2>{post.title}</h2>

        {username === post.author && (
          <div className="actions-container">
            <Trash size={25} onClick={() => setIsDeleteModalOpen(true)} />

            <Edit size={25} onClick={() => setIsEditModalOpen(true)} />
          </div>
        )}
      </header>

      <Container>
        <div className="post-data">
          <span className="author">@{post.author}</span>

          <span>
            {handleMinutesDiff(post.createdAt)} minute
            {handleMinutesDiff(post.createdAt) === 1 ? "" : "s"} ago
          </span>
        </div>

        <div className="content">
          <p>{post.content}</p>
        </div>
      </Container>

      {isDeleteModalOpen && (
        <ModalDelete
          handleDelete={handleDelete}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {isEditModalOpen && (
        <ModalEdit
          setEditedPost={setEditedPost}
          setIsEditModalOpen={setIsEditModalOpen}
          isSaveEnable={isSaveEnable}
          handleEdit={handleEdit}
        />
      )}
    </PostContainer>
  );
}
