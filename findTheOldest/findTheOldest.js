let findTheOldest = function(people) {
    //people is an array of objects
    let oldest = people[0];
    let oldAge = 0;
    people.forEach((person) => {
        if (!person.yearOfDeath) {
            d = new Date();
            person.yearOfDeath = d.getFullYear();
        }

        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldAge) {
            oldest = person;
            oldAge = age;
        }
    });
    return oldest;
}

module.exports = findTheOldest
