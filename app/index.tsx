import { useState } from 'react';
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={{
            uri: "https://www.marcoscapella.com.br/memoji-fistbump.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{marginTop: 16, fontSize: 32, color: "navy", fontWeight: "800"}} >Marcos Filipe Capella</Text>
        <Text style={{margin: 32, fontSize: 18, textAlign: "center"}}>
          Aluno do 4º período de Sistemas para Internet na Universidade Católica de Pernambuco; aluno de Iniciação Científica em Tecnologias Assistivas em Saúde Digital e Aplicações de Inteligência Artificial. Desenvolvedor Web Full-Stack especializado em Angular, JavaSCript/TypeScript, com back-end em Java Spring Boot e Python. Atualmente dedicando-se a desenvolvimento de IA, Ciência de Dados e Aprendizado de Máquina.
        </Text>
      </View>
    </ScrollView>


  );
}
