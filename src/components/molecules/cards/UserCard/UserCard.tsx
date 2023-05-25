import { Image, Text, View } from "react-native";
import { UserCardInfo } from "types/apps/card";
import { userCardStyles } from "./UserCard.style";

interface Props {
  userInfo: UserCardInfo;
}

const UserCard = ({ userInfo }: Props) => {
  return (
    <>
      <View style={userCardStyles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Image
            style={userCardStyles.profileImage}
            source={{
              uri: userInfo.profile_img,
            }}
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Text style={userCardStyles.title}>{userInfo.name}</Text>
            <Text style={userCardStyles.caption}>{userInfo.sns_id}</Text>
          </View>
        </View>

        <View style={userCardStyles.row}>
          <View style={userCardStyles.section}>
            <Text style={[userCardStyles.paragraph, userCardStyles.caption]}>
              {userInfo.following}
            </Text>
            <Text style={userCardStyles.caption}>Following</Text>
          </View>
          <View style={userCardStyles.section}>
            <Text style={[userCardStyles.paragraph, userCardStyles.caption]}>
              {userInfo.follower}
            </Text>
            <Text style={userCardStyles.caption}>Followers</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserCard;
