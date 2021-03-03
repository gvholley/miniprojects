const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="http://cdn.mos.cms.futurecdn.net/KhPnpYcKr3i2fMkWRKBKch.jpg" alt="" />'
  title.innerHTML = 'Macbook 2020: Buy or Skip?'
  excerpt.innerHTML =
    'Should you buy a Macbook this year, or are the features lacking this time around?'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />'
  name.innerHTML = 'Mr. Content'
  date.innerHTML = 'March 2, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
