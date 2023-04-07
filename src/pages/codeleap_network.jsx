/* Components */
import Head from "next/head";
import { Content, Footer, Header, CreatePost, Post } from "@/components";

/* Logic */
import { store } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CodeleapNetwork() {
  /* Return to welcome page if username is empty */
  const router = useRouter();
  const { username } = store.getState().username;

  useEffect(() => {
    if (username === "") router.push("/");
  }, [username]);
  /*  */

  const [posts, setPosts] = useState([]);

  return (
    <>
      <Head>
        <title>CodeLeap - Network</title>
      </Head>

      <Header />
      <Content>
        <CreatePost setPosts={setPosts} />

        {posts.map((post, i) => (
          <Post
            key={`key-post-${i}`}
            post={post}
            index={i}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
      </Content>
      <Footer />
    </>
  );
}
