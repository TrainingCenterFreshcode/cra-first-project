export const getUsers = (count = 100, page = 1) => {
    const url = `https://randomuser.me/api/?&results=${count}&seed=ONL-JS-PFE2023-2&page=${page}`;
    console.log(url);
    return fetch(url)
    .then((response) => response.json());
}