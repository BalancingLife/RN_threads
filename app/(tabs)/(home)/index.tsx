import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity onPress={() => router.push(`/`)}>
          <Text style={{ color: pathname === "/" ? "red" : "black" }}>
            추천
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/following`)}>
          <Text style={{ color: pathname === "/" ? "black" : "red" }}>
            팔로잉
          </Text>
        </TouchableOpacity>
      </View>

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
