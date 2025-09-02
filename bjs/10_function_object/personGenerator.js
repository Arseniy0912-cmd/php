const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 16,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Арсений",
            "id_12": "Анатолий",
            "id_13": "Валерий",
            "id_14": "Виталий",
            "id_15": "Владимир",
            "id_16": "Алексей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Светлана",
            "id_4": "Арина",
            "id_5": "Валентина",
            "id_6": "Надежда",
            "id_7": "Руслана",
            "id_8": "София",
            "id_9": "Анастасия",
            "id_10": "Виктория",
            "id_11": "Елизовета",
            "id_12": "Полина",
            "id_13": "Евгения",
            "id_14": "Александра",
            "id_15": "Оксана",
            "id_16": "Ксения"
        }
    }`,

    firstPatronymicMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Андреевич",
            "id_2": "Александрович",
            "id_3": "Максимович",
            "id_4": "Иванович",
            "id_5": "Артёмович",
            "id_6": "Дмитриевич",
            "id_7": "Никитич",
            "id_8": "Михайлович",
            "id_9": "Даниилович",
            "id_10": "Егорович",
            "id_11": "Арсеньевич",
            "id_12": "Анатольевич",
            "id_13": "Валерьевич",
            "id_14": "Витальевич",
            "id_15": "Владимирович",
            "id_16": "Алексеевич"
        }
    }`,

    firstPatronymicFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Андреевна",
            "id_2": "Александровна",
            "id_3": "Максимовна",
            "id_4": "Ивановна",
            "id_5": "Артёмовна",
            "id_6": "Дмитриевна",
            "id_7": "Никитична",
            "id_8": "Михайловна",
            "id_9": "Данииловна",
            "id_10": "Егоровна",
            "id_11": "Арсеньевна",
            "id_12": "Анатольевна",
            "id_13": "Валерьевна",
            "id_14": "Витальевна",
            "id_15": "Владимировна",
            "id_16": "Алексеевна"
        }
    }`,

    firstJobsMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтёр",
            "id_4": "Предпрениматель",
            "id_5": "Врач",
            "id_6": "Полицейский",
            "id_7": "Пожарный",
            "id_8": "Программист",
            "id_9": "Дипломат",
            "id_10": "Президент",
            "id_11": "Автомеханик",
            "id_12": "Строитель",
            "id_13": "Дизайнер",
            "id_14": "Архитектор",
            "id_15": "Спортсмен",
            "id_16": "Космонавт"
        }
    }`,

    firstJobsFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Предпрениматель",
            "id_2": "Врач",
            "id_3": "Полицейский",
            "id_4": "Программист",
            "id_5": "Дипломат",
            "id_6": "Президент",
            "id_7": "Дизайнер",
            "id_8": "Архитектор",
            "id_9": "Спортсмен",
            "id_10": "Космонавт",
            "id_11": "Швея",
            "id_12": "Актёр",
            "id_13": "Повар",
            "id_14": "Официант",
            "id_15": "Аналитик",
            "id_16": "Менеджер"
        }
    }`,

    firstMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        id = this.randomIntNumber(obj.count, 1); // this = personGenerator
        const prop = `id_${id}`;  
        if (json==this.firstNameMaleJson) {
            f=0
        }
        else {
            if (json==this.firstNameFemaleJson) {
                f=1
            }
        }
        return obj.list[prop];
    },

    randomFirstName: function(max = 1, min = 0) {
        let p = Math.floor(Math.random() * (max - min + 1)) + min
        if (p == 0) {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function() {
        if (f==0){
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    randomAge: function(max = 1, min = 0) {
        let p = Math.floor(Math.random() * (max - min + 1)) + min
        if (p == 0) {
            god = 1991 + id;
            return `${this.randomDate()} ${god}`;
        }
        else {
            god = 1991 - id;
            return `${this.randomDate()} ${god}`;
        }
    },

    randomPatronymic: function() {
        if (f==0){
            return this.randomValue(this.firstPatronymicMaleJson);
        }
        else {
            return this.randomValue(this.firstPatronymicFemaleJson);
        }
    },

    randomJobs: function() {
        if (f==0){
            return this.randomValue(this.firstJobsMaleJson);
        }
        else {
            return this.randomValue(this.firstJobsFemaleJson);
        }
    },

    randomDate: function(max = 31, min = 1) {
        a = this.randomValue(this.firstMonthJson);
        if (id == 1 || id == 3 || id == 5 || id == 7 || id == 8 || id == 10 || id  == 12) {
            b = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            if (id == 2) {
                max = 28;
                b = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            else {
                max = 30;
                b = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
        return `${b} ${a}`
    },

            
    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.firstSurname = this.randomSurname();
        if (f==0) {
            this.person.firstGender = this.GENDER_MALE
        }
        else {
            this.person.firstGender = this.GENDER_FEMALE
        }
        this.person.firstAge = this.randomAge();
        this.person.firstPatronymic = this.randomPatronymic();
        this.person.firstJobs = this.randomJobs();
        return this.person;
    }
};