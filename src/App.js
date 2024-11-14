import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

import { usePosts } from './components/hooks/usePost';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    async function fetchPosts() {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
    }

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
                posts={sortedAndSearchedPosts}
                title={'Посты про JS'}
            ></PostList>
        </div>
    );
}

export default App;
