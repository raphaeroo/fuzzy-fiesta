import React, { useState, useLayoutEffect, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from 'react-native'
import { useRoute, useNavigation, ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'

import { Categories } from '../../services/types'
import { getObject } from '../../services/storageService'
import { KEYS } from '../../constants/keys'

import styles from './styles'

type RouteParams = {
  key: string
  name: string
  params: {
    category: Categories
  }
}

type StorageObject = {
  questionName: string
  questionNumber: number
  rightAnswer: boolean
  wrongAnswer: boolean
  date: string
  dificulty: string
}
export const ResultsScreen = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [totalRight, setTotalRight] = useState('')
  const [totalEasy, setTotalEasy] = useState('')
  const [totalMedium, setTotalMedium] = useState('')
  const [totalHard, setTotalHard] = useState('')
  const [date, setDate] = useState('')

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const route = useRoute<RouteParams>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Results: ${route.params.category}`
    })
  }, [])

  const loadData = async () => {
    const response: StorageObject[] = await getObject(KEYS[route.params.category])

    if (!response) {
      setLoading(false)
      return setError(true)
    }

    const easyQuestions: StorageObject[] = []
    const mediumQuestions: StorageObject[] = []
    const hardQuestions: StorageObject[] = []

    response.map((item: StorageObject) => {
      if (item.rightAnswer && item.dificulty === 'easy') {
        easyQuestions.push(item)
      }
      if (item.rightAnswer && item.dificulty === 'medium') {
        mediumQuestions.push(item)
      }
      if (item.rightAnswer && item.dificulty === 'hard') {
        hardQuestions.push(item)
      }

      return null
    })

    const totalRightAnswers = easyQuestions.length + mediumQuestions.length + hardQuestions.length

    setTotalRight(String(totalRightAnswers))
    setDate(String(response[0].date))
    setTotalEasy(String(easyQuestions.length))
    setTotalMedium(String(mediumQuestions.length))
    setTotalHard(String(hardQuestions.length))
  }

  useEffect(() => {
    setLoading(true)

    loadData()

    setLoading(false)
  }, [])

  const navigateToHome = () => navigation.replace('HomeScreen')

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text>SOMETHING GOES WRONG, TRY AGAIN</Text>
        <View style={styles.exitContainer}>
          <TouchableOpacity style={styles.exitButton} onPress={navigateToHome}>
            <Text style={styles.exitButtonLabel}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="#192938" size="large" />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Congratulations</Text>
          <Text style={styles.headerSubtitle}>This is your performance about:</Text>
          <Text style={styles.headerCategory}>{route.params.category}</Text>
          <Text style={styles.headerSubtitle}>finished in:</Text>
          <Text style={styles.headerCategory}>{date}</Text>
        </View>

        <View style={styles.mainResultContainer}>
          <Text style={styles.mainResult}>{totalRight}</Text>
          <Text style={styles.totalQuestions}>of 10</Text>
          <Text style={styles.subtitle}>correct</Text>
        </View>

        <View>
          <View style={styles.resumeContainer}>
            <View style={styles.resumeItem}>
              <Text style={styles.star}>
                ★<Text style={styles.badgeOpacityStar}>★★</Text>
              </Text>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemTotal}>{totalEasy}</Text>
              </View>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemDificulty}>correct easy</Text>
              </View>
            </View>

            <View style={styles.resumeItem}>
              <Text style={styles.star}>
                ★★<Text style={styles.badgeOpacityStar}>★</Text>
              </Text>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemTotal}>{totalMedium}</Text>
              </View>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemDificulty}>correct medium</Text>
              </View>
            </View>

            <View style={styles.resumeItem}>
              <Text style={styles.star}>★★★</Text>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemTotal}>{totalHard}</Text>
              </View>
              <View style={styles.resumeItemWrapper}>
                <Text style={styles.resumeItemDificulty}>correct hard</Text>
              </View>
            </View>
          </View>
          <View style={styles.exitContainer}>
            <TouchableOpacity style={styles.exitButton} onPress={navigateToHome}>
              <Text style={styles.exitButtonLabel}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
