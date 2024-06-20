import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
    title: {
    },
  
    contentContainer: {
      marginHorizontal: 0
    },
  
    headerItem: {
      flexDirection: 'row',
      paddingVertical: '18@s',
      paddingHorizontal: '30@s'
    },
  
    headerDetails: {
      marginLeft: '34@s',
      justifyContent: 'center'
    },
  
    headerTitle: {
      textTransform: 'uppercase'
    },
  
    headerImageContainer: {
      width: '30@s',
      height: undefined,
      aspectRatio: 1.07
    },
  
    headerImage: {
      flex: 1,
      height: undefined,
      width: undefined,
      tintColor: colors.greyMedium
    },
  
    selectedHotspot: {
      backgroundColor: colors.blueLighter30
    },
  
    inputsContainer: {
      marginTop: '27@s',
      paddingHorizontal: '30@s'
    },
  
    inputRow: {
      marginTop: '27@s'
    },
  
    multiInputRow: {
      flexDirection: 'row'
    },
  
    leftHalfInputContainer: {
      flex: 1,
      marginRight: '10@s'
    },
  
    rightHalfInputContainer: {
      flex: 1,
      marginLeft: '10@s'
    },
  
    halfInput: {
      width: '70@s'
    }
  });
  export default styles;