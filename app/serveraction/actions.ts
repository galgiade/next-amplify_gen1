"use server";

export async function submitForm(name: string, email: string) {
  // サーバーサイドでの処理
  console.log(name, email);
  return `Name: ${name}, Email: ${email}`;
}