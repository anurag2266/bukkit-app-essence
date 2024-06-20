import { ScaledSheet } from '../../utils';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  sectionList: {
    flex: 1
  },

  summaryBox: {
    paddingHorizontal: '30@s',
    paddingVertical: '22@s'
  },

  sectionHeader: {
    paddingHorizontal: '30@s'
  },

  sectionItem: {
    paddingVertical: '11@s',
    paddingHorizontal: '30@s'
  },

  sectionItemLast: {
    marginBottom: '13@s'
  },

  list: {
    marginBottom: '13@s'
  },

  noActivity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'    
  }
});

export default styles;
