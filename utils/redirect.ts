import { redirect } from 'next/navigation';

/**
 * ログインページへリダイレクトし、ログイン後に元のページに戻る関数
 * @param originPagePath 呼び出し元のページのパス
 */
export const handleRedirectToLogin = (originPagePath: string) => {
  // ログインページにリダイレクトし、ログイン後に元のページに戻るためのクエリパラメータを追加
  const loginPagePath = `/login?returnTo=${encodeURIComponent(originPagePath)}`;
  redirect(loginPagePath);
};