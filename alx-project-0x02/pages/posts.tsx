import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

interface ApiPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: ApiPostType[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), 
    },
  };
}
