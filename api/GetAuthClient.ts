import { getCurrentUser } from 'aws-amplify/auth';

export default async function GetAuthClient() {
  try {
    const currentUser = await getCurrentUser();
    return currentUser
  } catch (err) {
    return {
        redirect: {
          destination: "/login",
          permanent: false, // Temporary Redirect
        },
      };
  }
}