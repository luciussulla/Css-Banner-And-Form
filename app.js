const bannerBtn = document.querySelector('.banner-btn')
const banner = document.querySelector('.banner')
const formContainer = document.querySelector('.form-container')
const container = document.querySelector('.container')
const xBtn = document.querySelector('.x-btn')
console.log(xBtn)

bannerBtn.addEventListener('click', ()=> {
  banner.style.display = 'none'
  formContainer.style.cssText = 'opacity:1; visibility:visible;'
  container.style.background = '#cc683c';
})

xBtn.addEventListener('click', ()=> {
  container.style.cssText = 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,.7)),url("images/bg1.jpeg") center no-repeat;background-size:cover;'
  formContainer.style.cssText = 'opacity:0; visibility:hidden;'
  banner.style.display = 'flex'; 
})
