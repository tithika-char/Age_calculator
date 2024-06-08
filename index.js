window.onload = function() {
    // Set the default value of the "Date" input field to the current date
    document.getElementById("date").valueAsDate = new Date();
};

document.getElementById("btn").addEventListener("click", calculateAge);

function calculateAge() {
    var birthday = new Date(document.getElementById("birthday").value);
    var date = new Date(document.getElementById("date").value);

    var age = calculateAgeInYearsMonthsDays(birthday, date);
    document.getElementById("result").textContent = "Age: " + age.years + " years, " + age.months + " months, " + age.days + " days";
}

function calculateAgeInYearsMonthsDays(birthday, date) {
    var age = {};
    var months = date.getMonth() - birthday.getMonth();
    var years = date.getFullYear() - birthday.getFullYear();

    if (months < 0 || (months === 0 && date.getDate() < birthday.getDate())) {
        years--;
        months += 12;
    }

    var days = date.getDate() - birthday.getDate();
    if (days < 0) {
        var prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 0);
        days += prevMonthDate.getDate();
        months--;
    }

    age.years = years;
    age.months = months;
    age.days = days;

    return age;
}
