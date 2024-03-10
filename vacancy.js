document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let idVacancy;
    if(localStorage.getItem('idVacancy')!==null){
        idVacancy = +localStorage.getItem('idVacancy');
        idVacancy++;
        localStorage.setItem('idVacancy', idVacancy);
    }
    else {
        idVacancy=0;
        localStorage.setItem('idVacancy', idVacancy);
    }
    let idVacancyArray = new Array();
    if(localStorage.getItem('idVacancyArray')!==null){
        idVacancyArray = JSON.parse(localStorage.getItem('idVacancyArray'));
        idVacancyArray.push(idVacancy);
        localStorage.setItem('idVacancyArray', JSON.stringify(idVacancyArray));
    }
    else {
        idVacancyArray.push(idVacancy);
        localStorage.setItem('idVacancyArray', JSON.stringify(idVacancyArray));
    }

    let formData = new FormData(this);
    let nameVacancy = formData.get("nameVacancy");
    let quantity = formData.get("quantity");
    let from0 = formData.get("from0");
    let from1 = formData.get("from1");
    let from2 = formData.get("from2");
    let from3 = formData.get("from3");
    let from4 = formData.get("from4");
    let to0 = formData.get("to0");
    let to1 = formData.get("to1");
    let to2 = formData.get("to2");
    let to3 = formData.get("to3");
    let to4 = formData.get("to4");
    let prior0 = formData.get("prior0");
    let prior1 = formData.get("prior1");
    let prior2 = formData.get("prior2");
    let prior3 = formData.get("prior3");
    let prior4 = formData.get("prior4");
    let priorArray = [prior0,prior1,prior2,prior3,prior4];
    let par0 = [from0, to0];
    let par1 = [from1, to1];
    let par2 = [from2, to2];
    let par3 = [from3, to3];
    let par4 = [from4, to4];
    let vacancyObj= {
        'nameVacancy': nameVacancy,
        'quantity':quantity,
        'priorArray': priorArray,
        'ODZvacancy': {
            'par0': par0,
            'par1': par1,
            'par2': par2,
            'par3': par3,
            'par4': par4,
        }

    }
    localStorage.setItem(`vacancy${idVacancy}`, JSON.stringify(vacancyObj));
    this.reset();
});

function printList() {
    let list = document.querySelector('.list');
    if(localStorage.getItem('idVacancyArray')!==null) {
        let idVacancyArray = JSON.parse(localStorage.getItem('idVacancyArray'));

        idVacancyArray.forEach((id) => {
            let v = JSON.parse(localStorage.getItem(`vacancy${id}`));
            list.innerHTML += `
        <div>
        Название: "${v['nameVacancy']}" Мест: ${v['quantity']}  ОДЗ: (${v['ODZvacancy']['par0']}) (${v['ODZvacancy']['par1']}) (${v['ODZvacancy']['par2']}) (${v['ODZvacancy']['par3']}) (${v['ODZvacancy']['par4']}) Приоритет: ${v['priorArray']}
        </div>
    `;
        });
    }
}
printList();