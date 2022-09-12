const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}

const displayComment = body => {
    // console.log(body)
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerHTML = ``;
  body.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
        <div class="card mb-3 class="border border-primary " style="max-width: 18rem ;">
  <div class="card-header">${comment.id}</div>
  <div class="card-body text-warning">
    <h5 class="card-title">${comment.name}</h5>
    <p class="card-text">${comment.body}</p>
    <button class="btn btn-primary" onclick="displayCommentDetails()">Comment Detail</button>
  </div>`;
    commentContainer.appendChild(commentDiv);
  });

  const loadCommentDetails = id => {
    const url = `https://jsonplaceholder.typicode.com/${comment.id}`;
    console.log(url);
}


}
