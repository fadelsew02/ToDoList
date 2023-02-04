let newTask;

function addTask() {
    confirm('Confirmer Ajout de Tâches');

    newTask = document.createElement("div");
    const textTitle = prompt('Entrez un nom à cette tâche');
    const textContain = prompt('Entrez le contenu de votre tâche !!!');
    const textnode = document.createTextNode(textTitle.concat(': ', textContain));
    newTask.appendChild(textnode);
    newTask.className = "task";
    newTask.setAttribute("id", textTitle);
    document.querySelector('.corps').appendChild(newTask);
    var list = document.querySelector('.corps');
    list.addEventListener('click', function(ev) {
        if (ev.target.className === 'task') {
            ev.target.classList.toggle('done');
        }
    }, false);
}

function deleteTask() {

    let corps = document.querySelector('.corps');
    let valeur = prompt('Entrez le titre de la tâche à supprimer !!');
    let v = document.getElementById(valeur);
    v.remove();
}