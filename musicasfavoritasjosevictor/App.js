import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PottaOne_400Regular } from '@expo-google-fonts/potta-one';

export default function App() {
  let [fontsLoaded] = useFonts({
    PottaOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Lista de Músicas</Text>

        <FlatList
          data={DadosMusicas}
          keyExtractor={(item) => {
            item.uid.toString();
          }}
          renderItem={({ item }) => (
            <View style={estilo.blocos}>
              <View>
                <Image
                  resizeMode={'contain'}
                  style={estilo.img}
                  source={{ uri: item.img }}
                />
              </View>
              <View style={estilo.textoMusica}>
                <Text>{item.musica} </Text>
                <Text>{item.cantor_banda}</Text>
                <Text>{item.genero}</Text>
                <Text>{item.ano}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    padding: 8,
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 80,
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#836FFF',
    width: 300,
    height: 80,
    marginVertical: 5,
    borderRadius: 5,
  },
  textoMusica: {
    marginLeft: 20,
    maginVertical: 10,
    textAlign:'left',
  },
  titulo: {
    marginVertical: 20,
    fontSize: 30,
    color: 'yellow',    
    fontFamily: 'PottaOne_400Regular',
  },
});
//Array Dadosfilmes
const DadosMusicas = [
  {
    uid: 1,
    musica: 'Arca da Fuga',
    cantor_banda: 'Edson Gomes',
    genero: 'Reggae',
    ano: '2001',
    img: 'https://m.media-amazon.com/images/I/81B8UEROe6L._SS500_.jpg',
  },
  {
    uid: 2,
    musica: 'Buffalo Soldier',
    cantor_banda: 'Bob Marley',
    genero: 'Reggae',
    ano: '2007',
    img:
      'https://slm-assets.secondlife.com/assets/6529251/lightbox/Photo_Walker_bob_Marley_Buffalo_soldier.jpg?1351616262',
  },
  {
    uid: 3,
    musica: 'Just a Dream',
    cantor_banda: 'Nelly',
    genero: 'Hip-hop',
    ano: '2010',
    img:
      'https://public-assets.production.noteflight.com/coverArts/000/000/660/537/dam_asset_image-35968620200606-25838-xz7874.jpg',
  },
  {
    uid: 4,
    musica: 'Diamonds',
    cantor_banda: 'Rihanna',
    genero: 'Pop',
    ano: '2006',
    img: 'https://m.media-amazon.com/images/M/MV5BMTdiMjNmMDYtZTA5MS00OTE2LTg4NDItZGJkOTExZTE1NzQ1XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg',
  },
  {
    uid: 5,
    musica: 'Irreplaceable',
    cantor_banda: 'Beyoncé',
    genero: 'Pop',
    ano: '2001',
    img:
      'https://direct.rhapsody.com/imageserver/images/alb.55349525/500x500.jpg',
  },
  {
    uid: 6,
    musica: 'Uma Chance Por Favor',
    cantor_banda: 'Forro do HF',
    genero: 'Forró',
    ano: '2020',
    img: 'https://i.scdn.co/image/ab67616d0000b2736059ce61f9acef8a1a6c8e4c',
  },
  {
    uid: 7,
    musica: 'Esquema Preferido',
    cantor_banda: 'Os Barões da Pisadinha',
    genero: 'Forró',
    ano: '2021',
    img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/0/0/d/889841589916350.jpg',
  },
  {
    uid: 8,
    musica: 'Numb',
    cantor_banda: 'Linkin Park',
    genero: 'Rock',
    ano: '2003',
    img: 'https://i1.sndcdn.com/artworks-Aa17ty5d1Nd3jGLS-27zUPg-t500x500.jpg',
  },
  {
    uid: 9,
    musica: 'Fade',
    cantor_banda: 'Alan Walker',
    genero: 'Eletronica',
    ano: '2016',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/f/f6/Capa_de_Faded_%28Alan_Walker%29.png',
  },
  {
    uid: 10,
    musica: 'Lonely',
    cantor_banda: 'Akon',
    genero: 'Hip-hop|Reggae',
    ano: '2004',
    img:
      'https://usdb.eu/hosting/song/org/dc2017c8d19fe11415ae4ecfc0a36d6f.jpg',
  },
  {
    uid: 11,
    musica: 'Bacause of You',
    cantor_banda: 'Ne-Yo',
    genero: 'R&B|Soul',
    ano: '2007',
    img:
      'https://img.discogs.com/hPW6eIbPvue2qn3yvvcVqsCZr18=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1088940-1191179587.jpeg.jpg',
  },
  {
    uid: 12,
    musica: 'Coração Machucado',
    cantor_banda: 'Wesley Safadão',
    genero: 'Forró',
    ano: '2015',
    img:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/d/a/5/e/478011509024720.jpg',
  },
  {
    uid: 13,
    musica: 'Loka',
    cantor_banda: 'Anitta & Simone e Simaria',
    genero: 'Sertanejo',
    ano: '2017',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/Capa_de_Loka.jpg/220px-Capa_de_Loka.jpg',
  },
  {
    uid: 14,
    musica: 'Até Você Voltar',
    cantor_banda: 'Henrique e Juliano',
    genero: 'Sertanejo',
    ano: '2014',
    img: 'https://i1.sndcdn.com/artworks-000083226910-epgkha-t500x500.jpg',
  },
];
