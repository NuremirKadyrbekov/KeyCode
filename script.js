let insert = document.getElementById('insert');
let img = document.getElementById('imgC')

document.addEventListener('keydown',(event)=>{
    insert.innerHTML = `
       
      <div class="key"><span>${event.key === '' ? 'Space':event.key}</span>
      <small>event.key</small>
      </div>

      <div class="key"><span>${event.keyCode}</span>
      <small>event.key</small>
      </div>
      
    
      <div class="key"><span>${event.code}</span>
      <small>event.key</small>
      </div>
      
    `
})