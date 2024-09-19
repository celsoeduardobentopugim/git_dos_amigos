const usernames = ['
maykon2345 / maykonmacedo2345' 'leemoraes1 / leemoraes1' '
Glawck / Glawck' 'OwayranTorquato / desafio - OwayranTorquato - 2024','celsoeduardobentopugim'];
const cardsContainer = document.getElementById('cards-container');

async function fetchGitHubData() {
    const promises = usernames.map(username =>
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
    );

    const users = await Promise.all(promises);
    displayCards(users);
}

function displayCards(users) {
    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login}">
            <h2>${user.name || user.login}</h2>
            <p>Technologies: ${user.bio || 'N/A'}</p>
            <a href="${user.html_url}" target="_blank">Ver Perfil</a>
        `;
        cardsContainer.appendChild(card);
    });
}

fetchGitHubData();
