let storyParts = [];
let currentPart = 0;
let userChoices = {};

function generateStory() {
    userChoices.detective = document.getElementById('detective').value;
    userChoices.crime = document.getElementById('crime').value;
    userChoices.twist = document.getElementById('twist').value;
    storyParts = createCrimeThrillerStory(userChoices);
    document.querySelector('.container').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';
      updateStory();
}

function createCrimeThrillerStory(choices) {
    let story = [];

    if (choices.detective === 'detective') {
        story.push(`You are a veteran detective, known for your sharp mind and keen instincts. You’ve been called to investigate a case that will test your skills like never before.`);
    } else if (choices.detective === 'cop') {
        story.push(`You’re a rookie cop, eager to prove yourself. Your first major case is a murder, and it’s already spiraling into a complex web of lies.`);
    } else if (choices.detective === 'forensic') {
        story.push(`As a forensic expert, you have the skill to uncover what others can’t. You’re drawn into a high-stakes case involving a series of mysterious murders.`);
    } else if (choices.detective === 'hacker') {
        story.push(`You’re a skilled hacker, recruited by the police to help with a cybercrime investigation. What you uncover in the digital world will change everything.`);
    }

    if (choices.crime === 'murder') {
        story.push(`A gruesome murder has shocked the city. The victim’s identity is unclear, and all evidence seems to point to a dead-end. But you know there’s more lurking beneath the surface.`);
    } else if (choices.crime === 'heist') {
        story.push(`A high-stakes heist has taken place, and millions are on the line. You must uncover the culprits before they vanish into the shadows, leaving no trace behind.`);
    } else if (choices.crime === 'kidnapping') {
        story.push(`A dangerous kidnapping has taken place, and the victim’s life hangs in the balance. The clock is ticking, and you must work quickly to uncover the mastermind behind it.`);
    } else if (choices.crime === 'cybercrime') {
        story.push(`A sophisticated cybercrime has put the city’s most sensitive information at risk. You must track down the digital mastermind behind it before it’s too late.`);
    }

    if (choices.twist === 'betrayal') {
        story.push(`As you dig deeper into the case, you uncover a shocking betrayal within your team. Someone you trust may be playing both sides.`);
    } else if (choices.twist === 'clue') {
        story.push(`A mysterious clue leads you down a hidden path. It points to a conspiracy no one could have predicted, and it could change the course of the entire investigation.`);
    } else if (choices.twist === 'chase') {
        story.push(`You find yourself in a high-speed chase, racing against time and enemies who will stop at nothing to silence you. The stakes have never been higher.`);
    } else if (choices.twist === 'identity') {
        story.push(`Your own identity comes into question as you begin to suspect that the case is far more personal than you ever realized.`);
    }

    story.push(`In the end, it all comes down to a confrontation with the criminal mastermind. Secrets will be exposed, and justice must be served... at any cost.`);

    return story;
}

function updateStory() {
    document.getElementById('story-text').textContent = storyParts[currentPart];

    let img = '';
    if (userChoices.crime === 'murder') {
        img = '<img src="crime-scene.jpg" alt="Murder Scene" />';
    } else if (userChoices.crime === 'heist') {
        img = '<img src="heist.jpg" alt="Heist" />';
    } else if (userChoices.crime === 'kidnapping') {
        img = '<img src="kidnapping.jpg" alt="Kidnapping" />';
    } else if (userChoices.crime === 'cybercrime') {
        img = '<img src="cybercrime.jpg" alt="Cybercrime" />';
    }

    document.getElementById('story-image').innerHTML = img;
}

function nextPart() {
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        updateStory();
    } else {
        document.getElementById('next-btn').style.display = 'none'; // Hide button when story ends
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
