export function getPostsByUser() {}
import axios from "axios";

type Post = {
  id: number;
  title: string;
};

export async function getEdgePosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = response.data;

    const pick = (post: Post): Post => ({
      id: post.id,
      title: post.title,
    });

    if (posts.length === 1) {
      return [pick(posts[0]), pick(posts[0])];
    }

    if (posts.length === 2) {
      return posts.map(pick);
    }

    if (posts.length > 2) {
      return [pick(posts[0]), pick(posts[posts.length - 1])];
    }

    return [];
  } catch {
    return [];
  }
}
