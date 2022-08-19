import { env } from "../env/development"

const ENPOINT = env.apiUrl;

export default async function data(jwt) {
    return fetch(`${ENPOINT}auth/user`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { data } = res
        return data
    })
}