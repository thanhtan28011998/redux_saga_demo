import { MainApi } from './endpoint'
// import posts from './posts'

export async function fetchPosts(/* payload */) {
    const posts = await MainApi.get('/posts')
    return ({
        success: true,
        result: posts
    })
}
