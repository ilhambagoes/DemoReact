import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';

const Dashboard = () => {
    return (
        <ScrollView>
            <Text style={styles.title}>Kim Chae-won</Text>
            <View>
                <Image
                    source={{ uri: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/05/07/Kim-Chaewon-3749888166.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.description}>
                    Kim Chae-won adalah seorang penyanyi asal Korea Selatan. 
                    Ia adalah pemimpin dari grup idola wanita Le Sserafim. 
                    Ia berada di bawah kontrak Source Music, anak perusahaan dari Hybe Corporation.
                </Text>
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
    }
})

export default Dashboard