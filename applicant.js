document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let idAppplicant;
    if(localStorage.getItem('idAppplicant')!==null){
        idAppplicant = +localStorage.getItem('idAppplicant');
        idAppplicant++;
        localStorage.setItem('idAppplicant', idAppplicant);
    }
    else {
        idAppplicant=0;
        localStorage.setItem('idAppplicant', idAppplicant);
    }
    let idAppplicantArray = new Array();
    if(localStorage.getItem('idAppplicantArray')!==null){
        idAppplicantArray = JSON.parse(localStorage.getItem('idAppplicantArray'));
        idAppplicantArray.push(idAppplicant);
        localStorage.setItem('idAppplicantArray', JSON.stringify(idAppplicantArray));
    }
    else {
        idAppplicantArray.push(idAppplicant);
        localStorage.setItem('idAppplicantArray', JSON.stringify(idAppplicantArray));
    }

    let formData = new FormData(this);
    let idVacancy = formData.get("idVacancy");
    let vacancy = JSON.parse(localStorage.getItem(`vacancy${idVacancy}`))['nameVacancy'];
    let fio = formData.get("fio");
    let age = formData.get("age");
    let kval = formData.get("kval");
    let workExperience = formData.get("workExperience");
    let salary = formData.get("salary");
    let education = formData.get("education");
    let appplicantObj = {
        'vacancy': vacancy,
        'fio':fio,
        'age': age,
        'kval': kval,
        'workExperience': workExperience,
        'salary': salary,
        'education': education
    }
    localStorage.setItem(`appplicant${idAppplicant}`, JSON.stringify(appplicantObj));
    this.reset();
});

let member = document.querySelector('.idVacancy');
idVacancyArray = JSON.parse(localStorage.getItem('idVacancyArray'));
idVacancyArray.forEach((id) => {
    let v = JSON.parse(localStorage.getItem(`vacancy${id}`));
    let name = v['nameVacancy'];
    member.innerHTML+= `
    <option value="${id}">${name}</option>
    `;
});


// function printList() {
//     let list = document.querySelector('.list');
//     if(localStorage.getItem('idAppplicantArray')!=null) {
//         let arrayList = new Array();
//         let idAppplicantArray = JSON.parse(localStorage.getItem('idAppplicantArray'));
//         idAppplicantArray.forEach((id) => {
//             let a = JSON.parse(localStorage.getItem(`appplicant${id}`));
//             arrayList.push(a);
//             let kvalif;
//             let educ;
//             console.log(a['kval']);
//             if (a['kval'] == '1') kvalif = 'Низкая'; else if (a['kval'] == '1') kvalif = 'Средняя'; else kvalif = 'Высокая';
//             if (a['education'] == '1') educ = 'Среднее'; else if (a['education'] == '1') educ = 'Бакалавриат'; else educ = 'Специалитет';
//             list.innerHTML += `
//         <div>
//         Должность: ${a['vacancy']},  ФИО: ${a['fio']}, Возраст: ${a['age']}, Квалификация: ${kvalif}, Опыт работы: ${a['workExperience']}, З/П: ${a['salary']}, Образование: ${educ}  }
//         </div>
//     `;
//         });
//         console.log(arrayList);
//     }
// }
function printList() {
    if(localStorage.getItem('idAppplicantArray')!=null){
        let list = document.querySelector('.list');
        let idAppplicantArray = JSON.parse(localStorage.getItem('idAppplicantArray'));
        let idVacancyArray = JSON.parse(localStorage.getItem('idVacancyArray'));
        idVacancyArray.forEach((idV) => {
            let arrayList = new Array();
            let v = JSON.parse(localStorage.getItem(`vacancy${idV}`));
            idAppplicantArray.forEach((idA) => {
                let a = JSON.parse(localStorage.getItem(`appplicant${idA}`));
                if(v['nameVacancy']===a['vacancy'])
                    arrayList.push(a);
            });
            localStorage.setItem(`listCategory${idV}`, JSON.stringify(arrayList));
            list.innerHTML+=`<h4>${v['nameVacancy']}</h4>`;
            arrayList.forEach((row)=> {
                if (row['kval'] == '1') kvalif = 'Низкая'; else if (row['kval'] == '1') kvalif = 'Средняя'; else kvalif = 'Высокая';
                if (row['education'] == '1') educ = 'Среднее'; else if (row['education'] == '1') educ = 'Бакалавриат'; else educ = 'Специалитет';

                list.innerHTML += `
                    <div>
                        Должность: ${row['vacancy']},  ФИО: ${row['fio']}, Возраст: ${row['age']}, Квалификация: ${kvalif}, Опыт работы: ${row['workExperience']}, З/П: ${row['salary']}, Образование: ${educ}  }
                    </div>
            `;
            });
        });
    }
}
printList();

