import React from 'react'
import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

// Aqui estou importando o componente de botão que vai navegar para a tela de questões
import { CategorieSelectButton } from '../../components'

// Aqui estou importando a lista com as categorias da API
import { categories } from '../../constants/categoriesList'
import { Categories } from '../../services/types'

import { getData } from '../../services/storageService'
import { KEYS } from '../../constants/keys'

import styles from './styles'

export const HomeScreen = () => {
  // Aqui estou usando o hook de navegação apenas para facilitar as declarações dos tipos
  const navigation = useNavigation()

  const handleNavigation = async (categoryName: Categories) => {
    const result = await getData(`TOKEN_${KEYS[categoryName]}`)

    if (result === null) {
      return navigation.navigate('QuestionScreenA', {
        category: categoryName,
        questionNumber: 1
      })
    }

    return navigation.navigate('ResultsScreen', { category: categoryName })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select a Category</Text>
      </View>

      <View style={styles.scrollViewWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollView}>
          {/*
            Aqui estou fazendo uma desestruturação da lista de categorias e atribuindo cada
            categoria a uma cópia do botão de categorias
          */}
          {categories.map((categoryName) => (
            <View key={categoryName}>
              {/*
                Aqui meu botão tem a função de navegar para a tela de categorias, mas ele vai levar junto
                a categoria que foi clicada assim consigo tratar a informação na tela que vai receber
                as perguntas
              */}
              <CategorieSelectButton
                categoryName={categoryName}
                onPress={() => handleNavigation(categoryName)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )
}
