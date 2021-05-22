import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  continueButton: {
    backgroundColor: '#192938',
    height: 50,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  continueLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
