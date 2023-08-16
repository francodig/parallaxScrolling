header=document.getElementById("header")

fondo=document.getElementById("fondo")
fondo_transparente=document.getElementById("fondo_transparente")
nube1=document.getElementById("nube1")
nube2=document.getElementById("nube2")
persona=document.getElementById("persona")
viento=document.getElementById("viento")
moon=document.getElementById("moon")

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    fondo_transparente.style.marginLeft =  value * 0.6 + 'px';
    nube1.style.left = value* -5  + 'px';
    nube2.style.left = value* -5  + 'px';
    viento.style.left = value* -2  + 'px';
    persona.style.marginLeft = value* 2.5  + 'px';
    moon.style.marginLeft = value* 2.5  + 'px';
})