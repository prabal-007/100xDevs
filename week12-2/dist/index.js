"use strict";
// interface User {
//     name: String;
//     age: number;
// }
function updateUser(updateProps) {
    console.log(updateProps.name);
}
updateUser({ name: 'Prabal', age: 12, password: 'thisosjoj' });
function updateUserPartial(updateProps) {
    console.log(updateProps.name);
}
updateUserPartial({ name: 'Stark' });
