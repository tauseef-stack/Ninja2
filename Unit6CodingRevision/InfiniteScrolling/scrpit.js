var pageCount = 1;
var postCount = 1;
const getData = async () => {
    const limit = 5;
    
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}$page=${pageCount}`)

    const data = await res.json();

    console.log(data);
    const Container = document.querySelector('.innerContainer')
    data.map((item, i) => {
     
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerHTML = postCount++;
        const h3 = document.createElement('h3');
        h3.innerHTML = item.title;
        const p = document.createElement('p');
        p.innerHTML = item.body;
        div.append(h1, h3, p)
        div.className = 'individualDiv'
        Container.append(div);
    })
}

getData();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getData();
    },300)
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("hit")
         showData()
     }
})