import axios from 'axios'

const baseUrl = 'http://localhost:3009/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const createNew = async content => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}
const voteNote = async note => {
    const votedNote = { ...note, votes: note.votes + 1 }
    const respone = await axios.put(`${baseUrl}/${votedNote.id}`, votedNote)
    return respone.data
}
export default { getAll, createNew, voteNote }