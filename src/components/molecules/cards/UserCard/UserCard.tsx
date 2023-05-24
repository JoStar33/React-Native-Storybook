import { View } from "react-native";
import { Avatar, Caption, Paragraph, Title } from "react-native-paper";
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
          <Avatar.Image
            source={{
              uri: userInfo.profile_img
            }}
            size={50}
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title style={userCardStyles.title}>{userInfo.name}</Title>
            <Caption style={userCardStyles.caption}>{userInfo.sns_id}</Caption>
          </View>
        </View>

        <View style={userCardStyles.row}>
          <View style={userCardStyles.section}>
            <Paragraph style={[userCardStyles.paragraph, userCardStyles.caption]}>
              {
                userInfo.following
              }
            </Paragraph>
            <Caption style={userCardStyles.caption}>Following</Caption>
          </View>
          <View style={userCardStyles.section}>
            <Paragraph style={[userCardStyles.paragraph, userCardStyles.caption]}>
              {
                userInfo.follower
              }
            </Paragraph>
            <Caption style={userCardStyles.caption}>Followers</Caption>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserCard;