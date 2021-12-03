const newCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#post-comment').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ user_id, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post/:id');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

  