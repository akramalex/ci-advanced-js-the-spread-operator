let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

// i take first object john and its subject
let subjects = [...students[0].subjects];

// item is the item which mean math and val is the value give it to it //
const update = (item, val) => [...item, val];

                             // item,    val//
let updatedSubjects = update(subjects, "Electronics");
console.log(subjects);
console.log(updatedSubjects);
console.log(students[0]);