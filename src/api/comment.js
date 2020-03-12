import { MainApi } from './endpoint'
// import comments from './comments'

export async function fetchComments(/* payload */) {
    const comments = await MainApi.get('/comments')
    return ({
        success: true,
        result: comments
    })
}