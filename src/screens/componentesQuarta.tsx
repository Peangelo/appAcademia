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
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE OMBRO E QUADRIL \n🟡AQUECIMENTO\n2 ROUNDS\n1 Shuttle run\n10 Med ball push up\n2 Shuttle run\n15 Tall med ball clean\n3 Shuttle Run\n20 Med ball sit up\n\n🟡FORÇA - SQUAT CLEAN \nA cada 1'20 (7 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\nNo 7° round: 1x (90%)\n\n🟡TÉCNICA\nHAND REALESE PUSH UP \n\n🟡WOD (w)\nFOR TIME: (Cap 14’)\n3 ROUNDS \n12 Kb oh lunge (24/16)\n9 Hand release push up\n6 Clean*\n\n*Add 5% no Clean \n\n3 ROUNDS \n12 Kb oh lunge (24/16)\n9 Hand release push up\n6 Clean*\n\n*Sc: Barbell (progression) \n*Rx: Barbell (60% e 65%)",
  },
  {
    question: "Quarta Feira - treino 3",
    answer:
      "📍SEGUNDA-FEIRA \nMOBILIDADE DE OMBRO E QUADRIL \n🟡AQUECIMENTO\n2 ROUNDS:\n12 Sprawl over the bar \n9 Tempo push up\n6 Wall v sit \n\nESPECÍFICO:\n2 ROUNDS:\n12 Clean rack delivery \n9 Front squat\n6 Tall clean \n\n🟡FORÇA - COMPLEX CLEAN \nA cada 1'30 por 9': (6 rounds)\nHang clean + Front squat + Hang squat clean \n(50% 60% 70% 75 % 80% 85%)\n\n🟡TÉCNICA \nATIV. TOES TO BAR \n\n🟡Wod (gw)\n2 ROUNDS\n12 Devil press (22,5/15)\n9 T2b / Knee to elbow/ Toes raises \n6 Hang squat clean (60%)\n\n*Barbell (60% para 50%)\n\n2 ROUNDS\n6 Devil press (22,5/15)\n9 T2b / Knee to elbow/ Toes raises\n12 Hang squat clean (50%)",
  },
  {
    question: "Quarta Feira - treino 4",
    answer:
      "📍SEGUNDA-FEIRA \nMOBILIDADE DE OMBRO E TORÁCICA \n🟡AQUECIMENTO\nEMOM 9':\n30 D.u + 10 Front squat\n20 Crossover + 10 Shoulder press\n10 D.u Crossover + Good morning\n\n🟡FORÇA - SPLIT JERK \nA cada 1'30 por 9' (6 rounds)\n1°: 6 Reps (50%)\n2°: 5 Reps (60%)\n3°: 4 Reps (70%)\n4°: 3 Reps (80%)\n5°: 2 Reps (85%)\n\n🟡TÉCNICA - STOH \nPUSH PRESS X PUSH JERK\n\n🟡WOD (wm)\nFOR TIME: (Cap 15’)\n3 ROUNDS\n21 D.u / Tentativas D.u\n15 Globet squat (24/16)\n9 Push press*\n\n3 ROUNDS\n21 D.u / Tentativas D.u\n15 Push jerk*\n9 Globet squat\n\n*Sc: Barbell (progression) \n*Rx: Barbell (55% - 60%)",
  },
  {
    question: "Quarta Feira - treino 5",
    answer:
      "📍SEGUNDA-FEIRA\nESTABILIDADE DE OMBRO E ESCAPULA\n🟡AQUECIMENTO\nAMRAP IN 2'.\n20 Mountain climber (pegada aberta)\n20 Flexão plantar\n20 Lareral to front raises \n\nAMRAP IN 2'.\n10 Toes raises \n10 Toes to bar alt.\n10 Da vinci raises\n\nAMRAP IN 2': (PVC)\n5 Hang muscle snatch\n5 Snatch balance\n5 Ohs\n5 Sots press\n\n🟡FORÇA - SNATCH \nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\n\nENTRE AS SÉRIES DE SNATCH:\n3x 12 a 15 reps Cadeira extensora\n3x 12 Afundo\n\n🟡ATIV. T2B\n\n🟡WOD (mgw)\nFOR TIME: (Cap 15’)\nBuy in: 400m\n21-15-9\nT2b / Toes raises\nSnatch*\n\n*Sc: Toes raises / Barbell progression\n*Rx: T2b/ Barbell (60/35)",
  },
  {
    question: "Quarta Feira - treino 6",
    answer:
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE QUADRIL E PUNHO\n🟡AQUECIMENTO GERAL\nFOR TIME:\n40 S.u alto e lento\n30 D.u / Tentativas D.u\n20 S.u Crossover / Tentativas crossover\n10 D.u crossover \n\nESPECÍFICO:\n2 ROUNDS\n5 Inchworm push up\n10 Front squat \n15 Kang squat\n20 Plank shoulder taps\n\n🟡FORÇA - LEG PRESS \n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\nOU\n\nA cada 2’ (3 rounds):\n3x 12 Reps (110kg) \n\n*Ao final de cada série: 3 Kneeling squat.\n\n🟡ATIV. HSPU\n\n🟡WOD (gwm)\nFOR TIME: (Cap 15’)\n5 ROUNDS\n21 D.u / Tentativas D.u \n15 Hspu \n9 Front squat*\n\n*Sc: Hand release push up / Barbell progression\n*Rx: Hspu / Barbell (60/35)\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quarta Feira - treino 7",
    answer:
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE OMBRO E TORÁCICA \n🟡AQUECIMENTO\nFOR TIME:\nBuy in: 20 Mountain climb\n5 V-up com abmat - 10 Muscle clean\n5 V-up com abmat - 10 Shoulder press\n5 V-up com abmat - 10 Power clean\n5 V-up com abmat - 10 Push jerk\n5 V-up com abmat - 10 Clean & Jerk\nCash out: 20 Up and down plank\n\n🟡FORÇA - CLEAN & JERK \nA cada 1'20 (6 rounds)\n1°: 6 Reps (50%)\n2°: 5 Reps (60%)\n3°: 4 Reps (70%)\n4°: 3 Reps (80%)\n5°: 2 Reps (85%)\n6°: 1 Rep (90%)\n\n🟡ATIV. TOES TO BAR\n\n🟡WOD (wmg)\nFOR TIME: (Cap 14’)\nBuy in: 400m run\n5 ROUNDS\n1 Cluster\n3 Clean and jerk*\n5 Burpee\n7 T2b\nCash out: 400m run\n\n*Sc: Toes raises / Barbell progression\n*Rx: Toes to bar / Barbell (60%)\n\nTempo sugerido: Performance - Sub 11’",
  },
  {
    question: "Quarta Feira - treino 8",
    answer:
      "📍SEGUNDA-FEIRA\nTREINO 1\nAMRAP 40’\n20 Cal Bike\n20 Tuck Up\n15 KB Swing Russo\n15 Air Squat\n10 Cal Row\n10 Burpee\n100 S.U / 50 D.U\n\nOU\n\nTREINO 2\nAMRAP 20’\n400m Run\n40'' Wall sit\n20 Abmat Sit Up\n10 V-Up\n\nFOR TIME 20’\n21-15-9\nCal Bike\nSprawl\nCal Row",
  },
  {
    question: "Quarta Feira - treino 9",
    answer:
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE OMBRO, ESCÁPULA E PUNHO\n🟡AQUECIMENTO GERAL:\n2 ROUNDS\n2 Shuttle run\n5/5 Single db push up\n2 Shuttle run\n10 Db floor fly\n2 Shuttle run\n15 Db crunch\n2 Shuttle run\n20 Db oh lunge (alt.)\n🟡FORÇA - BENCH PRESS\nA cada 1'20 (6 rounds)\n1°: 6 Reps\n2°: 5 Reps\n3°: 4 Reps\n4°: 3 Reps\n5°: 2 Reps\n6°: 1 Rep\nENTRE AS SÉRIES LEG PRESS:\nA cada 2': (4 ROUNDS)\n12 Reps (110 kg)\n🟡 ATIV. HSPU\n🟡WOD (gw)\nFOR TIME: (Cap 13’)\n5 ROUNDS\n8 Hspu / Hand release push up\n16 Front rack lunge*\n8 Push press*\n*Sc: Barbell progression\n*Rx: Barbell (55% - 60% push press)\nTempo sugerido: Performance - Sub 10’",
  },
  {
    question: "Quarta Feira - treino 10",
    answer:
      "📍SEGUNDA-FEIRA\nESTABILIDADE OMBRO E LOMBAR\n🟡AQUECIMENTO GERAL\nTABATA 1\nMountain climber\nTuck up\nTempo push up\nTABATA 2\nRomanian deadlift\nHang clean & jerk\nGood morning\n🟡FORÇA - PAUSE DEADLIFT\n(Below the knee for two seconds)\nA cada 1'30 (6 rounds)\n1°: 5 Reps (50%)\n2°: 4 Reps (55%)\n3°: 3 Reps (60%)\n4°: 2 Reps (65%)\n5°: 2 Reps (70%)\n6°: 1 Rep - 2x (80%)\nNO ROUND PAR:\n3x 12 a 15 reps Cadeira flexora\n3x 8 reps Flexão nórdica\n🟡TÉCNICAS\nDICAS DT\n🟡WOD (w)\nFOR TIME: (Cap 15’)\nBuy in: 200m Kb farm walk (24/16)\n5 ROUNDS\n12 Deadlift\n9 Hang clean\n6 Stoh*\nCash out: 200m Kb farm walk (24/16)\n*Sc: Barbell progression % Stoh\n*Rx: Barbell (70/45)\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quarta Feira - treino 11",
    answer:
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE OMBRO\n🟡AQUECIMENTO\nTABATA 1:\nDoulble under / Tentativas D.u\nTABATA 2:\nGood morning\nBack rack elbow punches\nTall clean\n🟡FORÇA - COMPLEX CLEAN\nA cada 1'30 (6 rounds):\n2x High hang squat clean + Hang squat clean + Low hang squat clean\n(50% 60% 65% 70% 75% 80%)\nNO ROUND PAR:\n3x 12 a 15 reps Cadeira extensora\n3x 12 Afundo\n🟡TÉCNICA\nWALL BALL\n🟡WOD (m)\n5 ROUNDS de 2’ REST de 30”\nSC:\n5 rounds de 2’ 30’’ rest\n20 D.u / Tentativas\n10 Hang clean (50% - 55%)\nMáx. Wall ball (20/14 lb)*\n*META: 100 Wall ball\nRX:\n5 rounds de 2’ 30” rest\n20 D.u / Tentativas\n10 Hang clean (50% - 55%)\nMáx. Wall ball (20/14 lb)*\n*META: Máx. Wall ball 100+",
  },
  {
    question: "Quarta Feira - treino 12",
    answer:
      "📍SEGUNDA-FEIRA\nMOBILIDADE DE OMBRO E QUADRIL\n🟡 AQUECIMENTO:\n2 ROUNDS\n5 Cal bike\n5 Good morning\n5 Squat clean\n5 Push press\n5 Cluster\n2 ROUNDS\n5 Cal Remo\n5 Ring row\n5 Scapular pull up\n5 Beat swing\n5 Pull up\n🟡FORÇA - CLUSTER\nA cada 1’20 (5 rounds):\n1°: 5 Reps (50%)\n2°: 4 Reps (60%)\n3°: 3 Reps (70%)\n4°: 2 Reps (80%)\n5°: 1 Reps (85%)\nNO ROUND PAR:\n3x 12 a 15 reps Cadeira extensora\n3x 12 Afundo\n🟡 WOD: (DUPLA)\nFOR TIME: 16’\n1 ROUNDS\n210m run (juntos)\n15 Pull up / Ring row\n9 Squat clean *\n1 ROUNDS\n210m run (juntos)\n12 C2b / Pull up\n9 Push press*\n1 ROUND\n210m run (juntos)\n9 Bmu / C2b\n6 Cluster *\nSc: Barbell progression\nRx: Barbell (60/35)\nTempo sugerido: Performance - Sub 14’",
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
