import GetAuthServerAttributes from '@/api/FetchAuthUser';
import { GetAuthServerAttributesType, UserDataType } from '@/api/apiType';
import getData from '@/api/queries/get/getUserServer';

// authAndUserData関数の戻り値の型を定義
interface AuthAndUserDataReturnType {
  authData: GetAuthServerAttributesType | null;
  userData: UserDataType | null;
}

export default async function authAndUserData(): Promise<AuthAndUserDataReturnType> {
  let authData: GetAuthServerAttributesType | null = null;
  let userData: UserDataType | null = null;
  let redirectDestination: string = ''; // リダイレクト先のURLを保持する変数

  try {
    authData = await GetAuthServerAttributes();
    if (!authData.sub) {
      redirectDestination = '/login';
    } else {
      userData = await getData(authData.sub);
      if (!userData) {
        redirectDestination = '/createuserinfo';
      }
    }
  } catch (error) {
    console.error("Error fetching authentication or user data:", error);
    redirectDestination = '/error'; // 例: エラーページへのリダイレクト
  }

  return { authData, userData };
}