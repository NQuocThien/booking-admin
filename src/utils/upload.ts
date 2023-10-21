import axios from 'axios'

export type TypeFile = 'image' | 'video' | 'document'
export enum ETypeFile {
    Image = 'image',
    Video = 'video',
    Document = 'document'
}
const BackendUri = process.env.BACKEND_URI ? process.env.BACKEND_URI : 'http://localhost:4000'
// console.log('backendUri', BackendUri)
export const backendUrlFile = {
    image: `${BackendUri}${'/images'}`,
    video: `${BackendUri}${'/videos'}`,
    document: `${BackendUri}${'/documents'}`
}

const backendUpload = {
    image: `${BackendUri}${'/webbookingImageUpload'}`,
    video: `${BackendUri}${'/webbookingVideoUpload'}`,
    document: `${BackendUri}${'/webbookingDocumentUpload'}`
}

export async function uploadFile(
    typeFile: TypeFile, // TypeFile
    files: any[],
    callback: any
) {
    Promise.all(
        files.map(
            (file) => new Promise((resolve, reject) => {
                const formData = new FormData()
                formData.append('file', file)
                axios
                    .post(backendUpload[typeFile], formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                            // 'access-token': localStorage.getItem('access-token')
                        }
                    })
                    .then((response) => {
                        resolve(response.data?.[0])
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        )
    )
        .then((result) => {
            callback(null, result)
        })
        .catch((error) => {
            callback(error)
        })
}

export function getUrlImage(linkImage: any) {
    const { url = '', fileName = '', type = 'link' } = linkImage || {}
    if (type === 'file') {
        return `${backendUrlFile.image}/${fileName}`
    }
    return url
}
