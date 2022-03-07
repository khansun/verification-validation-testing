abstract sig Person {
Children: Person,
Siblings: Person
}
sig Man, Woman extends Person {}
sig Married in Person {
spouse: Married
}
