import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Pressable
} from 'react-native';

const Dashboard = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView>
            <Text style={styles.title}>Kim Chae-won</Text>
            <View>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Kim_Chaewon_LE_SSERAFIM_220923.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.description}>
                    Kim Chae-won adalah seorang penyanyi asal Korea Selatan.
                    Ia adalah pemimpin dari grup idola wanita Le Sserafim.
                    Ia berada di bawah kontrak Source Music, anak perusahaan dari Hybe Corporation.
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('NewsPage')
                    }>
                    <Text style={styles.buttonTextColor}>Move to News Page</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('About')
                    }>
                    <Text style={styles.buttonTextColor}>Move to about page</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 12,
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 12,
        marginHorizontal: 12,
        alignSelf: 'center'
    },
    description: {
        marginHorizontal: 12,
        textAlign: 'justify',
        color: 'black'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        marginTop: 12,
        backgroundColor: 'black'
    },
    buttonTextColor: {
        color: 'white'
    }
})

export default Dashboard