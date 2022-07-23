const dummyUsers = [
    { id: "1", email: "karen@upgrade.com" },
    { id: "2", email: "karen2@upgrade.com" }
]

export const checkUser = (id, email) => {
    return dummyUsers.find((user) => {
        return user.id === id && user.email === email
    })
}
