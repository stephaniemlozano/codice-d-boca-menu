const menuElement = document.querySelector('#menu')

fetch('https://codice-boca.web.app/menu')
  .then(response => response.json())
  .then(menuItems => {
    let html = ''
    menuItems.forEach(recipe => {
      let htmlSegment = `<div class="menu-item">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
        </div>`

      html += htmlSegment
    })
    menuElement.innerHTML = html
  })

  .catch(error => console.error(error))