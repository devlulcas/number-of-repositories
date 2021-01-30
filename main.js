const goButton = document.getElementById('goButton');
const textField = document.getElementById('textField');
const numberOfRepositories = document.getElementById('numberOfRepositories');
const languageSpan = document.getElementById('languageSpan'); 

goButton.addEventListener('click', () => {
    const language = textField.value;
    const githubApiSearchQuery = `https://api.github.com/search/repositories?q=${language.toLowerCase()}`;
    console.log(githubApiSearchQuery);
    if (language != "") {
        fetch(githubApiSearchQuery)
            .then(response => response.json())
            .then(json => {
                numberOfRepositories.innerHTML = json.total_count;
                languageSpan.textContent = language.toUpperCase();
            });
    }
    else {
        window.alert("INSIRA UMA LINGUAGEM");
    }
});