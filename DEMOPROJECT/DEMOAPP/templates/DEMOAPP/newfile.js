const person = {
    firstName: 'Povilas',
    lastName: 'Povilaitis',
    grades: [4,6,7],
    job: {
        position: 'Soft dev',
        mainLangueage: 'Python'
    },
    describeJob: function (){
        console.log(`${this.firstName} has job ${this.job.position} and main language is ${this.job.mainLangueage}`)
    },
    welcome: () => console.log('hi' + this.firstName)
};

console.log(person['lastName'])