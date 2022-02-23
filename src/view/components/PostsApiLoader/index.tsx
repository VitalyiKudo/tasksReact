import React from 'react';
import { useFetch } from '../../../tools/hooks/useFetch';

export const PostsApiLoader = () => {
    const { data, loading, error, isClientError, isServerError } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    if (isClientError) {
        return <div>'Trouble with client :('</div>;
    }

    if (isServerError) {
        return <div>'Trouble with server :('</div>;
    }

    return (
        <section>
            {data && !isClientError && !isServerError ? data.map((post:any, index:number) => {
                return (
                    <div
                        className = 'post'
                        key = { index }>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                );
            }) : null}
        </section>
    );
};

