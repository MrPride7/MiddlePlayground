


async function promiseAll() {
    let urlsPromise = await fetch('https://swapi.dev/api/');

    let urlsObj = await urlsPromise.json();

    return Promise.all(Object.values(urlsObj));
}

promiseAll().then(console.log)