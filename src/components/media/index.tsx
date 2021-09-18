import { Image } from '@chakra-ui/image';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/layout';
import React from 'react';
import { Posts } from '../../lib/reddit';

interface MediaProps extends AspectRatioProps {
  post: Posts;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
  onOpen: () => void;
}

function Media({
  post,
  onOpen,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = false,
}: MediaProps) {
  if (post.type == 'video') {
    return (
      <video
        autoPlay={autoPlay}
        controls={controls}
        muted={muted}
        loop={loop}
        width="100%"
        height="100%"
        onClick={onOpen}
      >
        <source src={post.url}></source>
      </video>
    );
  }

  if (post.type == 'image')
    return (
      <AspectRatio onClick={onOpen} height="100%" width="100%" ratio={1}>
        <Image src={post.url} scrolling="no" width="100%" height="100%" />
      </AspectRatio>
    );
}

export default Media;
