import { Redirect } from "expo-router";

export default function Home() {
  return <Redirect href="/(tabs)" />;
}

// home.tsx 는 /home 을 갔을 때 (tabs)/index.tsx , 즉 '/' 로 리다이렉트시켜주는 파일이다.
