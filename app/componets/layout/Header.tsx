"use server"
import LogoutButton from "@/app/login/LogoutButton";
import Link from "next/link";




const links = [
  {
    title: "ホーム",
    url: "/",
  },
  {
    title: "問い合わせ",
    url: "/contact",
  },
  {
    title: "テストページ",
    url: "/testpage",
  },
  {
    title: "アカウント",
    url: "/account",
  },
  {
    title: "ログイン",
    url: "/login",
  },
  {
    title: "サービス",
    url: "/service",
  },
  {
    title: "テスト5",
    url: "/test5",
  },
  {
    title: "設定",
    url: "/settings/account",
  },
  {
    title: "テスト7",
    url: "/test7",
  },
  {
    title: "Create",
    url: "/createuserinfo",
  },
  {
    title: "APItest",
    url: "/apitest",
  },
  {
    title: "test10",
    url: "/test10",
  },
  {
    title: "設定リメイク",
    url: "/settingremake",
  },
  {
    title: "test8",
    url: "/test8",
  },
  {
    title: "test9",
    url: "/test9",
  },
  {
    title: "AuthTest",
    url: "/authtest",
  },
  {
    title: "OpenAIAPITest",
    url: "/openaiapitest",
  },
  {
    title: "ロード",
    url: "/loadingtest",
  },
  {
    title: "ServerAction",
    url: "/serveraction",
  },
];


const Header: React.FC = () => {
  return (
    <nav className="bg-[#001f3f] p-4">
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index} className="text-white hover:text-gray-300">
            <Link href={link.url}>
              {link.title}
            </Link>
            
          </li>
        ))}
        <LogoutButton />
      </ul>
    </nav>
  );
};

export default Header;
