import moment from 'moment';
import React, { FC } from 'react';
import { CommentsCounter } from './CommentsCounter/commentsCounter';
import { LikeCounter } from './LikesCounter/LikeCounter';
import { Tag } from './Tag/Tag';


type PropTypes = {
    title: string
    description: string
    image: string
    tags: Array<string>
    likes: number
    comments: number
    published: string
};

export const Article: FC<PropTypes> = ({ title, description, image, tags, likes, comments, published }:PropTypes) => {
    const postDate = moment(published).format('L');
    const dateNow = moment().format('L');

    return (
        <section className = 'article'>
            <header>
                <div className = 'poster'>
                    <img
                        alt = 'ig'
                        src = { image }
                    />
                </div>
                <Tag tags = { tags } />
            </header>
            <article>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <footer>
                <span>{postDate ? postDate : dateNow}</span>
                <div className = 'controls'>
                    <CommentsCounter  defaultValue = { comments } />
                    <LikeCounter  defaultValue = { likes } />
                </div>
            </footer>
        </section>
    );
};

