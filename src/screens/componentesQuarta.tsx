import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewQuarta from './NewQuarta';

const frequentlyAskedQuestions = [
  
  {
    
    question: 'Quarta Feira - treino 1',
    answer: '📍QUARTA-FEIRA\nMOBILIDADE DE PUNHO E TORÁCICA \n🟡AQUECIMENTO \n2 ROUNDS\n4 Broad jump \n6 Kb deck squat \n8 Kb windmil \n10 Kb pull through with push up \n12 Kb single arm deadlift \n14 Kb sumo deadlift high pull\n\n🟡FORÇA - DEADLIFT (PR) \n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡ATIV. HANDSTAND PUSH UP   \n\n🟡WOD(gwm)\nFOR TIME: (Cap 15’) \n8 ROUNDS\n12 Box jump\n9 Sumo deadlift*\n6 Strict hspu / Hspu / Hand release push up \n\n*Sc: Barbell (progression) \n*Rx: Barbell (70/45)',
  },
  {
    question: 'Quarta Feira - treino 2',
    answer:
      "📍QUARTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nAMRAP IN 2’:\n1’ Máx. Cal. Ergômetros\n1’ Mobitlity (10”Y, W, T, J, L)\n\nRest 20”\n\nAMRAP IN 2’: (PVC)\n5 Hang muscle snatch \n5 Drop snatch\n5 Sots press  \n5 Squat pass through \n\nRest 20”\n\nAMRAP IN 2’:\n10 Toe touch with jump\n10 Box tuck up \n10 Box step up\n10” Box shoulder stretch\n\n🟡 FORÇA - HANG SNATCH \nA cada 1'20 (3 ROUNDS):\nHANG MUSCLE SNATCH\n5× 45%\n5× 50%\n5× 55%\n\nA cada 1'20 (5 ROUNDS):\nHANG SNATCH (POWER OU SQUAT POSITION)\n6× 60%\n5× 65%\n4× 70%\n3× 80%\n2× 85%\n\n🟡TÉCNICA \nDB SNATCH\n\n🟡Wod(wmg) \nESQUENTA STORM \nFOR TIME : (Cap 10’)\n10 Snatch*\n15 Burpee box jump\n\n30 Snatch*\n15 Burpee box jump \n\n50 Db snatch (22,5/15)\n15 Burpee box jump \n\n*Sc: Barbell (progression) \n*Rx: Barbell (40/25)\n",
  },
  {
    question: "Quarta Feira - treino 3",
    answer:
      "📍QUARTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nBy in: 20 Jump squat + 10 Box tuck up \n20 Pvc pass through \n10 Pvc snatch press \n20 Pvc around the world\n10 Pvc ohs \n20 Squat pvc pass through\nCash out: 20 Plank jacks + 10 Box step up\n\nESPECÍFICO:\n2 ROUNDS (Barbell) \n5 Snatch pull \n5 Snatch high pull\n5 Muscle snatch \n\n🟡FORÇA - SNATCH \nA cada 1'30 (3 ROUNDS):\nSNATCH PULL \n2x3 (60%)\n2×3 (65%)\n2x3 (70%)\n\nA cada 1'30 (5 ROUNDS)\nSNATCH LIFT OFF + SNATCH \n2x 3+2 (50%)\n2x 2+2 (60%)\n2x 2+2 (70%)\n2+2 (80%)\n2+1 (85%)\n\n🟡TÉCNICA \nBOX JUMP OVER \n\n🟡 Wod(mg)\nFOR TIME: (Cap: 15’)\n5 ROUNDS \n100m run \n10 Db snatch (22,5/15)\n15 Box jump over\n\nAumentar 100m run a cada round.\n \n*Sc: 4 ROUNDS\n*Rx: 5 ROUNDS \n",
  },
  {
    question: "Quarta Feira - treino 4",
    answer:
      "📍QUARTA-FEIRA \n🟡MOBILIDADE + AQUECIMENTO\nEMOM 8’:\n5 Downward dog to plank + 10 Groiner\n5 Push up downward dog + 10 Alt Bird Dog\n10 Scorpion + 5 Transfer core \n10 Bulgarian row + 5 Front cobra stretch\n\n🟡TÉCNICA - RMU\nSc: \nKipping;\nRing kipping pull up;\n\nRx: \nRemada aberta;\nRemada + ativ. quadril; \nEntrada lenta e rápida;\nKipping curto (argola alta) entre box; \nKipping bar (argola alta) entre box;\nAproximação de quadril na box; \nAproximação de quadril/ remada alta;\nAproximação de quadril/ remada alta com inversão. \n\n🟡 ATIV. DEADLIFT \n3 - 3 - 3 \n\n🟡WOD(gw)\nAMRAP 13’ \n 6 Rmu / Ring kipping pull up\n9 Deadlift*\n12 Kb oh lunge (24/16)\n\n*Sc: Barbell (progression)  \n*Rx: Barbell (80/55)",
  },
  {
    question: "Quarta Feira - treino 5",
    answer:
      "📍QUARTA-FEIRA \nMOBILIDADE DE QUADRIL E TORNOZELO\n🟡 AQUECIMENTO\n2 ROUNDS \n20 D.u / Tentativas D.u\n5 Kb windmil (D/E)\n10 Single leg deadlift (D/E)\n15 Kb stiff\n20 Kb swing russo alt. \n\n🟡 FORÇA - DEADLIFT\nA cada 2' (5 rounds):\n1°: A1+ A2 +A3 (40%)\n2°: A1+ A2 +A3 (50%)\n3°: A1+ A2 +A3 (60%)\n4°: A1+ A2 +A3 (70%)\n5°: A1+ A2 +A3 (80%)\n\nA1. Conventional Deadlift - 3 reps\nA2. Romanian Deadlift - 3 reps\nA3. Snatch-grip Deadlift - 3 reps \n\n*ENTRE AS SÉRIES DE DEADLIFT \n3x 12 a 15 reps Cadeira flexora \n3x 8 Flexão nórdica  \n\n🟡TÉCNICA\nPUSH UP  \n\n🟡Wod(m)\n4 ROUNDS de 3’ AMRAP\nBuy in: 50 D.u / Tentativas D.u\n12 Deadlift\n9 Push up \n6 Power clean*\n\n*Barbell (70/45).",
  },
  {
    question: "Quarta Feira - treino 6",
    answer:
      "📍QUARTA-FEIRA\nEST. JOELHO E MOB. TORNOZELO \n🟡AQUECIMENTO\n2 ROUNDS\n1 Shuttle run\n5 Med ball push up\n2 Shuttle run\n10 Med ball split squat\n3 Shuttle run\n15 Med ball clean\n3 Shuttle run\n20 Med ball overhead twist \n\n🟡FORÇA - CLEAN \nA cada 1'20 (3 ROUNDS):\nMUSCLE CLEAN\n5× 45%\n5× 50%\n5× 55%\n\nA cada 1'20 (5 ROUNDS):\nCLEAN (POWER OU SQUAT POSITION)\n5× 60%\n4× 70%\n3× 80%\n2× 90%\n\n🟡ATIV. PISTOL\n\n🟡WOD(m)\nAMRAP 13’\n200m run\n12 Pistol / Progression \n9 Hang clean* \n\n*Sc: Barbell progression \n *Rx: Barbell (50% - 55%",
  },
  {
    question: "Quarta Feira - treino 7",
    answer:
      "📍QUARTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nAMRAP 4”\n30” The prayer\n30” Prayer lat stretch (D/E)\n30” Armless prayer\n30” Blackburn alternated\n30” Cat and cow\n30” Four legged t-opener\n30” Bottom squat\n30” Squat to stand\n \nAMRAP 6” \n5 Pulse squat jump \n 10 Box step up \n5 Decline push up \n10 Plank shoulder taps \n5 Bulgarian row (pause 3”)\n10 Box dip\n\n🟡TÉCNICA - RMU (Foco: Ring Kipping)\nAtiv de core + trabalho de solo/neural (remada, pull back, pé na argola …);\nInversão (lenta e rápida) argola bx;\nKipping curto (argola alta);\nKipping bar (argola alta);\nAproximação de quadril;\nAproximação de quadril/ remada alta;\nAproximação de quadril/ remada alta com inversão. \n\n***Sc: \nKipping;\nRing kipping pull up; \n\n🟡ATIV. BOX JUMP OVER \n\n🟡WOD(g)\nFOR TIME: (Cap 15’)\n6 ROUNDS\n15 Box jump over\n10 Devil press (22,5/15) \n5 Rmu / Ring kipping pull up\n\nTempo sugerido: Performance - Sub 11’",
  },
  {
    question: "Quarta Feira - treino 8",
    answer:
      "📍QUARTA-FEIRA\n🟡 MOBILIDADE E AQUECIMENTO\nAMRAP 4”\n30” 90 to 90\n30” 90 to 90 rotation\n30” Hip rotation\n30” Active frog\n30” Frog rotation\n30” Bottom squat full rotation\n30” Bottom squat transfer\n30” Squat to stand\n\n3 ROUNDS \n5 Toe touch with jump\n10 Sprawl box step up\n 15 Box ghd sit up (partner) \n10 Tall clean \n5 Back squat (pause 3”)\n\n🟡FORÇA - BACK SQUAT \nA cada 1'20 (6 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\n\nNOS ROUNDS PAR DE SQUAT CLEAN:\n3x 12 a 15 reps Cadeira extensora\n3x 12 Afundo\n\n🟡 ATIV. SQUAT CLEAN  \n3 - 3 - 3 \n\n🟡WOD(w)\nCHIPPER: (Cap 15’)\n20 Hand release push up \n30 Squat clean*\n40 Kb swing russo (24/16)\n50 Kb box step up \n40 Kb swing americano (24/16)\n30 Front squat* \n20 Hand release push up \n\n*Sc: Barbell progression  \n*Rx: Barbell (50% - 55%)\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quarta Feira - treino 9",
    answer:
      "📍QUARTA-FEIRA\nMOBILIDADE DE OMBRO E PUNHO\n🟡AQUECIMENTO\nAMRAP 10’\n30”Pec stretch on the ground D/E \n20 Plank jack\n10 Pike push up \n30”Fingers stretch\n20 Mountain climb\n10 Cossack squat \n30”Forearms stretch\n20 Plate Z press \n10 Plate step up plank position \n30” Cat and cow \n\n🟡FORÇA - HSW (METODOLOGIA CWB)\nSC: \nEMOM 12'\n1°  2x Wall walk;\n2° 20' Handstand hold;\n3° 10x Handstand weight transfer;\n4° Progressão Hsw. \n\nRX:\nEMOM 12'\n1° 20” Handstand hold + 10” Handstand weight transfer;\n2° 3 a 5x HSPU (Tempo deficit negative back to wall);\n3° 3 a 5x HSPU (Deficit back to wall);\n4° Hsw. \n\n🟡 TÉCNICA\nBOX JUMP (REP x NO REP)\n  \n 🟡WOD (g)\nAMRAP 13’\n 5 Hsw / Progressões \n10 Box jump\n15 Kb swing (24/16)",
  },
  {
    question: "Quarta Feira - treino 10",
    answer:
      "📍QUARTA-FEIRA\nMOBILIDADE TORÁCICA E QUADRIL\n🟡AQUECIMENTO\nBy in: 20 Arch rock + 20 Hollow rock \n2 ROUNDS \n20 Plate oh lunge \n15 Plate bent over row \n10 Plate squat \n5 Plate pike push up \nCash out: 20 Arch rock + 20 Hollow rock\n\n🟡TÉCNICA - BMU \nEMOM 9'\n1° 5 Strict  toes raises + 3 a 5 Strict T2B\n2° 7 a 10 Strict Pull Up + 10' Hold\n3° 1x Complex que fará no WOD \n\nApós LEG PRESS: \nA cada 2': (4 ROUNDS)\n12 Reps (110 kg)\n\n🟡 ATIV. FRONT SQUAT\n 3 - 3 - 3 \n\n🟡WOD(gw) - TCB \nFOR TIME: (Cap 15’)\n00:00 - 09:00 PARTE A\n5 ROUNDS\n20-18-16-12-8\nFront squat \n*Complex RX  \n2 Bmu\n4 C2b\n6 T2b \n\n*Complex INT\n1 Bmu\n2 C2b \n3 T2b\n\n*Complex SC \n1 C2b \n2 Pull up \n 3 T2b \n\n9: 00 - 10:00 REST\n\n10:00 - 15:00 PARTE B\n12 Front rack lunge / Db lunge / Lunge\n18 Strict hspu / Hspu / Push up / \n12 Front rack lunge …\n18 Strict hspu …\n12 Front rack lunge …\n\n*Sc: Barbell progression\n*Rx: Barbell (57/37)",
  },
  {
    question: "Quarta Feira - treino 11",
    answer:
      "📍QUARTA-FEIRA\nMOB. E EST. DE OMBRO E TORÁCICA \n🟡AQUECIMENTO\n 7’ AMRAP\n7 Sprawl over bar \n7 Tuck up alternado (D/E = 1)\n7 Tuck up \n7 V-up \n7 Power clean \n7 Jerk \n7 Clean & Jerk  \n\n🟡FORÇA - CLEAN & JERK \n4 - 3 - 2 - 1* \n\nE TREINO DE CORE (vídeo Márcio).\n*Carga wod \n\n🟡WOD(wm) - TÔ NO COPASUR \nFOR TIME: (Cap 30’)\nSc: \n5 ROUNDS\n400m run \n10 Clean & Jerk*\n\n*Sc: Barbell progression\n*Rx: Barbell (83/56)",
  },
  {
    question: "Quarta Feira - treino 12",
    answer:
      "📍QUARTA-FEIRA \nMOBILIDADE DE OMBRO\n🟡AQUECIMENTO\n3 ROUNDS\n12 Sprawl box step up\n9 Barbell floor press\n 6 Barbell sit up\n3x (3 Power clean, 2 Hang clean, 1 Jerk)\n\n🟡FORÇA - FLOOR PRESS \nA cada 1'20 (6 rounds)\n1°: 6 Reps \n2°: 5 Reps \n3°: 4 Reps \n4°: 3 Reps \n5°: 2 Reps\n6°: 1 Rep \n\n🟡ATIV. COMPLEX \n3 - 3 - 3 \n\n🟡WOD(mgw)\nFOR TIME: (Cap 16’) \n5 ROUNDS \n 200m run\n15 Box jump\nCOMPLEX :  (3 Power clean + 2 Hang clean + 1 Push jerk). \n\nSc: Barbell progression  \nRx: Barbell (60% - 65% Jerk) \n\nTempo sugerido: Performance - Sub 13’",
  },
];

export default function ComponentesQuarta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <NewQuarta
          key={index.toString()}
          title={faq.question}
          details={faq.answer}
        />
      ))}
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
});
