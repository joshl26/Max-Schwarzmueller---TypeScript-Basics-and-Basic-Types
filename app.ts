// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Josh",
//   age: 30,
// };

const person = {
  name: "Josh",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
