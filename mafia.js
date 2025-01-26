let storyParts = [];
let currentPart = 0;
let userChoices = {};

function generateStory() {
    userChoices.role = document.getElementById('role').value;
    userChoices.love = document.getElementById('love').value;
    userChoices.action = document.getElementById('action').value;

    storyParts = createMafiaLoveStory(userChoices);

    document.querySelector('.container').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';

    updateStory();
}

function createMafiaLoveStory(choices) {
    let story = [];

    if (choices.role === 'boss') {
        story.push(`As the Boss of the family, you control the streets with an iron fist. Power, loyalty, and fear are your tools, but when love enters the picture, everything changes.`);
    } else if (choices.role === 'underboss') {
        story.push(`As the Underboss, you handle the dirty work with precision and ruthless efficiency. But love has a way of creeping into the most dangerous lives.`);
    } else if (choices.role === 'enforcer') {
        story.push(`You're the Enforcer, feared by everyone in the city. But love? That’s a weakness, something that can destroy you. Or so you thought.`);
    } else if (choices.role === 'hacker') {
        story.push(`You're the hacker, the one who pulls the strings from the shadows. Your loyalty lies with the family, but the heart is a different story.`);
    }

    if (choices.love === 'enemy') {
        story.push(`Your forbidden love is the daughter of your biggest rival. You’ve always been taught to hate her, yet there’s something irresistible about her innocence and beauty.`);
    } else if (choices.love === 'rival') {
        story.push(`Your love is a rival mafia member, someone whose loyalty is not with you, but against you. A dangerous game, but the chemistry is undeniable.`);
    } else if (choices.love === 'betrayal') {
        story.push(`Your best friend's love... you've secretly desired them for years. But what happens when your feelings turn into betrayal?`);
    } else if (choices.love === 'bodyguard') {
        story.push(`Your bodyguard, someone you’ve always trusted with your life, becomes the object of your deepest desires. But falling for them is a risk you’re not sure you’re ready to take.`);

    }

    if (choices.action === 'dangerous') {
        story.push(`It happens in the midst of a violent showdown, bullets flying, the air thick with danger. And in that moment, you confess your love with a single, desperate glance.`);
    } else if (choices.action === 'betrayal') {
        story.push(`You betray your own family, turning on those who trusted you, just to confess your love. The price of loyalty is high, but love demands it.`);
    } else if (choices.action === 'silent') {
        story.push(`No words are needed. A silent, intense stare is enough to convey the depth of your feelings. It’s dangerous, it’s forbidden, but it’s real.`);
    } else if (choices.action === 'gunpoint') {
        story.push(`Under the cold barrel of a gun, your confession spills out, each word trembling with emotion. In this life, love can be the deadliest weapon.`);
    }

    story.push(`Love in the mafia is never easy. It’s a dangerous, deadly game. But no matter the cost, you will keep your love, even if it means betraying the world you’ve built.`);

    return story;
}

function updateStory() {
    document.getElementById('story-text').textContent = storyParts[currentPart];

    let img = '';
    if (userChoices.role === 'boss') {
        img = '<img src="mafia-boss.jpg" alt="Mafia Boss" />';
    } else if (userChoices.role === 'underboss') {
        img = '<img src="underboss.jpg" alt="Underboss" />';
    } else if (userChoices.role === 'enforcer') {
        img = '<img src="enforcer.jpg" alt="Enforcer" />';
    } else if (userChoices.role === 'hacker') {
        img = '<img src="hacker.jpg" alt="Hacker" />';
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
function back() {
    window.location.href = 'index3.html';
}

function readStoryAloud() {
    const storyText = storyParts.join(' ');
    const utterance = new SpeechSynthesisUtterance(storyText);
    window.speechSynthesis.speak(utterance);
}
