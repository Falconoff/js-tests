// ========================================
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then(renderUsers)
    .catch(error => {
      console.log(error);
    });
});

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(users => {
//     renderUsers(users);
//     // const markup = users
//     //   .map(user => {
//     //     return `<li>
//     //         <p><b>Name</b>: ${user.name}</p>
//     //         <p><b>Email</b>: ${user.email}</p>
//     //         <p><b>Company</b>: ${user.company.name}</p>
//     //       </li>`;
//     //   })
//     //   .join("");

//     // userList.insertAdjacentHTML("beforeend", markup);
//   })
//   .catch(error => {
//     // Error handling
//     console.log(error);
//   });

function fetchUsers() {
  const searchParams = new URLSearchParams({
    _limit: 7,
    _sort: "name",
  });
  const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;

  return fetch(
    // "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name",
    url,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li>
	          <div>
              <b>Name</b>: ${user.name}
            </div>
	          <div>
              <b>Email</b>: ${user.email}
            </div>
	          <div>
              <b>Company</b>: ${user.company.name}
            </div>
	        </li>`;
    })
    .join("");

  userList.insertAdjacentHTML("beforeend", markup);
}
