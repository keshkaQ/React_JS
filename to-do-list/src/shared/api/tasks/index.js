const URL = "http://localhost:3001/tasks";

const headers = { "Content-Type": "application/json" };

const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

const tasksAPI = {
  getAll: () => {
    return request(URL);
  },

  getById: (id) => {
    return request(`${URL}/${id}`);
  },

  add: (task) => {
    return request(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(task),
    });
  },

  delete: (id) => {
    return request(`${URL}/${id}`, {
      method: "DELETE",
    });
  },

  deleteAll: (tasks) => {
    return Promise.all(
      tasks.map(({ id }) => {
        return tasksAPI.delete(id);
      }),
    );
  },

  toggleComplete: (id, isDone) => {
    return request(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ isDone }),
    });
  },
};

export default tasksAPI;
