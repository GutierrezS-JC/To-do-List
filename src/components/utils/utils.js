export const findByUsernameAndPassword = (users, username, password) => {
    const searchedUser = users.find(user => user.username === username && user.password === password);
    return searchedUser || null;
  }