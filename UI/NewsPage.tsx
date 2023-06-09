import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f501615931a3413a9a5c6a0985679f88"

type Articles = {
  source: Source,
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String
}

type Source = {
  id: String,
  name: String
}

type AppState = {
  data: Articles[];
  isLoading: boolean;
};

export default class App extends Component {
  state: AppState = {
    data: [],
    isLoading: true,
  };

  async getNews() {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            //keyExtractor={({id}) => id}
            renderItem={({ item }) => (
              <View>
                <Card style={styles.card}>
                  <Card.Content>
                    {item.urlToImage ? (
                      <Image
                        source={{ uri: `${item.urlToImage}` }}
                        style={styles.image}
                      />
                    ) : (
                      <Image
                        source={{ uri: 'https://widodaren.ngawikab.go.id/wp-content/uploads/2020/11/placeholder.png' }}
                        style={styles.image}
                      />
                    )}
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </Card.Content>
                </Card>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginVertical: 12,
    marginHorizontal: 12
  },
  title: {
    fontSize: 15,
    color: 'black',
    marginHorizontal: 4
  },
  description: {
    marginBottom: 12,
    marginHorizontal: 4,
    marginTop: 4
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 12,
    marginHorizontal: 12,
    alignSelf: 'center'
  }
})