let button = document.getElementById('button');
let compteur = document.getElementById('compteur');
button.onclick = addone;
let i = 0;
compteur.innerHTML = i;
function addone()
{
  i++;
  compteur.innerHTML = i;
}