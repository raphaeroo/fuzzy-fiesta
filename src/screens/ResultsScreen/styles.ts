import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  safearea: {
    flex: 1
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#192938'
  },
  headerSubtitle: {
    marginVertical: 10
  },
  headerCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192938'
  },
  mainResultContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  mainResult: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#192938'
  },
  totalQuestions: {
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#bbb',
    fontWeight: 'bold',
    marginTop: 10
  },
  resumeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  resumeItem: {
    width: '30%',
    borderColor: '#192938',
    height: 110,
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'space-between'
  },
  resumeItemWrapper: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  resumeItemTotal: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#192938'
  },
  resumeItemDificulty: {
    fontSize: 12,
    color: '#aaa'
  },
  exitContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  exitButton: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#192938',
    borderRadius: 10,
    paddingVertical: 15
  },
  exitButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  star: {
    color: '#192938',
    fontSize: 13
  },
  badgeOpacityStar: {
    opacity: 0.5
  }
})
