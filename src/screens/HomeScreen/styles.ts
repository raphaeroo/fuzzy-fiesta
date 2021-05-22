import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dedede'
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a2c3b',
    width: '100%',
    paddingBottom: 50
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  },
  scrollViewWrapper: {
    backgroundColor: 'white',
    width: '90%',
    position: 'relative',
    bottom: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 100
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20
  }
})
