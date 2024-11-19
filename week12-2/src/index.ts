// interface User {
//     name: String;
//     age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: 'Prabal', age: 23}, {name: 'stark', age: 22});
// console.log(age)

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

function updateUser(updateProps: UpdateProps){
    console.log(updateProps.name)
}

updateUser({name: 'Prabal', age: 12, password: 'thisosjoj'})


type UpdatePropsPartial = Partial<UpdateProps>

function updateUserPartial(updateProps: UpdatePropsPartial){
    console.log(updateProps.name)
}

updateUserPartial({name: 'Stark'})
