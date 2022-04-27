import React from 'react';
import { View, Text, Linking, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { CustomButtonProgress } from '../../Components/CustomButtom';
import { Skills } from '../../Components/Skills';

import styles from './styles'

function AbrirYoutube() {
    var channelId = 'UCGyyQGmPjRe94vZ60wm42Mw'
    return (
        Linking.canOpenURL('vnd.youtube://channel/' + channelId).then(supported => {
            if (supported) {
                return Linking.openURL('vnd.youtube://channel/' + channelId);
            } else {
                return Linking.openURL('https://www.youtube.com/channel/' + channelId);
            }
        })
    )
};

function AbrirGitHub() {
    Linking.openURL('https://github.com/cl3i550n');
};

function AbrirLinkedIn() {
    Linking.openURL('https://www.linkedin.com/in/cleisson-andrade-514096207/');
};

function AbrirEmail() {
    Linking.openURL('mailto:cleisson@outlook.com.br');
};

export default props => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.imgPerfil}
                    source={require('../../Assets/Img/cl3i550n.jpg')}
                />
                <Text style={styles.textImg}>
                    Cleisson Andrade Silva{'\n'}24 Anos, Brasilia - DF{'\n'}
                    React Native Developer
                </Text>
            </View>
            <View style={styles.buttonRow}>
                {/* <Text style={{alignSelf: 'center', color: '#fff'}}>Redes Sociais</Text> */}
                <CustomButtonProgress
                    onPress={next => {
                        setTimeout(() => {
                            AbrirYoutube();
                        }, 1200);
                        next();
                    }}
                    iconName='youtube'
                    backgroundColor='#ff0000'
                    height={35}
                    width={35}
                />
                <CustomButtonProgress
                    onPress={next => {
                        setTimeout(() => {
                            AbrirGitHub();
                        }, 1200);
                        next();
                    }}
                    iconName='github'
                    backgroundColor='#161b22'
                    height={35}
                    width={35}
                />
                <CustomButtonProgress
                    onPress={next => {
                        setTimeout(() => {
                            AbrirLinkedIn();
                        }, 1200);
                        next();
                    }}
                    iconName='linkedin'
                    backgroundColor='#0a66c2'
                    height={35}
                    width={35}
                />
                <CustomButtonProgress
                    onPress={next => {
                        setTimeout(() => {
                            AbrirEmail();
                        }, 1200);
                        next();
                    }}
                    iconName='envelope'
                    backgroundColor='#5f0f40'
                    height={35}
                    width={35}
                />
            </View>
            <View style={styles.containerPortifolio}>
                <Text style={styles.textHeader}>
                    Habilidades!
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Skills
                            iconName={'react'}
                            iconSize={30}
                            iconColor='#06BCEE'
                            textSkill='React Native'
                        />
                        <Skills
                            iconName={'js'}
                            iconSize={30}
                            iconColor='#FCDC00'
                            textSkill='JavaScript'
                        />
                        <Skills
                            iconName={'html5'}
                            iconSize={30}
                            iconColor='#E54C21'
                            textSkill='HTML 5'
                        />
                        <Skills
                            iconName={'css3-alt'}
                            iconSize={30}
                            iconColor='#396DBF'
                            textSkill='CSS'
                        />
                    </View>
                    <View>
                        <Skills
                            iconName={'vuejs'}
                            iconSize={30}
                            iconColor='#41B883'
                            textSkill='VueJS'
                        />
                        <Skills
                            iconName={'angular'}
                            iconSize={30}
                            iconColor='#C3002F'
                            textSkill='AngularJS'
                        />
                        <Skills
                            iconName={'yarn'}
                            iconSize={30}
                            iconColor='#2C8EBB'
                            textSkill='Yarn Package Manager'
                        />
                        <Skills
                            iconName={'npm'}
                            iconSize={30}
                            iconColor='#FFF'
                            textSkill='Node Package Manager'
                        />
                    </View>
                </View>
                <Text style={styles.textHeader}>
                    Experiencias!
                </Text>
                <Text style={styles.textInfo}>
                    RaiaDrogasil - RD – São Paulo{'\n'}
                    Desenvolvedor Mobile Junior{'\n'}
                    Front-end & Back-end{'\n'}
                    Inicio: Abril / 2021 - Atual

                </Text>
                <Text style={styles.textHeader}>
                    Certificados!
                </Text>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <View>
                            <Image
                                style={styles.schoolLogo}
                                source={require('../../Assets/Img/SchoolOfNet.jpg')}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                            <Text style={styles.titleCertif}>Titulo A</Text>
                            <Text style={styles.subTitleCertif}>School Of Net</Text>
                            <Text style={styles.subTitleCertif}>Titulo C</Text>
                            <Text style={styles.subTitleCertif}>Titulo D</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};