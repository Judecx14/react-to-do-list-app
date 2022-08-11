import { env } from "../env/development"

const ENPOINT = env.apiUrl;

export default async function register({ email, password, passwordConfirmation, name, profilePicture }) {

    /* let form = new FormData();
    let file = await fetch(profilePicture).then(res => res.blob());

    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    form.append("password_confirmation", passwordConfirmation);
    form.append("profile-picture", file); */

    return fetch(`${ENPOINT}register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation, name })
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { token } = res.data
        return token
    })
}