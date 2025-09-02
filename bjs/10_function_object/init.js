window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.firstSurname;
    document.getElementById('genderOutput').innerText = initPerson.firstGender;
    document.getElementById('birthYearOutput').innerText = initPerson.firstAge;
    document.getElementById('Patronymic').innerText = initPerson.firstPatronymic;
    document.getElementById('Jobs').innerText = initPerson.firstJobs;
};