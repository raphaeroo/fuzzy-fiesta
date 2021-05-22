import React from 'react'
import { View, Modal, Pressable, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

interface AnswerConfirmModalProps {
  userAnswerChoise: string
  visible: boolean
  onBackDropPress: () => void
  onCancel: () => void
  onConfirm: () => void
}

export const AnswerConfirmModal = ({
  userAnswerChoise,
  visible,
  onBackDropPress,
  onCancel,
  onConfirm
}: AnswerConfirmModalProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Pressable onPress={onBackDropPress} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Choose:</Text>
            <Text style={styles.answer}>{userAnswerChoise}?</Text>
          </View>
          <View
            style={styles.buttonsWrapper}>
            <TouchableOpacity
              onPress={onConfirm}
              style={[
                styles.answerButton,
                {
                  backgroundColor: 'green'
                }
              ]}>
              <Text style={styles.answerButtonLabel}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCancel}
              style={[
                styles.answerButton,
                {
                  backgroundColor: 'red'
                }
              ]}>
              <Text style={styles.answerButtonLabel}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
}
