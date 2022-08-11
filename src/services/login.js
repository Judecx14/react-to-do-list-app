import { env } from "../env/development"

const ENPOINT = env.apiUrl;

export default function login({ email, password }) {
    return fetch(`${ENPOINT}login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ email, password })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { token } = res.data
        localStorage.setItem('token', token)
        return token
    })
}