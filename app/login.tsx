import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  const isLoggedIn = false; // 로그인 상태를 확인하는 로직을 여기에 추가
  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
