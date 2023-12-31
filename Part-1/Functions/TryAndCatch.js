// 1. Try and Catch
const person = {
  firstName: 'John',
  lastName: 'Doe',

  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');

    if (parts.length !== 2) throw new Error('Enter a first and last name.');

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = '';
} catch (e) {
  alert(e);
}

// person.fullName = 'Jane Smith';

console.log(person);
