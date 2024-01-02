const cursor = document.querySelector('.cursor')
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px"
  cursor.style.top = e.pageY + "px"

})




const item = document.querySelectorAll('li');
item.forEach((nav) => {
  nav.addEventListener('mousemove', (e) => {
    const position = nav.getBoundingClientRect();
    console.log(position);
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    console.log(x, y);
    nav.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)"

  })
})

item.forEach((nav) => {
  nav.addEventListener('mouseout', (e) => {
    nav.style.transform = "translate(0px, 0px)"

  })
})