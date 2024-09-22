import React, { useState } from 'react';

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ createPost }) => {
    const [post, setPost] = useState({ title: '', body: '' });
    // const bodyInputRef = useRef();

    const addNewPost = e => {
        e.preventDefault();

        const newPost = { ...post, id: Date.now() };
        createPost(newPost);
        setPost({ title: '', body: '' });
    };

    return (
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
    );
};

export default PostForm;
