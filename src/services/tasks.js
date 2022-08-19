import { env } from "../env/development"


const ENPOINT = env.apiUrl;

export async function createTask({ body, category, token }) {
    return fetch(`${ENPOINT}todos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ body, category })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        console.log(res);
    })
}

export async function getTasks({ token }) {
    return fetch(`${ENPOINT}todos`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${token}`
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { data } = res
        return data
    })
}

export async function deleteTask({ id, token }) {
    return fetch(`${ENPOINT}todos/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { status } = res
        return status
    })
}

export async function updateTask({ title, description, category }) {
    return fetch(`${ENPOINT}todos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ title, description, category })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}
