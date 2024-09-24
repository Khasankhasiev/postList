import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './components/PostFilter';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'aaa',
            body: 'bbb',
        },
        {
            id: 2,
            title: 'bbb',
            body: 'ccc',
        },
        {
            id: 3,
            title: 'ccc',
            body: 'aaa',
        },
    ]);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }

        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(filter.query.toLowerCase())
        );
    }, [filter.query, sortedPosts]);

    const createPost = newPost => {
        setPosts([...posts, newPost]);
    };

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm createPost={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList
                removePost={removePost}
                posts={sortedAndSearchPosts}
                title={'Посты про JS'}
            ></PostList>
        </div>
    );
}

export default App;
