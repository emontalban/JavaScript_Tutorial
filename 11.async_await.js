// async / await
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();


//async /await varios
const loginTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccountTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivitiesTwo(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(loginTwo(), updateAccountTwo());


async function queryApi() {
    const repoPromise = fetch('https://api.github.com/users/emontalban/repos');
    const repos = await repoPromise.then(res => res.json());
    const names = repos.map(repo => repo.name); // crea un array con todos lo nombres
      console.log(names); 
    repos.forEach(repo => {
      console.log(repo.name);
      });// devuelve todos los nombres de manera individual
   // console.log(repos);
}

queryApi();