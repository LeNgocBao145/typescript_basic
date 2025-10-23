interface IPost<T, U> {
  id: number;
  title: string;
  description: string;
  extra: T[];
  meta: U;
}

interface IAuthor {
  userId: number;
  username: string;
}

interface ICategory {
  categoryId: number;
  categoryTitle: string;
}

const postWithTags: IPost<string, number> = {
  id: 1,
  title: "Hello",
  description: "Test",
  extra: ["tag1", "tag2"],
  meta: 123,
};

const postWithAuthors: IPost<IAuthor, string> = {
  id: 2,
  title: "Có tác giả",
  description: "Cool stuff",
  extra: [
    { userId: 1, username: "Alice" },
    { userId: 2, username: "Bob" },
  ],
  meta: "Bài viết về tác giả",
};