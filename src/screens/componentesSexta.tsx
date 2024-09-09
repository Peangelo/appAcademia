import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewSexta from './NewSexta';

const frequentlyAskedQuestions = [
  
  {
    
    question: 'Sexta feira - treino 1',
    answer: "📍SEXTA-FEIRA\nMOBILIDADE DE OMBRO\n🟡AQUECIMENTO\nAMRAP 6’\n30 D.u / Tentativas du\n30” Plank\n20 Crossover / Tentativas crossover\n30” Plank\n10 Du crossover\n30” Plank\n5 Complex (1 clean + 2 deadlift + 1 hang clean).\n\n🟡FORÇA - G-R-I-P COMPLEX LADDER\nEMOM 12’:\n1’ : 1 clean + 2 deadlift + 1 hang clean\nTiebrake: Máx deadlift.\nStarting with 50/30 kg and add 5/2.5 kg every round.\n\n🟡TÉCNICA\nDOUBLE UNDER (PR)\n\n🟡WOD (m)\n4 ROUNDS de 2'30\nBy in: 50 D.u / Tentativas de D.u\n3-6-9-12…\nHang clean*\nBurpee\n*Sc: Barbell (progression)\n*Rx: Barbell (50%)",
  },
  {
    question: 'Sexta feira - treino 2',
    answer:
      "📍SEXTA-FEIRA\nMOBILIDADE DE OMBRO E TORÁCICA\n🟡AQUECIMENTO GERAL:\n2 ROUNDS:\n10 Jumping jacks\n20' Dead hang\n10 Squat jacks\n20' Scapular pull up\n10 Split squat jacks\n20' Beat swing\n\nESPECÍFICO:\n2 ROUNDS:\n6 Muscle clean\n3/3 Shoulder press (front/back)\n3/3 Push jerk (front/back)\n3/3 Split jerk (front/back)\n\n🟡FORÇA - S.T.O.H\nA cada 1'20 (8 ROUNDS):\nPUSH PRESS\n5× (50%)\n3× (55%)\n2× (60%)\n\nPUSH JERK\n2×3 (70% -75%)\n2×2 (80% - 85%)\n\nSPLIT JERK\n1×1 (90%)\n\n🟡TÉCNICA\nPULL UP — C2B\n\n🟡WOD (g)\nFOR TIME : (Cap 12’)\n4 ROUNDS\n15 Med ball sit-up\n12 C2b / Pull up\n9 Stoh *\n\n*Sc: Barbell (progression)\n*Rx: Barbell (55% - 60%)",
  },
  {
    question: "Sexta feira - treino 3",
    answer:
      "📍SEXTA-FEIRA\nMOBILIDADE + AQUECIMENTO \n🟡AQUECIMENTO\n TABATA 1: (1x) \nStraddle D\nStraddle E\nSeated hamstring D \nSeated hamstring E\n Medball thoracic \nMedball shoulder mobility\n\nESPECÍFICO\nTABATA 2: (2x)\nMed ball side wall toss D\nMed ball side wall toss E\nMed ball underhand scoop toss\nMed ball push up pass\nMed ball russian twist \nMed ball glute bridges\n\n🟡TÉCNICA\nAtivação CORE (Arch + Hollow);\nSaída na parede;\nSaída na barra;\nSaída em L-Sit;\nSaída em L-Sit + Arch;\nSolo (Joelho no peito);\nSaída em L-Sit + joelho + ativ. dorsal;\nKipping bar com joelho no peito.\n\n🟡  ATIV. DEADLIFT \n3 - 3 - 3 \n\n🟡Wod (g)\nFOR TIME: (Cap 13’)\n5 ROUNDS\n12 Burpee \n9 Deadlift (body weight)*\n6 Bmu / Progressão\n\n*Barbell (body weight)",
  },
  {
    question: "Sexta feira - treino 4",
    answer:
      "📍SEXTA-FEIRA\n🟡 MOBILIDADE + AQUECIMENTO \nAMRAP 4’\n20” Prayer stretch\n20” Puppy pose stretch\n20” Sphinx pose stretch\n20” Straddle D\n20” Straddle E\n20” Seated hamstring\n20” Seated single leg raise D\n20” Seated single leg raise E\n20” Seated leg raise  \n\nESPECÍFICO:\n2 ROUNDS: \n6 Hang muscle clean\n3/3 Shoulder press (front/back)\n6 Hang squat clean \n3/3 Push jerk (front/back)\n\n🟡FORÇA - HANG CLEAN &JERK\nA cada 1'30 por 9': (6 rounds)\n1 Hang clean +  Front squat + 1 Jerk + Hang clean & jerk. \n(50% 60% 70% 75 % 80% 85%)\n\n🟡ATIV. TOES TO BAR \n\n🟡WOD (g)\nFOR TIME: (Cap 13’)\n5 ROUNDS \n12 Kb swing russo (24/16)\n9 T2b / Knee to elbows / Toes raises \n6 Hang clean and jerk*\n\n*Sc: Barbell (progression) \n*Rx: Barbell (60/40)",
  },
  {
    question: "Sexta feira - treino 5",
    answer:
      "📍SEXTA-FEIRA \n🟡MOBILIDADE + AQUECIMENTO\n🟡FORÇA - COMPLEX \nA cada 1'30 (6 rounds)\n3 Deadlift + 2 Hang clean + 1 Front squat \n(50% 60% 70% 75 % 80% 85%)\n\n🟡TÉCNICA  \nBURPEE OVER THE BAR \n\n🟡WOD (wm)\nFOR TIME: (Cap 14’)\n4 ROUNDS \n100m run \n5 Hang squat clean**\n5 Burpee over the bar \n\n*A cada round aumentar 100m de run + 5 reps de cada movimento. \n\n**Sc: Barbell progression  \n**Rx: Barbell (60/35)",
  },
  {
    question: "Sexta feira - treino 6",
    answer:
      "📍SEXTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO \n🟡AQUECIMENTO\nA CADA 30' POR 3' \n30' D.u / tentativas\n30' Barbell stiff\n30' Mobility \n\nA CADA 30' POR 3'\n30' D.u crossover / Tentativas\n30' Barbell row\n30' Mobility \n\nA CADA 30' POR 3'\n30' Back rack elbow punch\n30' Good morning\n30' Tall clean \n\n🟡FORÇA - SQUAT CLEAN \nA cada 1'20 (7 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%) \nNo 7° round: 1x (90%) \n\nENTRE AS SÉRIES DE CLEAN:\n3x 12 a 15 reps Cadeira extensora\n3x 12 Afundo\n\n🟡TÉCNICA \nDOUBLE UNDER CROSSOVER \n\n🟡Wod (wm)\n5 ROUNDS de 2’ REST de 1’ \n20 Du Crossover / D.u\n10 Devil press (22,5/15)\nMáx. Squat clean*\n\n*Sc: Barbell progression \n *Rx: Barbell (50%)",
  },
  {
    question: "Sexta feira - treino 7",
    answer:
      "📍SEXTA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO \nTABATA 1: (2x)\nActive hinge\nWall triceps stretch (D/E)\nTurn back stretch (D/E)\nLower pec stretch (D/E)\nStanding cuff stretch (D/E)\nFull side stretch (D/E) \n\nTABATA 2: (2x) \nD.u / Tentativas D.u \n  Good morning \nMuscle clean \nClean drops \nHollow rock\n Superman \n\n🟡 FORÇA - 3 POSITION CLEAN\nA cada 1'30 (6 rounds):\n(HIGH HANG, HANG, FLOOR)\n(50% 60% 70% 75% 80% 85%) \n\n🟡TÉCNICA - CHEST TO BAR PULL UP  \n\n🟡WOD (mg)\nFOR TIME: (Cap 15’)\n5 ROUNDS \n21 D.u / Tentativas D.u \n 15 C2b / Pull up\n9 High hang clean \n\n*Sc: Barbell progression  \n*Rx: Barbell (50% - 55%)\n\nTempo sugerido: Performance - Sub 12’ TREINO 1\nAMRAP 40’\n20 Cal Bike\n20 Tuck Up \n15 KB Swing Russo \n15 Air Squat\n10 Cal Row\n10 Burpee\n100 S.U / 50 D.U TREINO 2\nAMRAP 20’\n400m Run\n40'' Wall sit \n20 Abmat Sit Up\n10 V-Up\n\nFOR TIME 20’\n21-15-9\nCal Bike\nSprawl \nCal Row",
  },
  {
    question: "Sexta feira - treino 8",
    answer:
      "📍SEXTA-FEIRA\nESTABILIDADE DE ESCÁPULA E LOMBAR \n🟡AQUECIMENTO\nGERAL: \nAMRAP IN 1’ Máx D.u\nAMRAP IN 1’ Máx. Crossover\nAMRAP IN 1’ Máx. D.u crossover\n\nESPECÍFICO \nTABATA (2x): \nStiff\nSdhp \nHip thrust \nHollow rock \nArch rock \n\n🟡FORÇA - SUMO DEADLIFT \nA cada 1'20 (6 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\n\nNOS ROUNDS PAR DE\nDEADLIFT: \n3x 12 a 15 reps Cadeira flexora\n3× 8 Flexão nórdica\n\n🟡 ATIV. BMU  / C2b / Pull up \n\n🟡WOD (mgw)\nFOR TIME: (Cap \n3 ROUNDS\n 21 D.u crossover / 42 Crossover\n15 Deadlift*\n9 C2b / Pull up \nBarbell: Add. 5kg \n\n3 ROUNDS \n 15 D.u crossover / 30 Crossover \n 9 Deadlift* \n6  Bmu / C2b \n\n*Sc: Barbell progression  \n*Rx: Barbell (80/55 - 90/65 Kg)\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Sexta feira - treino 9",
    answer:
      "📍SEXTA-FEIRA\nMOBILIDADE + AQUECIMENTO\n🟡FORÇA - FRONT SQUAT  \nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\n\n🟡ATIV. GYM \nSc: T2B / PULL UP / C2B\n\nRx: COMPLEX GYM TCB  \n2 BMU + 4 C2B + 6 TOES TO BAR\n\n🟡WOD (gwm)\n4 ROUNDS de 1’ EMOM - 10” REST\n10 T2b / Pull up / C2b / Bmu\n15 Front squat*\n10 Burpee to target \nMáx. ergometros (Bike/Row) \n\n*Trocar o movimento ginástico cada round *\n\nSc: Barbell progression  \n*Rx: Barbell (60/35)",
  },
  {
    question: "Sexta feira - treino 10",
    answer:
      "📍SEXTA-FEIRA\nMOBILIDADE DE QUADRIL \n🟡AQUECIMENTO\nAMRAP 7'\n5 Rack delivery \n10 Elbow punches\n5 Front squat\n10 Box step over\n5 Tríceps box \n10 Row sit-up\n\n🟡FORÇA - COMPLEX CLEAN \nA cada 1’30 (5 ROUNDS):\nClean + 2 Front squat +  Hang squat clean*\n(50% 60% 65% 70% 75% 80%)\n\nNOS ROUNDS PAR DE SQUAT CLEAN:\n3x 12 a 15 reps Cadeira extensora\n3x 12 reps Búlgaro \n\n🟡TÉCNICA\nRING DIP\n\n🟡WOD (mg)\n4 ROUNDS de 1’ EMOM - 10” REST’\nMáx. ergometros (Bike/Row) \n10 Ring dip / Box dip \n15 Box jump / 20 Box step up  \n10 Squat clean* \n\n*Sc: Barbell (40/25) \n*Rx: Barbell (60/35)",
  },
  {
    question: "Sexta feira - treino 11",
    answer:
      "📍SEXTA-FEIRA\n🟡 MOBILIDADE E AQUECIMENTO\nAMRAP 4’ \n30” Bent over lock rotations\n30” Crossed side to side\n30” Cossack squat \n30” The ball\n30” The sagittarius D\n30” The sagittarius E \n30” Hip bridge \n30” Bottom squat\n\n2 ROUNDS\n4 Broad jump \n6 Kb deck squat \n8 Kb windmil (4/4)\n10 Kb single arm deadlift (5/5)\n12 Kb russian twsit\n\n🟡FORÇA - DEADLIFT\nA cada 1'30 (5 rounds)\n1°: 6 Reps (50%)\n2°: 5 Reps (60%)\n3°: 4 Reps (70%)\n4°: 3 Reps (80%)\n5°: 2 Reps (85%)\n\nNO ROUND ÍMPAR :\n3x 12 a 15 reps Cadeira flexora\n3x 8 reps Flexão nórdica\n\n🟡TÉCNICA \nPLIOMETRIA\n\n🟡WOD (gw)\nFOR TIME: (Cap 15’)\n10 ao 1\nBurpee box jump\nDeadlift* \n10 Kb swing unilateral (24/16)\n\nSc: Barbell: Progression  \nRx: Barbell: (80/55)\n\nTempo sugerido: Performance - Sub 13’",
  },
  {
    question: "Sexta feira - treino 12",
    answer:
      "📍SEXTA-FEIRA\nMOBILIDADE DE QUADRIL \n🟡 AQUECIMENTO GERAL:\n(Bring sally up, bring sally down)\n\n🟡 AQUECIMENTO ESPECÍFICO\n2 ROUNDS\n15 Box ghd sit-up (partner)\n15 Box back extension\n\n🟡FORÇA - BACK SQUAT  \nA cada 1'30 (6 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 85%)\n\nNO ROUND PAR :\n4x 12 Reps (110 kg?) \n\n🟡ATIV. COMPLEX KB e SQUAT CLEAN\n\n🟡WOD (w)\nFOR TIME: (Cap 15’) \n5 ROUNDS \n12 Kb oh lunge \n9 Kb swing \n6 Kb globet squat \n3 Hang squat clean, próximo round 6, 9, 12, 15. \n\nSc: Kb e barbell progression \n  Rx: Kb (24/16) / Barbell (50% - 55%) \n\nTempo sugerido: Performance - Sub 12’ TREINO 1\n\nRX/Performance\nAMRAP 45'\n\n21-15-9\nMedball Sit Up\nStoh Progression\nCal Bike \n\nA cada round completo (21-15-9) \n30 Cal Row\n\nSC/Adaptado\nAMRAP 40'\n\n21-15-9\nAbmat Sit Up\nDuo DB STOH\n10 Cal Bike \n\nA cada round completo (21-15-9) \n23 Cal Row\n\nGestantes/Lactantes\nAMRAP 35'\n\n21-15-9\nLateral Crunch  \nLight Duo DB Shoulder Press\n6 Cal Bike\n\nA cada round completo (21-15-9) \n30 Toes Touch TREINO 2\n\nRX/Performance\n\nAMRAP \n10 Rounds \n3'on/30'off\n\n100m Run Sprint\n10 SDHP\n10 Pyke Push Up \n7 Burpe Box Jump \n4 Cal Bike Sprint\n\nSC/Adaptado \n\nAMRAP\n10 Rounds\n3'on/30'off\n\n100m Run Sprint\n10 SDHP\n20' Pyke Position Hold \n7 Burpe Box Step Up\n4 Cal Bike Sprint\n\nGestantes/Lactantes\n\nFOR TIME \n7 Rounds\n\n3 Stair Climb\n10 Sumo Deadlift\n10 Z Press \n7  Plate Step Up\n 4 Cal Bike TREINO 3 (Fortalecimento)\n\nRX/Performance\n\nEMOM 20'\n4 Rounds\n\n1' DB Kang Squat \n1' Touch The Water \n1' Elevation Siting 90⁰\n1' Defict DB Stiff\n1' Plantar Flexion\n\nSC/Adaptado\n\nEMOM 20'\n4 Rounds\n\n1' DB Kang Squat \n1' Touch The Water \n1' Elevation Siting 90⁰\n1' Defict DB Stiff\n1' Plantar Flexion\n\nGestantes/Lactantes\n\nEMOM 20'\n4 Rounds\n\n1' DB Kang Squat \n1' Touch The Water\n 1' Elevation Siting 90⁰\n1' Defict DB Stiff\n1' Plantar Flexion",
  },
];

export default function ComponentesSexta() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <NewSexta
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
