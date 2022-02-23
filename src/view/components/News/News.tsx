import React, { FC }  from 'react';
import { Article } from './Article/Article';
import newsList from './newsData.json';
import { NewsWrapper } from './styles';

export const News: FC = () => {
    return (
        <NewsWrapper>
            <section className = 'news'>
                {newsList.map((news, index) => (
                    <Article
                        key = { index }
                        { ...news }
                    />
                ))}
            </section>
        </NewsWrapper>
    );
};
