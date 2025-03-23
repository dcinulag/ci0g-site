document.addEventListener("DOMContentLoaded", function () {
    const storiesContainer = document.getElementById("stories");

    // Ovdje ručno navodimo dostupne crtice
    const stories = [
        { title: "1. Lola", file: "content/stories/1. Lola.md" }
        { title: "2. Crtica broj 2", file: "content/stories/2. Crtica broj 2.md" },
        { title: "3. Crtica broj 3", file: "content/stories/3. Crtica broj 3.md" },
        { title: "4. Crtica broj 4", file: "content/stories/4. Crtica broj 4.md" },
        { title: "5. Crtica broj 5", file: "content/stories/5. Crtica broj 5.md" } 
       ];

    // Prolazimo kroz listu priča i dodajemo ih u HTML
    stories.forEach(story => {
        const article = document.createElement("article");
        article.innerHTML = `<h3><a href="${story.file}">${story.title}</a></h3>`;
        storiesContainer.appendChild(article);
    });
});
