//temprary data

const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Joana' }
]

const posts = [
    { id: 1, title: 'Post 1', body: 'ALOWALOWALOWALOW', userId: 1 },
    { id: 2, title: 'Post 2', body: 'ALOWALOWALOWALOW', userId: 1 },
    { id: 3, title: 'Post 3', body: 'ALOWALOWALOWALOW', userId: 2 },
    { id: 4, title: 'Post 4', body: 'ALOWALOWALOWALOW', userId: 2 },
]
export const getPosts = async () => {
    return posts;
}

export const getPost = async (id: string) => {
    return posts.find((post) => post.id === parseInt(id))
}

export const getUser = async (id: string) => {
    return users.find((user) => user.id === parseInt(id))
}