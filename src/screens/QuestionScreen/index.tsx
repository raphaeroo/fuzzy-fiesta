import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useRoute, useNavigation, ParamListBase } from '@react-navigation/native'
import { decode } from 'html-entities'

import { getQuestions } from '../../services/getQuestions'
import { Categories, Dificulty, Response } from '../../services/types'
import { getObject, storeObject } from '../../services/storageService'
import { KEYS } from '../../constants/keys'

import { AnswerSelectButton, AnswerConfirmModal } from '../../components'

import styles from './styles'

type RouteParam = {
  key: string
  name: string
  params: {
    category?: Categories
    dificulty?: Dificulty
    correctAnswers?: number
    wrongAnswers?: number
    upgradeDificulty?: boolean
    downgradeDificulty?: boolean
    previousAnswerWasRight?: boolean
    questionNumber?: number
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

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

export const QuestionScreen = () => {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [userAnswerChoise, setUserAnswerChoise] = useState('')

  const route = useRoute<RouteParam>()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const loadData = async (dificulty: Dificulty, category: Categories) => {
    setLoading(true)
    const response: Response = await getQuestions(dificulty, category)

    setQuestion(response.results[0].question)
    setCorrectAnswer(response.results[0].correct_answer)

    const allAnswer: string[] = response.results[0].incorrect_answers
    allAnswer.push(response.results[0].correct_answer)

    setAnswers(shuffle(allAnswer))

    setLoading(false)
  }

  useLayoutEffect(() => {
    setUserAnswerChoise('')
    navigation.setOptions({
      headerTitle: route?.params?.category || 'Question Screen'
    })
  }, [])

  useEffect(() => {
    const {
      category,
      dificulty,
      upgradeDificulty,
      downgradeDificulty
    } = route.params

    function setDificulty(receivedDificulty: Dificulty) {
      navigation.setParams({
        dificulty: receivedDificulty,
        upgradeDificulty: false,
        downgradeDificulty: false
      })

      return loadData(receivedDificulty, category!)
    }

    if (upgradeDificulty) {
      switch (dificulty) {
        case 'easy':
          setDificulty('medium')
          break
        case 'medium':
          setDificulty('hard')
          break
        case 'hard':
          setDificulty('hard')
          break
      }
    }

    if (downgradeDificulty) {
      switch (dificulty) {
        case 'easy':
          setDificulty('easy')
          break
        case 'medium':
          setDificulty('easy')
          break
        case 'hard':
          setDificulty('medium')
          break
      }
    }

    if (!downgradeDificulty && !upgradeDificulty) {
      setDificulty(dificulty || 'medium')
    }
  }, [])

  const getLevelBadge = () => {
    switch (route.params.dificulty) {
      case 'easy':
        return (
          <Text>
            ★<Text style={styles.badgeOpacityStar}>★★</Text> Easy
          </Text>
        )
      case 'medium':
        return (
          <Text>
            ★★<Text style={styles.badgeOpacityStar}>★</Text> Medium
          </Text>
        )
      case 'hard':
        return <Text>★★★ Hard</Text>
      default:
        return (
          <Text>
            ★★<Text style={styles.badgeOpacityStar}>★</Text> Medium
          </Text>
        )
    }
  }

  const handleUserChoise = (answer: string) => {
    if (userAnswerChoise === '') {
      setUserAnswerChoise(answer)
    } else if (userAnswerChoise !== '') {
      setUserAnswerChoise('')
    }
  }

  const checkAnswer = async () => {
    const {
      category,
      dificulty,
      correctAnswers,
      wrongAnswers,
      upgradeDificulty,
      downgradeDificulty,
      previousAnswerWasRight,
      questionNumber
    } = route.params

    let navigationParams = {
      category,
      dificulty,
      correctAnswers,
      wrongAnswers,
      upgradeDificulty,
      downgradeDificulty,
      previousAnswerWasRight,
      questionNumber: questionNumber ? questionNumber + 1 : 2
    }

    navigationParams = {
      ...navigationParams,
      previousAnswerWasRight: userAnswerChoise === correctAnswer
    }

    if (userAnswerChoise === correctAnswer) {
      navigationParams = {
        ...navigationParams,
        correctAnswers: correctAnswers ? correctAnswers + 1 : 1
      }
    } else if (userAnswerChoise !== correctAnswer) {
      navigationParams = {
        ...navigationParams,
        wrongAnswers: wrongAnswers ? wrongAnswers + 1 : 1
      }
    }

    if (previousAnswerWasRight) {
      userAnswerChoise === correctAnswer &&
        (navigationParams = {
          ...navigationParams,
          upgradeDificulty: true
        })
    }

    if (previousAnswerWasRight === false) {
      userAnswerChoise !== correctAnswer &&
        (navigationParams = {
          ...navigationParams,
          downgradeDificulty: true
        })
    }

    const setDataToStorage: StorageObject = {
      date: new Date().toDateString(),
      dificulty: dificulty || 'medium',
      questionName: decode(question),
      questionNumber: questionNumber || 1,
      rightAnswer: true,
      wrongAnswer: false
    }

    const storageData = await getObject(KEYS[category!])

    storageData.push(setDataToStorage)

    await storeObject(KEYS[category!], storageData)

    const nextScreen =
      route.name === 'QuestionScreenB' ? 'QuestionScreenA' : 'QuestionScreenB'

    navigation.replace(nextScreen, navigationParams)
  }

  return (
    <>
      {loading
        ? (
          <View style={styles.activityLoaderContainer}>
            <ActivityIndicator size="large" color="#192938" />
          </View>
        )
        : (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainContainer}>
              <View style={styles.header}>
                <Text style={styles.headerQuestion}>
                  Question {route.params.questionNumber}
                </Text>
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeLabel}>{getLevelBadge()}</Text>
                </View>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 20 }}>{decode(question)}</Text>
              </View>
              {answers.map((answer) => (
                <View style={styles.answerWrapper} key={answer}>
                  <AnswerSelectButton
                    onPress={() => handleUserChoise(answer)}
                    disabled={userAnswerChoise !== '' && userAnswerChoise !== answer}
                    selected={correctAnswer === answer}
                    label={decode(answer)}
                  />
                </View>
              ))}
            </View>
          </SafeAreaView>
        )}
      <AnswerConfirmModal
        visible={userAnswerChoise !== ''}
        userAnswerChoise={decode(userAnswerChoise)}
        onBackDropPress={() => handleUserChoise('')}
        onCancel={() => handleUserChoise('')}
        onConfirm={checkAnswer}
      />
    </>
  )
}
