const reviews = [
    {
        id: 1,
        author: "jake nackos",
        job: "web designer",
        img: "./assets/images/jake-nackos.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacinia metus non molestie. Fusce ornare condimentum ligula vitae auctor.",
    },
    {
        id: 2,
        author: "jessica radanavong",
        job: "web developer",
        img: "./assets/images/jessica-radanavong.jpg",
        info: "Maecenas vel mauris semper, posuere quam a, porta enim. Pellentesque vehicula magna et nibh commodo, blandit facilisis augue gravida. Praesent maximus elit nec rutrum posuere. Ut ornare vel orci ac semper. In iaculis a massa id euismod. Aliquam malesuada, lacus vel dignissim venenatis, neque elit rutrum diam, ut maximus diam quam id est.",  
    },
    {
        id: 3,
        author: "matheus ferrero",
        job: "js developer",
        img: "./assets/images/matheus-ferrero.jpg",
        info: "Nam consectetur accumsan felis at tempus. Nam tellus nunc, semper in elit at, vestibulum tincidunt nibh. Vestibulum pulvinar lectus nec massa ultricies lacinia. Fusce commodo tortor in vehicula viverra. Mauris lobortis turpis diam, a mollis nulla semper convallis.",
    },
    {
        id: 4,
        author: "ann agterberg",
        job: "Front-End developer",
        img: "./assets/images/ann-agterberg.jpg",
        info: "Pellentesque at ligula finibus odio maximus vulputate. Duis in malesuada nibh. Nunc non lorem eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sodales lobortis nulla a lobortis.",
    }
]

const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job = document.getElementById("job");
const description = document.getElementById("description");

const prv_btn = document.querySelector('.prev-button');
const nxt_btn = document.querySelector('.nxt-button');
const rdm_btn = document.querySelector('.random-button');

let currentPers = 0;

function personChange(){
    const item = reviews[currentPers];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    description.textContent = item.info;
}

window.addEventListener('DOMContentLoaded', ()=>{
    currentPers = 0;
    personChange();
})

prv_btn.addEventListener('click', ()=>{
    if(currentPers <= 0){
        currentPers = 0;
    } else {
        currentPers--;
    }

    personChange();
})

nxt_btn.addEventListener('click', ()=>{
    if(currentPers >= reviews.length-1){
        currentPers = 0;
    } else {
        currentPers++;
    }

    personChange();
})

rdm_btn.addEventListener('click', ()=>{
    randomNr();
    personChange();
})

function randomNr(){
    currentPers= Math.floor(Math.random()*(reviews.length));
}


