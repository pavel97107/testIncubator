

const btn = document.querySelector('button');
const page = document.getElementById('page');

btn.addEventListener('click', () => {
    getImages(page)
        .then(dataReceiv)
})


const dataReceiv = (array) => {
        array.forEach((element) => {
            const img = document.createElement('img');
            img.src = element.original;
            document.querySelector('body').appendChild(img);
        })
};