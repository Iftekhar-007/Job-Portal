export const MyAddedJobsApi = (email) => {
  fetch(`http://localhost:3000/jobs?email=${email}`).then((res) => res.json());
};
