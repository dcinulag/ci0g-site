document.addEventListener("DOMContentLoaded", function () { 
    const storiesContainer = document.getElementById("stories");

    // Popis postojećih crtica
    const stories = [
        { title: "1. Lola", file: "content/stories/Lola.md" }
    ];

    stories.forEach(story => {
        const article = document.createElement("article");
        article.innerHTML = `<h3><a href="story.html?file=${story.file}">${story.title}</a></h3>`;

        storiesContainer.appendChild(article);
    });
});


