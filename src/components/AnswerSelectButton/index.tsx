import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface AnswerSelectButtonProps {
  onPress: () => void
  disabled: boolean
  label: string
  selected: boolean
}
export const AnswerSelectButton = ({ onPress, disabled, label, selected }: AnswerSelectButtonProps) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        selected && {
          borderColor: '#192938'
        }
      ]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
