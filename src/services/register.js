import { env } from "../env/development"

const ENPOINT = env.apiUrl;

export default async function register({ email, password, name, profilePicture }) {

    let form = new FormData();
    let file = await fetch(profilePicture).then(res => res.blob());

    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    form.append("profile-picture", file);

    return fetch(`${ENPOINT}/register`, {
        method: 'POST',
        body: form
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}