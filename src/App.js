import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

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
    const [modal, setModal] = useState(false);

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
        setModal(false);
    };

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <hr style={{ marginTop: 20, marginBottom: 20 }} />
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
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
