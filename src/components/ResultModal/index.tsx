import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

interface ResultModalProps {
  modalVisible: boolean
  rightAnswer: boolean
  onContinue: () => void
}

export const ResultModal = ({
  modalVisible,
  rightAnswer,
  onContinue
}: ResultModalProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={[styles.centeredView]}>
        {rightAnswer && (
          <View style={[styles.modalView, { backgroundColor: 'green' }]}>
            <Text style={styles.modalText}>Right Answer!</Text>
          </View>
        )}
        {!rightAnswer && (
          <View style={[styles.modalView, { backgroundColor: 'red' }]}>
            <Text style={styles.modalText}>Wrong Answer!</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={onContinue}
          style={styles.continueButton}>
          <Text style={styles.continueLabel}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
