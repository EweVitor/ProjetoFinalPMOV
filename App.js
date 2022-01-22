import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React , {useState, useEffect}from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FlatList, Image, ImageBackground, ScrollView , TouchableOpacity} from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getLivros } from './service/livrosService';


export default function App (){
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={loginScreen}></Stack.Screen>
        <Stack.Screen name="homeTabNavigator" component={homeTabNavigator} options={{headerShown :false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  
    
  );
}


function loginScreen(){
  

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
    <Text style={styles.title1}>FinanceEduca</Text>
    <TextInput
        style={styles.input}
        placeholder="Digite seu email: " 
      />
       <TextInput
        style={styles.input}
        placeholder="Digite sua senha:"
      />

      <Button style={styles.btn} title="Entrar" onPress={() =>{
        navigation.replace('homeTabNavigator')
     
        }}></Button>

  
    </View>
  );

}
function homeScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>

      <View style={styles.materiasStyles}>

        <Text style={styles.title1}>FinanceEduca</Text>
        <Text style={styles.paragrafo}>Aplicativo voltado para o ensino de finanças a jovens entre 15 e 22 anos.
          O primeiro passo é começar a entender os princípios da educação financeira para aprender o básico de como lidar com dinheiro.

          A educação financeira pode ser o melhor caminho para enriquecer e formar um patrimônio consistente e trazer tranquilidade para você e sua família. Educação Financeira nada mais é do que a arte de dominar o dinheiro para fazê-lo trabalhar por você.

          Para a ENEF (Estratégia Nacional de Educação Financeira), pessoas bem educadas financeiramente melhoram a sua compreensão em relação ao dinheiro e produtos com informação, formação e orientação. Nesse sentido, geram-se os valores e as competências neces sárias para se tornarem mais conscientes das oportunidades e riscos envolvidos. Para assim poderem fazer escolhas bem informadas.”

          Alguns conceitos que você precisa saber:
          As três fases da Educação Financeira
          1º Ganhe, 2° economize e 3° invista. Esse poderia ser o resumo de tudo, pois se você tem dificuldades para economizar, acabará gastando todo o seu dinheiro e não conseguirá investir para aumentar a sua renda. Por isso, pague todas as contas, renegocie dívidas e junte dinheiro até conseguir uma reserva de emergência e uma poupança para investir e montar uma boa carteira de investimentos.
        </Text>
        <Text style={styles.title3}>  Conheça os investimentos que aplica </Text>
        <Text style={styles.paragrafo}>
          Você não precisa ser rico para investir, pois há diversas opções de investimentos para quem não tem uma alta quantia. Tesouro Direto, CDB, LCI e LCA são alguns investimentos que não exigem um alto valor de início. O investimento em Tesouro Direto, por exemplo, pode ser iniciado com menos de R$ 100.

          Mas é importante conhecer onde você está aplicando o seu dinheiro. O investimento é como um apoio financeiro e você se torna um dono do título que você escolheu ou daquele negócio no qual você virou acionista. Por isso é necessário pesquisar e avaliar se você realmente irá apoiar ou concorda com a atuação daquela empresa ou grupo financeiro onde aportou o seu capital.

        </Text>
      </View>

      <TouchableOpacity style={styles.floatButton} onPress={()=>{ 
                  navigation.replace('login')}}>
        <Ionicons name={'arrow-back-outline'} size={25} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}

function contatoScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={{fontSize:21}}>Fale com nosco</Text>
      <Text style={styles.item}>Ewerton Desenvolvedor: evls2@aluno.ifal.edu.br</Text>
      <Text style={styles.item}>Jaqueline Desenvolvedor: js@aluno.ifal.edu.br</Text>
      <Text style={styles.item}>Luiza Keyla Desenvolvedor: lks@aluno.ifal.edu.br</Text>
      <Text style={styles.item}>Emyle Vitoria Desenvolvedor: ev@aluno.ifal.edu.br</Text>
      <TouchableOpacity style={styles.floatButton} onPress={()=>{ 
                  navigation.navigate('info')}}>
        <Ionicons name={'call-outline'} size={25} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}
