import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "My BMI today is: " + props.resultImc,
    });
  };
  return (
    <View style={styles.ResultImc}>
      <Text style={styles.Information}>{props.messageResultImc}</Text>
      <Text style={styles.ImcNumber}>{props.resultImc}</Text>
      <View style={styles.boxShareButton}>
        {props.resultImc != null ? (
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}
