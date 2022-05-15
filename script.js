async function renderList(container) {
    const list = document.createElement('div');
    list.classList.add('all-places')
    const data = await (await fetch('./data/places.json')).json()
    data.forEach(place => {
        const listItem = document.createElement('div');
        listItem.classList.add('place');
        listItem.innerText = place.name;
        list.append(listItem);
    })
    container.appendChild(list);
}

const container = document.querySelector('main');
renderList(container);