import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import New from '../screens/New';

const frequentlyAskedQuestions = [
  {
    
    question: 'Segunda1',
    answer: 'Teste de accordin',
  },
  {
    question: 'Segunda2',
    answer:
      "Teste de accordin",
  },
  {
    question: "Segunda3",
    answer:
      'Teste de accordin.',
  },
];

export default function Componentes() {
  return (
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <New
          key={index.toString()}
          title={faq.question}
          details={faq.answer}
        />
      ))}
      console.log(answer);
    </View>
  );
}

const styles = StyleSheet.create({});
