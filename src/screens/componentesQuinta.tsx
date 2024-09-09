import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewQuinta from './NewQuinta';

const frequentlyAskedQuestions = [
  
  {
    
    question: 'Quinta Feira - treino 1',
    answer: '📍QUINTA -FEIRA\nMOBILIDADE DE QUADRIL E TORNOZELO\n🟡AQUECIMENTO\nFOR TIME:\nBy in: 20 Lunge\n10 Db front raises\n10 Tuck up\n10 Db lateral raises\n10 V-up alt.\n10 Db da vinci raises\n10 V-up\nCash out: Reverse lunge\n\n🟡 FORÇA - FRONT SQUAT (pausa 3”)\nA cada 1’30 por 9’ (6 rounds):\n2x5 (50% - 55%)\n2x3 (60%- 65%)\n2x2 (70% - 75%)\n\n🟡ATIV. TOES RAISES / KNEE TO ELBOW / T2B\n\n🟡WOD (gw)\nFOR TIME: (Cap 14’)\n1 ROUND\n20 Db snatch (22,5/15)\n15 Toes raises\n10 Front rack lunge*\n\n1 ROUND\n20 Db snatch (22,5/15)\n15 Knee to elbow\n10 Front rack lunge*\n\n1 ROUND\n20 Db snatch (22,5/15)\n15 T2b\n10 Front rack lunge*\n\n1 ROUND\n20 Db snatch (22,5/15)\n15 Strict t2b\n10 Front rack lunge*\n\n*Sc: Barbell (progression)\n*Rx: Barbell (60/35)',
  },
  {
    question: 'Quinta Feira - treino 2',
    answer:
      "📍QUINTA-FEIRA\nMOBILIDADE DE QUADRIL E TORNOZELO\n🟡AQUECIMENTO\nTABATA 1:\nJump squat\nKb lunge with twist\nKb curtsy squat\n\nTABATA 2:\nKb front raises\nKb figure of eight\nKb russian twits\n\n🟡FORÇA - BACK SQUAT (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡ATIV. FRONT SQUAT\n3 - 3 - 3\n\n🟡Wod(wm)\nFOR TIME : (Cap 10’)\n12-9-6-3-6-9-12\nFront squat\nKb swing (24/16)\n24 D.u / Tentativas de D.u\n\n*Sc: Barbell (progression)\n*Rx: Barbell (60/35)",
  },
  {
    question: "Quinta Feira - treino 3",
    answer:
      "📍QUINTA-FEIRA\nMOBILIDADE DE QUADRIL\n🟡AQUECIMENTOS\nFOR TIME:\n11 Burpee\n22 Lunge\n33 Tuck up\n44 Plank shoulder taps\n\n4 Complex:\n4 Front + 4 Push press + 4 Thruster\n\n🟡FORÇA - FRONT SQUAT (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡TÉCNICA\nATIV. THRUSTER\n\n🟡Wod(w)\nEMOM 18’ (cada round)\nBy in: 4 V-up\n98 Thruster*\n\n*Rx: Barbell (só a barra)",
  },
  {
    question: "Quinta Feira - treino 4",
    answer:
      "📍QUINTA-FEIRA\nMOBILIDADE DE OMBRO E ESCÁPULA\n🟡AQUECIMENTO\nTABATA (2x)\nShuttle run\nPlate halo\nFront loaded good morning\nPlate lunge\nPlate snatch\nPlate ohs\n\n🟡FORÇA - SNATCH (LPO DAY)\nA cada 1'20 (3 ROUNDS):\nMUSCLE SNATCH\n5× 45%\n5× 50%\n5× 55%\n\nA cada 1'20 (5 ROUNDS):\nSNATCH (POWER OU SQUAT POSITION)\n6× 60%\n5× 65%\n4× 70%\n3× 80%\n2× 85%\n\n🟡TÉCNICA\nSNATCH BARBELL CYCLING\n\n🟡WOD(m)\nFOR TIME: (Cap 14’)\n5 ROUNDS\n200m run\n15 Wall ball (20/14 lb)\n10 Snatch barbell*\n\n*Barbell (UNBROKEN) na quebra 5 sprawl.",
  },
  {
    question: "Quinta Feira - treino 5",
    answer:
      "📍QUINTA-FEIRA\n🟡AQUECIMENTO\nFOR TIME:\nBy in: 20 Box step up\n10 Russian baby makers + 5 Shoulder press\n10 Jumping jacks + 5 Push press\n10 Squat jacks + 5 Push jerk\n10 Split squat jump + 5 Split jerk\nCash out: 20 Box tuck up\n\n🟡FORÇA - PUSH JERK (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡ATIV. ROPE CLIMB\n\n🟡WOD(g)\nFOR TIME: (Cap 16’)\n6 ROUNDS\n12 Box jump over / 24 Box step up\n9 Db split jerk (22,5/15)*\n3 Rope climb / Rope pulling\n\n*Db split jerk (Cada round alt. braço D/E)",
  },
  {
    question: "Quinta Feira - treino 6",
    answer:
      "📍QUINTA-FEIRA\nMOBILIDADE TORÁCICA\n🟡AQUECIMENTO\nTABATA 1:\nLateral bar jump\nShoulder press (split position)\nBox step up\n\nTABATA 2:\nBurpee to target\nL-sit hang\nToes raises\n\n🟡FORÇA- SPLIT JERK\nA cada 1'20 (6 rounds)\n1°: 6 Reps (50%)\n2°: 5 Reps (60%)\n3°: 4 Reps (65%)\n4°: 3 Reps (70%)\n5°: 2 Reps (80%%)\n6°: 1 Rep (85%)\n\n🟡ATIV. T2B\n\n🟡WOD(g)\nFOR TIME: (Cap 14’)\n5 ROUNDS\n6 T2b / Toes raises\n9 High box jump / 18 Box step up\n12 Stoh* (Push press ou Jerk)\n\n*Sc: Barbell progression\n*Rx: Barbell (50% - 55%)",
  },
  {
    question: "Quinta Feira - treino 7",
    answer:
      "📍QUINTA-FEIRA\nEST. DE OMBRO E ESCÁPULA\n🟡AQUECIMENTO GERAL:\nFOR TIME:\n30 Jumping jacks\n20 Reverse lunge\n10 Windshield wipers oblique\n20 Hip thrust\n30 Alt. tuck up\n\nESPECÍFICO:\n3 ROUNDS (1 Pvc + 2 Barra)\n3 Muscle snatch\n3 Snatch push press\n3 Snatch balance\n3 Back squat com 3” pausa\n3 O.H.S\n\n🟡FORÇA - OHS (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\nENTRE AS SÉRIES DE OHS:\nA cada 2': (4 ROUNDS)\n12 Reps (110kg)\n\n🟡ATIV. HANG SNATCH\n3 - 3 - 3\n\n🟡WOD(w)\nFOR TIME: (Cap 15’)\n•100m farm walk (24/16)\n10 Kb lunge uni.D\n10 Kb lunge uni.E\n21 Snatch*\n\n•100m farm walk\n10 Kb lunge uni.D\n10 Kb lunge uni.E\n15 Hang snatch*\n\n•100m farm walk\n10 Kb lunge uni.D\n10 Kb lunge uni.E\n9 Ohs*\n\n*Sc: Lunge / Barbell progression\n*Rx: Kb lunge / Barbell (50% - 55%)\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quinta Feira - treino 8",
    answer:
      "📍QUINTA-FEIRA\nESTABILIDADE DE OMBRO E ESCÁPULA\n🟡AQUECIMENTO\nAMRAP IN 2’30:\n1’15 Máx. Cal. Ergômetros\n1’15 Máx. Plank\n\n10” Transition\n\nAMRAP IN 2’30:\n10 Db front raise\n10 Db lateral raise\n10 Db overhead to toe crunches\n\n10” Transition\n\nAMRAP IN 2’30: (PVC)\n5 Muscle snatch\n5 Snatch push press\n5 Snatch balance\n5 Ohs\n5 Sots press\n\n🟡FORÇA - COMPLEX SNATCH\nA cada 1’30 (5 ROUNDS):\n3 Snatch + 2 Hang snatch",
  },
  {
    question: "Quinta Feira - treino 9",
    answer:
      "📍QUINTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nBy in: 10 Sprawl + 10 Plate snatch + 10 Overhead plate twist\n20 Pvc pass through \n10 Pvc snatch press \n20 Pvc around the world\n10 Pvc ohs \n20 Squat pvc pass through\nCash out: 10 Reverse burpee + 10 Plate sit up + 10 Plate russian twist\n\nESPECÍFICO:\n3 ROUNDS (1 PVC guiado + 2 Barra)\n3 Snatch high pull \n3 Muscle snatch\n3 Snatch balance\n3 Back squat com 3' pausa\n3 O.H.S com 3' pausa\n\n🟡FORÇA - POWER SNATCH (PR) \n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n3x 12 a 15 reps Cadeira flexora \n3x 12 Reverse lunge \n\n🟡ATIV. SQUAT SNATCH\n3 - 3 - 3 \n\n🟡WOD(wm)\nFOR TIME: (Cap 14’)\n200m run\n12 Hang power snatch \n200m run \n12 Power snatch \n200m run\n12 Hang squat snatch \n200m run \n12 Squat snatch \n200m run \n12 Ohs \n\n*Sc: Barbell progression  \n*Rx: Barbell (50% - 55%) \n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quinta Feira - treino 10",
    answer:
      "📍QUINTA-FEIRA\n🟡 MOBILIDADE + AQUECIMENTO\n2 ROUNDS\n10 Pvc pass through \n10 Pvc around the world\n10 PNF Shoulder external rotation (5/5)\n10 Shoulder external rotation with pipe (5/5)\n10 Pvc ohs\n10 Pvc pass in squat through\n\n2 ROUNDS \n20 Jumping over bar + 20 Db sit up to oh press\n10 Db front raise\n10 Db lateral raise\n10 Db da vinci raise  \n20 Hang muscle snatch + Snatch push press (10/10)\n\n🟡 FORÇA  - HANG SNATCH \nA cada 1'30 (6 rounds)\n1°: 2x (50%)\n2°: 2x (60%)\n3°: 2x (70%)\n4°: 2x (80%)\n5°: 2 x (85%)\n\n🟡TÉCNICA  \nROPE CLIMB\n\n🟡WOD(mgw)\nFOR TIME: (Cap 15’)\n4 ROUNDS\n200m run\n12 Hang snatch\n8 Burpee \n2 Rope climb\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Quinta Feira - treino 11",
    answer:
      "📍QUINTA-FEIRA \nEST. DE OMBRO E ESCÁPULA \n🟡AQUECIMENTO GERAL \nFOR TIME: \n30 Crossover \n20 Plate sit up to overhead press\n10 Plate snatch \n\nAQUECIMENTO ESPECÍFICO\n2 ROUNDS (1 PVC + 2 Barra)\n3 Muscle snatch \n3 Snatch push press \n3 Snatch balance \n3 Back squat \n3 Ohs com 3” de pausa \n\n🟡FORÇA - SQUAT SNATCH (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡ATIV.  T2B\n\n🟡WOD (gwm)\nFOR TIME: (Cap: 14’)\nBuy in: 20 V-up\n50 D.u Crossover / Crossover \n35 Hang Snatch*\n50 D.u Crossover / Crossover\n35 T2b / Toes raises \nCash out: 20 V-up\n\nSc: Barbell : Progression  \nRx: Barbell (50% - 55%)\n\nTempo sugerido: Performance - Sub 11’",
  },
  {
    question: "Quinta Feira - treino 12",
    answer:
      "📍QUINTA-FEIRA \n🟡 MOBILIDADE E AQUECIMENTO \nFOR TIME: \n10 Pvc pass through \n10 Pvc around the world\n10 PNF Shoulder external rotation (5/5)\n10 Shoulder external rotation with pipe (5/5)\n10 Pvc ohs\n10 Pvc pass in squat through\n\nEMOM 6’:\nMin. 1: Máx. Crossover  \nMin. 2: 10 Muscle snatch + 5 Snatch push press\nMin. 3: Máx. Tentativas D.u crossover\nMin. 4: 10 Tall snatch + 5 Ohs \nMin. 5: Máx. D.u crossover\nMin. 6: 10 V-up alternado + 10 V-up  \n\n🟡FORÇA - OHS\nA cada 1'30 (6 rounds)\n1°: 5 Reps (50%)\n2°: 4 Reps (55%)\n3°: 3 Reps (60%)\n4°: 2 Reps (65%)\n5°: 2 Reps (70%)\n6°: 1 Rep - 2x (80%)\n\nE TREINO DE CORE (vídeo\nMárcio).\n\n🟡 ATIV. SNATCH (SQUAT POSITION)\n3 - 3 - 3 \n\n🟡WOD (mg)\nFOR TIME: (Cap 13’)\n30 D.U Crossover / Crossover\n20 Toe raises\n20 Power snatch*\n\n30 D.U Crossover / Crossover\n20 Knee to elbow\n15 Low hang snatch*\n\n30 D.U Crossover / Crossover\n20 T2b \n10 Hang snatch*\n\n*Sc: Barbell Progression  \n*Rx: Toes to bar / Barbell (50/30)\n\nTempo sugerido: Performance - Sub 10’",
  },
];

export default function ComponentesQuinta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <NewQuinta
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
