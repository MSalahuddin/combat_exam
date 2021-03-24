// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMxMjMzY2IxY2UxODI0NmRiNGUyNzc5ODBkYWE4ZDk5NGRmZTBiMjRhMGVjZmI0MTg5YTE1YWQzYmIwZWU3ZWNmY2U3NGEwNDQzZmQ0ODFiIn0.eyJhdWQiOiIxIiwianRpIjoiYzEyMzNjYjFjZTE4MjQ2ZGI0ZTI3Nzk4MGRhYThkOTk0ZGZlMGIyNGEwZWNmYjQxODlhMTVhZDNiYjBlZTdlY2ZjZTc0YTA0NDNmZDQ4MWIiLCJpYXQiOjE2MDU2MzQ3MTgsIm5iZiI6MTYwNTYzNDcxOCwiZXhwIjoxNjM3MTcwNzE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.j7cJ8e4Jd56hAHxhqbHwoZsZsADONKqxItEDJmfv7F6Ap54PWVBUw7mPRj5wZFpx1iD6TT3y6jevspISwewffo4mD96aHZ5W8i_oYDYlEfUjzKBk8bKniFGnnqLS2QO_PYjJgY86XL0lkbqTEwkBxiz-ezwS7vExGlNRyAZ3UsZq4bWbJc2NCyW5ce-VwRHzUfAi8F9svZDgIiea5ZF0BwQ5q44BrwN68-2I_6zdQdIFU-RkzoI26jdkkqilKrdpJSTsr9-eeKmEuk90jRwDI21QQyhJeTgfe3gzoONiHHdZr9KpONg3Bbgjqr8uesJW6aiSDhcocA3Iy6qO7sZZWtoVtjheidfPZBSzHrLRlriHE1vf3m14sTYx3i4N9LDE4uoYjE7H2fsdZNtR4tnSRQ2KapKOmadKDWubOv2Ld2wF_QdOQ7T2uTPIMPNz18JvROdvjQfxda_VyZTlz_0-bgCmWdyY0a4bmUAMvgd_zIfAj6m36ux9OwBBiafgNn7DN7wyK75A4mchBz2qaQaSvsdD-uuQ5QjSVIFrm4-6uiTF15SiBkFU8jcu9ghNKSxo4nV2odiEOMj-X2sfbRUmzQUPHgOTO-cu9nuCOP-ep9BpXbVxN6LdIwwj_qWCj7uDumF8whCBZ61-uRKfH9DZluxei8pSTWuQP-hEaOib7lw
import "isomorphic-fetch";

import { apiURL } from "../config";

class Api {
  constructor() {
    this.token = localStorage.getItem("access_token") || "";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("access_token", token);
  }
  getToken() {
    return this.token;
  }

  get(path) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "GET",
          // credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });

        const res = await response.json();
        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  post(path, body,) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          // credentials: "include",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.token}` },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        const res = await response.json();

        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  put(path, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          // mode: "cors",
          method: "PUT",
          // credentials: "include",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.token}` },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        const res = await response.json();
        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  putFormData(path, body, files) {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i], files[i].name);
    }
    formData.append("body", JSON.stringify(body));

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          // mode: "cors",
          method: "PUT",
          // credentials: "include",
          headers: { Authorization: `Bearer ${this.token}` },
          body: formData,
        });
        const res = await response.json();
        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  postFormData(path, body, files) {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i], files[i].name);
    }
    formData.append("body", JSON.stringify(body));

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          // mode: "cors",
          method: "POST",
          // credentials: "include",
          headers: {},
          body: formData,
        });
        const res = await response.json();
        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  remove(path) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          // mode: "cors",
          // credentials: "include",
          method: "DELETE",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.token}` },
        });
        const res = await response.json();
        if (response.status !== 200) {
          return reject(res);
        }
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }
}

const api = new Api();
export default api;