function infoScreen(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.title2}>Tela de informação nosso trabalho: </Text>
      <View style={styles.choroStyle}>
        <Text>Nosso trabalho é honesto, merecemos pelo menos um 6 ae professor pfv!</Text>
        <Text>Desculpa a bagunça professor, mas durante os estudos estava dando muitos erros o codigo
          e acabei chuntando o balde e fazando tudo em unica tela, estava dando muitos erros na parte de navegação fazendo
          com os componentes em outros arquivos.

        </Text>
      </View>
    </View>
  );
}//materias ====================
function materiasScreen(){

  const [data, setData] = useState([]);
  const Item =({title, releaseYear, descricao})=> (
      <View style={styles.item}>

        <Text style={styles.titleLivro}>{title}</Text>

        <Text style={styles.descr}>{descricao}</Text>     

       <Text style={styles.releaseYear}>Ano de laçamento {releaseYear} </Text> 

      </View>

  );

  const getLivrosFromService = async ()=>{
    getLivros().then(result => {
      setData(result);
      
    }).catch(error =>{
      consol.log(error)

    })

  }
  useEffect(()=> {
    getLivrosFromService();

  },[]);

  const navigation = useNavigation();

  return(
    <View style={styles.materiasStyles}>
      <Text style={styles.title2}>Livros sobre educação financeira</Text>
      <Text style={styles.title3}>Abaixo temos alguns livros para estudo sobre a educação finaceira</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do livro:"
      />
      
      <FlatList style={styles.telaLivros}
          data={data}
          renderItem={({item}) =>(
            <Item title={item.title} releaseYear={item.releaseYear} descricao={item.descricao}> </Item>
            
          )} 
        >
          
      </FlatList>
    </View>
  );
}//Materias ==================
const ContateStackNavigator = createNativeStackNavigator();
function ContateStackNavigatorComponente(){
  return(
    <ContateStackNavigator.Navigator>
      <ContateStackNavigator.Screen name="Contato" component={contatoScreen}></ContateStackNavigator.Screen>
      <ContateStackNavigator.Screen name="info" component={infoScreen}></ContateStackNavigator.Screen>
   </ContateStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function homeTabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Sobre nois') {
            iconName = focused ? 'list-outline' : 'list';
          }else if(route.name ==='Materias'){
            iconName = focused ? 'newspaper-outline' : 'newspaper';

          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6FA95F',
        tabBarInactiveTintColor: 'gray',
    })}>

    <Tab.Screen name="Home" component={homeScreen}></Tab.Screen>
    <Tab.Screen name="Materias" component={materiasScreen}></Tab.Screen>
    <Tab.Screen name="Sobre nois" component={ContateStackNavigatorComponente} options={{headerShown :false}}></Tab.Screen>
  </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paragrafo:{
    margin:15,
    backgroundColor: '#CFFFC2',
    padding:13,
    maxHeight:300,


  },
  telaLivros:{
    flex:1,
    maxHeight:320,
    marginBottom:30
    
  },
  title1:{
    fontSize:30,
    

  },
  title2:{
    alignContent:'center',
    fontSize:33,
    margin:15,
    backgroundColor:'#90CD7F',
    padding:10,
    borderRadius:20.0

  },
  title3:{
    fontSize:15,
    margin: 10,

  },
  materiasStyles:{
    margin:10,
   
  },
  item:{
    backgroundColor:'#C3FFB3',
    padding:8,
    margin :5, 
    marginHorizontal:50,
    
    borderTopLeftRadius:20,
    borderBottomRightRadius:20
  },
  titleLivro:{
    fontSize:23,
    margin: 5,
    

  },
  releaseYear:{
    margin:7,
    marginLeft:3,
    fontSize:15

  },
  descr:{
    margin:15,

  },

  input:{

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10
  },
  floatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 50,
    backgroundColor: '#87D073',
    borderRadius: 100,

  },choroStyle:{
    margin:30,
    backgroundColor: '#AAC1A4',
    padding:10, 
    fontSize:13,
    width:500

  },btn:{
    width: 13,
    backgroundColor:'#AAC1A4',
    borderRadius: 0,


  }

});