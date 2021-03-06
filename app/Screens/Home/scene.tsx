import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import DatePanel from 'Components/DatePanel'
import {STUDENTS_TIME_TABLE_URL, LECTURERS_TIME_TABLE_URL} from 'Consts'
import styles from './styles'
import StudentsButton from './components/StudentsButton/'
import LecturersButton from './components/LecturersButton/'
import FavoritesButton from './components/FavoritesButton/'

interface HomeProps {
  navigation: NavigationScreenProp<any>,
  setUrl: (url: string) => void,
  setUrlType: (type: string) => void,
}
class Home extends Component<HomeProps> {

  goToFaculty = () => {
    this.props.setUrl(STUDENTS_TIME_TABLE_URL)
    this.props.setUrlType('students')
    this.props.navigation.navigate('Faculty')
  }

  goToLecturersFaculty = () => {
    this.props.setUrl(LECTURERS_TIME_TABLE_URL)
    this.props.setUrlType('lecturer')
    this.props.navigation.navigate('Faculty')
  }
  
  goToFavorites = () => {
    this.props.navigation.navigate('Favorites')
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <DatePanel />
        <StudentsButton onPress={this.goToFaculty} />
        <LecturersButton onPress={this.goToLecturersFaculty} />
        {/* <FavoritesButton onPress={this.goToFavorites} /> */}
      </ScrollView>
    )
  }
}

export default Home