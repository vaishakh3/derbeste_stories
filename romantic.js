let storyParts = [];
let currentPart = 0;
let userChoices = {};

function generateStory() {
    userChoices.meeting = document.getElementById('meeting').value;
    userChoices.first_date = document.getElementById('first_date').value;
    userChoices.confession = document.getElementById('confession').value;

    storyParts = createRomanticStory(userChoices);

    document.querySelector('.container').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';

    updateStory();
}

function createRomanticStory(choices) {
    let story = [];

    if (choices.meeting === 'coffee_shop') {
        story.push(`You first locked eyes with your soulmate at a cozy coffee shop, the smell of fresh coffee mingling with the scent of old books. Their warm smile made your heart skip a beat.`);
    } else if (choices.meeting === 'bookstore') {
        story.push(`It was in a charming bookstore that you met. Both reaching for the same book, your fingers brushed, and there was an instant connection, a spark of something special.`);
    } else if (choices.meeting === 'beach') {
        story.push(`You met on a quiet, sandy beach, the sound of the waves crashing as the sun dipped low. Their laughter echoed across the shore as you both noticed each other.`);
    } else if (choices.meeting === 'art_gallery') {
        story.push(`Your eyes met in an art gallery, surrounded by beautiful works of art. Their passion for creativity was evident, and it was in that moment you knew this was the beginning of something magical.`);
    }

    if (choices.first_date === 'picnic') {
        story.push(`For your first date, you had a romantic picnic under the shade of a large tree in the park. You shared stories, laughter, and moments that felt like they belonged in a movie.`);
    } else if (choices.first_date === 'rooftop') {
        story.push(`Your first date took place on a rooftop, the city lights twinkling below as you dined under the stars. The night felt perfect, as if the universe had orchestrated this moment just for you two.`);
    } else if (choices.first_date === 'museum') {
        story.push(`You spent the day together at a museum, surrounded by art and history. As you walked hand-in-hand, the world seemed to disappear, and it was just the two of you, in your own little universe.`);
    } else if (choices.first_date === 'starlight') {
        story.push(`Your first date was a magical evening spent stargazing by the beach. The soft ocean breeze and the sound of the waves made the evening feel like a dream you never wanted to wake up from.`);
    }

    if (choices.confession === 'sweet_texts') {
        story.push(`The confession came through sweet love letters, each one more heartfelt than the last. It was in those words that you both realized the love between you was undeniable.`);
    } else if (choices.confession === 'heartfelt_words') {
        story.push(`It was in a quiet moment, when the world felt still, that one of you confessed your love with the most heartfelt words. There was no turning back after that beautiful confession.`);
    } else if (choices.confession === 'unexpected_kiss') {
        story.push(`Your love confession happened in the most unexpected way—through a magical kiss. Under the moonlight, you both shared a kiss that seemed to stop time itself.`);
    } else if (choices.confession === 'romantic_song') {
        story.push(`One of you surprised the other with a romantic song, a melody that spoke directly to the heart. As the song played, the words were clear—you were meant to be together.`);
    }

    story.push(`And so, your love story unfolds—an everlasting connection that will continue to grow, filled with laughter, adventure, and an endless bond that nothing can break.`);

    return story;
}

function updateStory() {
    document.getElementById('story-text').textContent = storyParts[currentPart];

    let img = '';
    if (userChoices.meeting === 'coffee_shop') {
        img = '<img src="coffee-shop.jpg" alt="Coffee Shop" />';
    } else if (userChoices.meeting === 'bookstore') {
        img = '<img src="bookstore.jpg" alt="Bookstore" />';
    } else if (userChoices.meeting === 'beach') {
        img = '<img src="beach.jpg" alt="Beach" />';
    } else if (userChoices.meeting === 'art_gallery') {
        img = '<img src="art-gallery.jpg" alt="Art Gallery" />';
    }

    document.getElementById('story-image').innerHTML = img;
}
function nextPart() {
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        updateStory();
    } else {
        document.getElementById('next-btn').style.display = 'none'; 
    }
}
function readStoryAloud() {
    const storyText = storyParts.join(' ');
    const utterance = new SpeechSynthesisUtterance(storyText);
    window.speechSynthesis.speak(utterance);
}
function back() {
    window.location.href = 'index3.html';
}
