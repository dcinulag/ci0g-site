document.addEventListener("DOMContentLoaded", function () {
    const storiesContainer = document.getElementById("stories");

    // Ovdje ručno navodimo dostupne priče
    const stories = [
        { title: "1. Lola", file: "content/stories/1. Lola.md" }
    ];

    // Prolazimo kroz listu priča i dodajemo ih u HTML
    stories.forEach(story => {
        const article = document.createElement("article");
        article.innerHTML = `<h3><a href="${story.file}">${story.title}</a></h3>`;
        storiesContainer.appendChild(article);
    });
});
