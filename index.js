const show = document.getElementById("trigger")
const tab = document.getElementById("clicks")

show.addEventListener("click", () => {
    alert("Button clicked!");
  });


  tab.addEventListener("click", () => {
    tab.classList.toggle("trigger");
  });


// Fetch and display blog posts dynamically
fetch('blog.json')
  .then(response => response.json())
  .then(posts => {
    const blogContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>Posted on: ${post.date}</small>
      `;
      blogContainer.appendChild(postElement);
    });
  })
  .catch(err => console.error('Failed to fetch blog posts:', err));
