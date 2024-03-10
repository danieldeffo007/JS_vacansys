let body = document.querySelector("body");

if(localStorage.getItem('idVacancyArray')!=null){
    let idVacancyArray = JSON.parse(localStorage.getItem('idVacancyArray'));
    idVacancyArray.forEach((idV) => {
        let v = JSON.parse(localStorage.getItem(`vacancy${idV}`));
        let arrayList = JSON.parse(localStorage.getItem(`listCategory${idV}`));
        for (let i =0; i< v['quantity']; i++){

        }


        body.innerHTML+=`<h4>${v['nameVacancy']}</h4>`;
        for (let i =0; i< arrayList.length; i++) {
            if(+v['ODZvacancy']['par0'][0] <= +arrayList[i]['age'] && +v['ODZvacancy']['par0'][1] >= +arrayList[i]['age'] && +v['ODZvacancy']['par1'][0] <= +arrayList[i]['kval'] && +v['ODZvacancy']['par1'][1] >= +arrayList[i]['kval'] &&  +v['ODZvacancy']['par2'][0] <= +arrayList[i]['workExperience'] && +v['ODZvacancy']['par2'][1] >= +arrayList[i]['workExperience'] && +v['ODZvacancy']['par3'][0] <= +arrayList[i]['salary'] && +v['ODZvacancy']['par3'][1] >= +arrayList[i]['salary'] &&  +v['ODZvacancy']['par4'][0] <= +arrayList[i]['education'] && +v['ODZvacancy']['par4'][1] >= +arrayList[i]['education'] ) {
                if (arrayList[i]['kval'] == '1') kvalif = 'Низкая'; else if (arrayList[i]['kval'] == '1') kvalif = 'Средняя'; else kvalif = 'Высокая';
                if (arrayList[i]['education'] == '1') educ = 'Среднее'; else if (arrayList[i]['education'] == '1') educ = 'Бакалавриат'; else educ = 'Специалитет';

                body.innerHTML += `
                    <div>
                        Должность: ${arrayList[i]['vacancy']},  ФИО: ${arrayList[i]['fio']}, Возраст: ${arrayList[i]['age']}, Квалификация: ${kvalif}, Опыт работы: ${arrayList[i]['workExperience']}, З/П: ${arrayList[i]['salary']}, Образование: ${educ}  }
                    </div>
            `;
            }
            else {
                delete arrayList[i];
            }
        }



    });

}