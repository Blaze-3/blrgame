async function renderList(container) {
    const list = document.createElement('ol');
    const data = await (await fetch('./data/places.json')).json()
    data.forEach(place => {
        const listItem = document.createElement('li');
        listItem.innerText = place.name;
        list.append(listItem);
    })
    container.appendChild(list);
}

const container = document.querySelector('main');
renderList(container);