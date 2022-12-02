const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile__image = document.getElementById('profile__img')
const profileName = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 1500)


function getData() {
    header.innerHTML = '<img src="./james-mckinven-tpuAo8gVs58-unsplash.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam!'
    profile__image.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    profileName.innerHTML = 'John Doe'
    date.innerHTML = 'October 8th 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}