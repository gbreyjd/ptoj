document.addEventListener('DOMContentLoaded',(e) =>{
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form-show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form-show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault()
  })
}) 