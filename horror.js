let storyParts = [];
let currentPart = 0;
let userChoices = {};

function generateStory() {
    userChoices.location = document.getElementById('location').value;
    userChoices.creature = document.getElementById('creature').value;
    userChoices.escape = document.getElementById('escape').value;

    storyParts = createHorrorStory(userChoices);

    document.querySelector('.container').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';

    updateStory();
}

function createHorrorStory(choices) {
    let story = [];

    story.push(`You are standing at the edge of a dark, twisted path in the woods, with the wind howling through the trees. The night is cold, and the air smells like decay. You chose to venture into the ${choices.location}, a place rumored to be haunted by evil spirits.`);

    if (choices.creature === 'ghost') {
        story.push('Suddenly, a ghostly figure materializes in front of you. Its hollow eyes stare deep into your soul as it floats toward you, whispering your name in a chilling voice.');
    } else if (choices.creature === 'vampire') {
        story.push('From the shadows, a vampire steps forward, his fangs gleaming under the moonlight. His eyes glow red with hunger as he bares his teeth at you.');
    } else if (choices.creature === 'werewolf') {
        story.push('A growl echoes through the night, and from the darkness, a monstrous werewolf leaps out, its eyes glowing like fiery embers as it snarls at you.');
    } else if (choices.creature === 'zombie') {
        story.push('The earth trembles as a zombie drags itself from the ground, its decomposing flesh hanging from its bones. Its eyes are vacant, and it stumbles toward you, arms outstretched.');
    }

    if (choices.escape === 'run') {
        story.push('You sprint through the dark woods, your breath ragged as the creature gives chase, its terrifying growls echoing behind you.');
    } else if (choices.escape === 'fight') {
        story.push('You find an old rusty sword on the ground and raise it to fight back. The creature charges, but you are ready. The battle is fierce and merciless.');
    } else if (choices.escape === 'hide') {
        story.push('You scramble to find a hiding spot behind a tree. The creature circles around you, sniffing the air, but it doesn’t see you. For now, you are safe.');
    } else if (choices.escape === 'confront') {
        story.push('With courage, you step forward to confront the beast. "Come at me!" you shout, gripping a broken branch as your weapon. The creature snarls, its claws sharpening for the battle to come.');
    }

    story.push('You face the creature head-on, with fear in your heart, knowing there is no turning back. But what happens next? Only the darkness knows.');

    return story;
}

function updateStory() {
    document.getElementById('story-text').textContent = storyParts[currentPart];

    let img = '';
    if (userChoices.creature === 'ghost') {
        img = '<img src="ghost-image.jpg" alt="Ghost" />';
    } else if (userChoices.creature === 'vampire') {
        img = '<img src="vampire-image.jpg" alt="Vampire" />';
    } else if (userChoices.creature === 'werewolf') {
        img = '<img src="werewolf-image.jpg" alt="Werewolf" />';
    } else if (userChoices.creature === 'zombie') {
        img = '<img src="zombie-image.jpg" alt="Zombie" />';
    }

    document.getElementById('story-image').innerHTML = img;
}
function nextPart() {
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        updateStory();
        document.getElementById('back-btn').style.display= 'hide';
        
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
