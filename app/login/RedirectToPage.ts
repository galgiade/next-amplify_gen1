import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

export default function RedirectToPage() {
    const router = useRouter();
    const { user } = useAuthenticator((context) => [context.user]);
      if (user) {
        // ユーザーがログインしている場合、前のページにリダイレクト
        router.back();
        router.refresh();
        console.log("back");
      }
    // ユーザーがログインしていない場合、何も表示しない
    return null;
  }