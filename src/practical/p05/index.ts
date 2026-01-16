import axios from "axios";

type Comment = {
  id: number;
  body: string;
};

export async function safeFetchComment(
  commentId: number | null | undefined
): Promise<Comment | null> {
  if (typeof commentId !== "number" || commentId <= 0) {
    return null;
  }

  try {
    const response = await axios.get<Comment>(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    const data = response.data;

    const result = (["id", "body"] as const).reduce<Pick<Comment, "id" | "body">>(
      (acc, key) => {
        acc[key] = data[key];
        return acc;
      },
      { id: data.id, body: data.body }
    );

    return result;
  } catch {
    return null;
  }
}
