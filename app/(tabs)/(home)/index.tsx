import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const isLoggedin = false;

  console.log("pathname", pathname);
  console.log("insets", insets);

  const { width, height } = Dimensions.get("window");

  console.log("화면 너비(dp):", width);
  console.log("화면 높이(dp):", height);
  console.log(
    `화면 너비: ${width * PixelRatio.get()}px, 높이 : ${
      height * PixelRatio.get()
    }px`
  );

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <BlurView style={styles.header} intensity={70}>
        <Image
          source={require("../../../assets/images/react-logo.png")}
          style={styles.headerLogo}
        />
        {!isLoggedin && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.navigate("/login")}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {isLoggedin && (
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push(`/`)}>
              <Text style={{ color: pathname === "/" ? "red" : "black" }}>
                추천
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push(`/following`)}>
              <Text style={{ color: pathname === "/" ? "black" : "red" }}>
                팔로잉
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View>
        <TouchableOpacity
          onPress={() => router.push(`/[username]/post/[postID]`)}
        >
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => router.push(`/[username]/post/[postID]`)}
        >
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => router.push(`/[username]/post/[postID]`)}
        >
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 42,
    height: 42,
  },
  loginButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "black",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: "white",
  },
});
