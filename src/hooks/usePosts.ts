import { createContext, useContext } from 'react';

interface Media {
  type?: string;
  oembed?: {
    author_url?: string;
    type?: string;
    height?: number;
    width?: number;
  };
}

interface Posts {
  id: string;
  url: string;
  permalink: string;
  title: string;
  reddit: string;
  media?: Media;
}

interface PostsContextData {
  posts: Array<Posts>;
  setPosts: (posts: Posts[]) => void;
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

const usePosts = () => useContext(PostsContext);

export { PostsContext, usePosts };
