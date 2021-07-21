import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';

import PostView from './PostView';

const PostMain = props => {
  return (
    <>
      <h2 align="center">게시판</h2>
      <PostView />
    </>
  )
}

export default PostMain;