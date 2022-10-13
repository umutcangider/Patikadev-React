import axios from "axios";

const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        resolve(user);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        resolve(post);
    });
};

async function getData(user_id, post_id) {
    Promise.all([getUser(user_id), getPost(post_id)])
        .then(console.log)
        .catch(console.log);
}

export default getData;