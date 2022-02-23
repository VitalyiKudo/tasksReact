// Core
import { useEffect, useState } from 'react';
import axios from 'axios';

// Types
type fetchType = {
    data: null | Array<object>
    loading: boolean
    error: null | string
    isServerError: boolean
    isClientError: boolean
}

export const useFetch = (url:string):fetchType => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ isServerError, setIsServerError ] = useState(false);
    const [ isClientError, setIsClientError ] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                if (response.status >= 400 && response.status <= 499) {
                    setIsServerError(true);
                }
                if (response.status >= 500 && response.status <= 599) {
                    setIsClientError(true);
                }
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [ url ]);

    return { data, loading, error, isServerError, isClientError };
};

