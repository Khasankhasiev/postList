import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },
        {
            id: 2,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },
        {
            id: 3,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },
    ]);
    const [post, setPost] = useState({ title: '', body: '' });
    // const bodyInputRef = useRef();

    const addNewPost = e => {
        e.preventDefault();

        setPosts([...posts, { ...post, id: Date.now() }]);
        setPost({ title: '', body: '' });
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название поста"
                />
                {/* Неуправляемый */}
                {/* <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание поста"
                /> */}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JS'}></PostList>
        </div>
    );
}

export default App;
