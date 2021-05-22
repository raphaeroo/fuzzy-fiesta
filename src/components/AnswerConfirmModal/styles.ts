import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    bottom: -20
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    paddingBottom: 45,
    paddingTop: 14,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%'
  },
  answerButton: {
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  answerButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleWrapper: {
    marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  answer: {
    fontSize: 16,
    marginTop: 2
  }
})
