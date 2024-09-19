"use client"
import { signOut } from 'aws-amplify/auth';

export default function LogoutButton() {
    async function handleSignOut() {
        try {
        await signOut();
        window.location.reload()
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
  return (
    <button onClick={handleSignOut} className="text-white hover:text-gray-300">Sign out</button>
  );
}