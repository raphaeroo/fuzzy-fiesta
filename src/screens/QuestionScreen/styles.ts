import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  badgeOpacityStar: {
    opacity: 0.4
  },
  safeArea: {
    flex: 1
  },
  activityLoaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerQuestion: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  badgeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#192938',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  badgeLabel: {
    fontSize: 12,
    color: 'white'
  },
  answerWrapper: {
    marginVertical: 10
  }
})
