import { uploadData } from 'aws-amplify/storage';

export default async function UploadS3(filename: string, file: File) {
    try {
        const result = await uploadData({
            key: filename,
            data: file,
            options: {
                accessLevel: 'private'
            }
        }).result;
        console.log('Succeeded: ', result);
    } catch (error) {
        console.log('Error : ', error);
    }
}