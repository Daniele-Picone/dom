let changeColor = document.querySelector( '#changeColor' );
let strongWrite = document.querySelector('#strongWrite');
let showDown = document.querySelector('#showDown');
let p = document.querySelectorAll('p')




changeColor.addEventListener( 'click', ()=>{
   p.forEach( (p) =>{
   function randomColor () {
       let r = Math.floor( Math.random() * 256 ) ;
       let g = Math.floor( Math.random() * 256);
       let b = Math.floor(  Math.random () * 256) ;
   
       return `rgb(${r}, ${ g}, ${b})  `;   
    }
    p.style.color = randomColor();
   }  ); 
    }  );

  strongWrite.addEventListener('click', () =>{
     p.forEach( (p) => {
      
        
        p.classList.toggle('grassetto')
   })

  })


showDown.addEventListener(  'click' , ()=> {

   p.forEach((p) =>{
      p.classList.toggle('nascosto')
   }  )

}     )
     
