import axios from "axios";

type UserPost = {
  userId: number;
  id: number;
  title: string;
};

type PostSummary = {
  id: number;
  title: string;
};

export async function getPostsByUser(userId: number): Promise<PostSummary[]> {
  try {
    const response = await axios.get<UserPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({ id, title }));
  } catch {
    throw new Error("Failed to fetch posts");
  }
}
