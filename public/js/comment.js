const newCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#post-comment').value.trim();
    console.log(comment);
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
        console.log(response.body)
  
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

  