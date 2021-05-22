import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%'
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  label: {
    fontSize: 14,
    fontWeight: '500'
  }
})
