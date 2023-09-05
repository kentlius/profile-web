const contentContainer = document.getElementById("content");
contents.forEach((item) => {
  contentContainer.innerHTML += `
        <article>
          <h1>${item.title}</h1>
          <p>${item.content}</p>
        </article>
    `;
});

const today = new Date();
document.getElementById("current-year").innerHTML = today.getFullYear();
