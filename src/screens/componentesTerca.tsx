import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewTerca from '../screens/NewTerca';

const frequentlyAskedQuestions = [
  
  {
    
    question: 'Terça Feira - treino 1',
    answer: '📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO + ATIVAÇÃO\nFOR TIME:\n30” Straddle D\n30” Straddle E\n30” Seated hamstring\n30” Feet to hands\n\n2 ROUNDS\n20” Mountain climb\n20” Hip thrust D\n20” Hip thrust E\n20” Hip thrust\n\n2 ROUNDS\n15” Stead pike D/E\n15” Stead pike hold\n15” Straddle pike D/E\n15” Straddle pike hold\n\n🟡TÉCNICA - TOES TO BAR\nPartiner v-up (1,2,3…)\nWall v-up\nPosição de Hollow 3” (box)\nPosição de Arch 3” (box)\nHollow, Arch, hollow (box)\nHollow, Arch, hollow (1 pé na box)\nBeat swing curto e conectado (objeto nos pés)\nBeat swing com potência e abmat nos pés.\n\n🟡ATIV. PARTINER DEADLIFT\n3 - 3 - 3\n\n🟡WOD (mg)\nFOR TIME: (Cap: 15’)\nDUPLAS\n3 ROUNDS\n400m run\n30 T2b\n20 Partiner deadlift*\n\n*Sc: Barbell (progression)\n*Rx: Barbell (100/70)',
  },
  {
    question: 'Terça Feira - treino 2',
    answer:
      "📍TERÇA-FEIRA\nMOBILIDADE TORÁCICA\n🟡AQUECIMENTO:\nA CADA 30” POR 2’:\nD.u / Tentativas D.u\nDu Crossover / Crossover\n\nA CADA 30” POR 2’:\nModified rope climb\nToes to rope\n\nA CADA 30” POR 2’:\nKb windmil\nKb swing unilateral\n\n🟡TÉCNICA\nSc:\nROPE CLIMB (Traga seu meião)\nSc: S Wrap / Fast J Wrap / Secure J Wrap\n\nRx:\n3x4 Rope pulling\n3x6 Rope strict pull up (3 D/E)\n3x20” L-sit rope climb (10” D/E)\n\n🟡Wod(mgw)\n4 ROUNDS de 1’ EMOM - 10”REST\nMáx. Cal Row / Cal Bike\nMáx. Rope climb / Adaptado (link abaixo)\nMáx. Kb swing (24/16)\nMáx. Du crossover / D.u ou tentativas",
  },
  {
    question: "Terça Feira - treino 3",
    answer:
      "📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nAMRAP IN 3’:\n30” Hands on shoulder stretch\n30” Butchers block stretch\n30” Couch stretch D\n30” Couch stretch E\n30” Pigeon pose box D\n30” Pigeon pose voz E\n\nRest 10”\n\nAMRAP IN 3’:\n10 Barbell elbow punch\n10 Muscle clean\n10” Pause front squat\n\nRest 10”\n\nAMRAP IN 3’:\n10 Toe touch with jump\n10 Box step up\n10 Box reverse hyper\n\n🟡FORÇA - 3 POSITION CLEAN (HIGH HANG, HANG, FLOOR)\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2× (80% 85%)\nNo 7° round: 1× (90%)\n\n🟡TÉCNICA - BURPEE\n\n🟡WOD (gwm)\nFOR TIME: (Cap 14’)\n6 ROUNDS\n12 Box jump\n9 Burpee\n6 Power clean*\n\n*Sc: Barbell (progression)\n*Rx: Barbell (65% - 70%)",
  },
  {
    question: "Terça Feira - treino 4",
    answer:
      "📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\n2 ROUNDS\n10 Sprawl\n20 Plank shoulder taps\n30” Child's pose\n\n10 Pike push up\n20 Up and down plank\n30” Downward facing dog\n\n10 Plate thruster\n20” Handstand hold / Wall Climb\n30” Wall downdog\n\n🟡TÉCNICA - HSW\nSc:\nProgressões\nHold chest to wall + Hold alt. pernas;\nHold chest to wall alt. braços + Hold andar lateral;\nHold entrada bx, afastado da parede (tesoura);\nHold e dar uns passinhos.\n\n🟡ATIV. DEVIL PRESS\n\n🟡WOD (mg)\n4 ROUNDS de 1’ REST de 10”\n15 Cal row/bike\n10 Devil press (22,5/15)\n15 Wall ball (20/14 lb)\n10m Hsw / 2 Wall walk",
  },
  {
    question: "Terça Feira - treino 5",
    answer:
      "📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nEMOM 8’:\n5 Downward dog to plank + 10 Sprawl\n10 Bird dog + 5 Kb sdhp\n5 Scorpion + 10 Kb single leg deadlift (D/E)\n10 Bulgarian row + 5 Kipping pull over\n\n🟡FORÇA - DEADLIFT\nA cada 1'30 (6 ROUNDS):\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 75%)\nNo 5° e 6° round: 2x (80% 90%)\n\nENTRE AS SÉRIES DE DEADLIFT\n3x 12 a 15 reps Cadeira flexora\n3x 8 Flexão nórdica\n\n🟡ATIV. PULL UP/ BMU\n\n🟡WOD (gw)\nFOR TIME: (Cap 14’)\n6 ROUNDS\n3 Bmu / 6 Pull up\n6 Burpee\n9 Deadlift*\n\n*Sc: Barbell progression\n*Rx: Barbell (80/55)",
  },
  {
    question: "Terça Feira - treino 6",
    answer:
      "📍TERÇA-FEIRA\nESTABILIDADE LOMBAR\n🟡AQUECIMENTO\nTABATA (2x)\nPlate pop squat\nPlate squat driver the bus\nPlate bent over row\nPlate floor chest press\nCrunch plate overhead\nPlate deadlift\n\n🟡FORÇA - DEADLIFT\nA cada 1'30 (6 rounds)\nNo 1° e 2° round: 5x (50% 60%)\nNo 3° e 4° round: 3x (70% 80%)\nNo 5° e 6° round: 2x (85% 90%)\n\n*NOS ROUNDS PARES DE DEADLIFT\n3x 12 a 15 reps Cadeira flexora\n3× 8 Flexão nórdica\n\n🟡TÉCNICA:\nERGÔMETROS\n\n🟡WOD (wm)\n4 ROUNDS de 1’ EMOM - 10” REST\n15 Cal row/bike\n10 Deadlift*\n15 Wall ball (20/14 lb)\n10 Bench press (22,5/15)\n\n*Sc: Barbell progression\n*Rx: Barbell (90/65)",
  },
  {
    question: "Terça Feira - treino 7",
    answer:
      "📍TERÇA-FEIRA\nMOBILIDADE E EST. DE OMBRO\n🟡AQUECIMENTO GERAL:\n2 ROUNDS:\n10 Plate jack\n20 Plate mountain climb\n10 Push up on plate\n20 Plate russian twist\n10 Plate toes touch\n20 Plantar flexion\n\nESPECÍFICO:\n2 ROUNDS:\n6 Muscle clean\n3/3 Shoulder press (front/back)\n3/3 Push jerk (front/back)\n3/3 Split jerk (front/back)\n\n🟡FORÇA - STOH\nA cada 2’ (5 rounds)\n2x - 2 Push jerk + 1 Split jerk\n(50% 60% 70% 75% 80%)\n\n🟡TÉCNICA\nDOUBLE UNDER\n\n🟡WOD (mg)\nFOR TIME: (Cap 14’)\n6 ROUNDS\n40 D.u / Tentativas D.u\n15 Abmat sit-up\n9 Stoh*\n\n*Sc: Barbell progression\n*Rx: Barbell (55% - 60%)\n\nTempo sugerido: Performance - Sub 11’",
  },
  {
    question: "Terça Feira - treino 8",
    answer:
      "📍TERÇA-FEIRA\nMOBILIDADE + AQUECIMENTO\n🟡AQUECIMENTO 9’\nA CADA 30` POR 3`\n30` The scorpion\n30` Cuff stretch D\n30` Cuff stretch E\n30` Cross behind the back\n30` Back stretch\n30` Bottom squat rotation\n\nA CADA 30` POR 3`\n30` D.u\n30` Cross over\n30` Kang squat\n\nA CADA 30` POR 3`\n30` Clean high pull\n30` Muscle clean\n30` Elbow punch\n\n🟡FORÇA - CLEAN\nA cada 1`30 (6 rounds)\n2 Hang clean + 1 Squat clean\n1°: 2x (50%)\n2°: 2x (60%)\n3°: 2x (70%)\n4°: 2x (80%)\n5°: 2x (85%)\n\n🟡TÉCNICA\nDOUBLE UNDER\n\n🟡WOD (m)\nFOR TIME: (Cap 16’)\nBuy in: 100 D.u / Tentativas D.u\n5 ROUNDS\n15 Row sit up\n12 Wall ball\n9 Power clean\nCash out: 100 D.u / Tentativas D.u\n\n*Sc: Barbell progression\n*Rx: Barbell (50%)\n\nTempo sugerido: Performance - Sub 12’",
  },
  {
    question: "Terça Feira - treino 9",
    answer:
      "📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\n🟡 AMRAP: 9’\nA CADA 20‘ POR 3‘\n20‘Overhead activation\n20‘ T Hip opener D\n20‘ T Hip opener E\n20‘ Ankle Mobilization D\n20‘ Ankle Mobilization E\n20‘ Bottom squat\n20‘ Bottom squat full rotation\n20‘ Bottom squat transfer\n20‘ Squat to stand\n\nA CADA 30‘ POR 3‘\n30‘ D.u \n30‘ Cross over \n30‘ Kang squat\n\nA CADA 30‘ POR 3‘\n30‘ Front squat \n30‘ Push press \n30‘ Thruster\n\n🟡FORÇA - THRUSTER (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\n🟡TÉCNICA\nCROSSOVER (Desbloquear S.u e limpar D.u)\n\n🟡WOD(m)\nTREINO EM DUPLAS\n15‘ AMRAP\nA- 21 D.u Crossover / 21 Crossover  \nB - 15 Kb swing (24/16)\nA - 9 Thruster*\n\n*Barbell (UNBROKEN).",
  },
  {
    question: "Terça Feira - treino 10",
    answer:
      "📍TERÇA-FEIRA\n🟡 MOBILIDADE E AQUECIMENTO\nFOR TIME:\n30‘ Overhead activation\n30‘ Downward facing dog\n30‘ Downward facing dog to cobra\n30‘ Prayer stretch D\n30‘ Prayer stretch E\n30‘ Cat and cow\n30‘ Bottom squat\n30‘ Bottom squat full rotation\n\n2 ROUNDS\n20 Box step up  \n15 Box ghd sit-up (partner)\n15 Box back extension\n10 Diamond push up\n\n🟡TÉCNICA - PULL UP E C2B.\nEMOM 12‘\n1° 7 a 10 Weighted strict pull up;\n2° 12x Bent over barbell row;\n3° Bíceps curl 21 (7/7/7)\n4° Rest\n\n🟡WOD(g)\nFOR TIME: (Cap: 15‘)\n4 ROUNDS  \nGym*\n12 Db box step over (22,5/15)\n9 Db squat \n6 Devil press\n\nSc e Rx: Trocar o ginástico a cada round\n15 Pull up / Ring row \n12 C2b / Pull up \n9 Bmu / Cb2 \n6 Pull over / Kipping bar \n\nTempo sugerido: Performance - Sub 12‘",
  },
  {
    question: "Terça Feira - treino 11",
    answer:
      "📍TERÇA-FEIRA\n EST. DA LOMBAR\n🟡AQUECIMENTO\nTABATA 1:\nJump squat\nKb lunge with twist \nKb curtsy squat\n\nTABATA 2: \nKb stiff\nKb sdhp\nKb russian twit\n\n🟡FORÇA - SUMO DEADLIFT (PR)\n6-15/20\n5-50%\n4-70%\n3-80%\n2-90%\n1-100%\n1-\n1-\n1-\n\nEntre as séries: \n3x 12 a 15 reps Cadeira flexora\n3x 8 reps Flexão nórdica\n\nWOD EM DUPLAS : (Cap 25’) \nKettlebell Single Arm Farmers Walk, a proposta aqui é caminhar 100m com Kb, caso não tenha como fazer, enquanto um faz o outro seguro o Kb e troca a cada quebra. \n\nChegou trocou\n80 Wall ball (20/14lb)\n70 Hand release push up\n60 Tuck up\n50 Burpee\n60 V-Up\n70 Deadlift (70/45)\n80 Lunge",
  },
  {
    question: "Terça Feira - treino 12",
    answer:
      "📍TERÇA-FEIRA\n🟡MOBILIDADE + AQUECIMENTO\nTABATA 1: \nRussian baby maker\nGroiner\nBarbell elbow punch\nBack rack elbow punch\n\nTABATA 2:\nSprawl over the bar \nGood morning \nMuscle clean \nClean drop \n\n🟡FORÇA - SEGMENT CLEAN (2-3‘)*\nA cada 1’30 por 9’: (6 rounds) \n(50% 60% 65% 70% 75 % 80%)\n\n*(POWER OR SQUAT POSITION)\n\n🟡TÉCNICA\nKB SWING AMERICANO X RUSSO\n\n🟡Wod(wm)\nFOR TIME: (Cap 16’)  \n2 ROUNDS\n200m run\n15 Kb swing (24/16)\n9 Power clean* \n\n*Add 5/2.5. \n\n2 ROUNDS\n200m run\n15 Kb swing (24/16)\n9 Power clean*\n\n*Add 5/2.5 kg.  \n\n2 ROUNDS\n200m run\n15 Kb swing (24/16)\n9 Power clean*\n\n*Sc: Kb russo / Barbell (progression) \n*Rx: Kb americano/ Barbell (50% 55% 60%)",
  },
];

export default function ComponentesTerca() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <NewTerca
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
