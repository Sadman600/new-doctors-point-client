import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://fathomless-wave-72199.herokuapp.com/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(currentUser),
                headers: {
                    'Content-type': 'application/json',
                },
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token];
}

export default useToken;