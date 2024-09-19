import { fetchUserAttributes } from 'aws-amplify/auth';

export default async function GetAuth() {
  try {
    const userAttributes = await fetchUserAttributes();
    console.log(userAttributes);
  } catch (error) {
    console.log(error);
  }
}