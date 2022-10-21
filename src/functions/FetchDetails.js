import React, { useState, useEffect } from 'react';

const FetchDetails = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setData(data);
            })
            .catch(e => {
                setIsLoading(false);
                setError(e.message);
            })
    }, [url])

    return { data, error, isLoading };
}

export default FetchDetails