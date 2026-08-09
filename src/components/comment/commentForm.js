import React from 'react';
import Avatar from '../Avatar.js';

export default function CommentForm({
  user,
  commentInput,
  setCommentInput,
  onSubmit
}) {
  return (
    <form className="comment-input-row" onSubmit={onSubmit}>
      <Avatar 
        src={user?.profileImage} 
        nickname={user?.nickname || 'Me'} 
        size={36} 
        className="comment-input-row__avatar"
      />
      <div className="comment-input-row__inner">
        <input 
          type="text" 
          id="commentTextArea" 
          className="comment-input" 
          placeholder="댓글을 입력하세요..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button 
          type="submit" 
          id="commentSubmitBtn" 
          className="comment-submit" 
          disabled={!commentInput.trim()}
        >
          등록
        </button>
      </div>
    </form>
  );
}
