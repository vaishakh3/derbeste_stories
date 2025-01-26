function startStory() {
    const genre = document.getElementById('genre').value;
    
    if (genre === 'crime') {
        window.location.href = 'crime.html';  
    } else if (genre === 'horror') {
        window.location.href = 'horror.html';  
    } else if (genre === 'romantic') {
        window.location.href = 'romantic.html';  
    } else if (genre === 'mafia') {
        window.location.href = 'mafia.html';  
    }
}
