"use client"
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';

I18n.putVocabularies(translations);
I18n.setLanguage("ja");
import { Authenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";

const AuthComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  //例"/contact"
  console.log(redirect)
  return (
    <Authenticator>
      {({ user }) => {
        if (user) {
          // ユーザーがログインしている場合、特定のページにリダイレクトします。
          if (redirect) {
            router.push(redirect);
          }
          else{
            router.push('/');
          }
          return <></>;
        }
        return <></>;
      }}
    </Authenticator>
  )
}

export default AuthComponent