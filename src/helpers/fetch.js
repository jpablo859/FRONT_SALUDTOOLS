const query = (endpoint, data, method = 'GET') => {
    const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

export {
    query
}