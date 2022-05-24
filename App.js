
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import RootStack from './navigators/RootStack';
import Appointment from './Form/screens/Appointment';
import QuizWelcome from './Form/screens/QuizWelcome';
import New from './Form/screens/New';

export default function App() {
  // return <Login />
  // return <Signup />
  // return <Welcome />
  return <RootStack />
  // return <Appointment />
  // return <QuizWelcome />
  // return <New />

}

