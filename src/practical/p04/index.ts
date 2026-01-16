import axios from "axios";
import { log } from "node:console";

type Comment = {
  postId?: number | null;
};

export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    const response = await axios.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );

    return response.data.reduce<Record<number, number>>((counts, comment) => {
      if (comment.postId == null) {
        return counts;
      }

      const postId = comment.postId;
      
      return counts;
    }, {});
  } catch {
    throw new Error("Failed to fetch comments");
  }
}
