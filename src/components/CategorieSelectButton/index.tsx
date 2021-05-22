import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Categories } from '../../services/types'

import styles from './styles'

interface CategorieSelectButtonProps {
  categoryName: Categories
  onPress: () => void
}
export const CategorieSelectButton = ({
  categoryName,
  onPress
}: CategorieSelectButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.label}>{categoryName}</Text>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  )
}
