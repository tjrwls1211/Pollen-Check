import { View, ActivityIndicator} from 'react-native';
import GetStyle from './GetStyle'

const LoadingIndicator = () => {
  return (
    <View style={GetStyle.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingIndicator;
