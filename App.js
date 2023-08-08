import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    StyleSheet,
} from "react-native";
import ModalScreen from "./components/ModalScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "Titre 1",
            details:
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        },
        {
            id: 2,
            title: "Titre 2",
            details:
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        },
        {
            id: 3,
            title: "Titre 3",
            details:
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        },
        {
            id: 4,
            title: "Titre 4",
            details:
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        },
        {
            id: 5,
            title: "Titre 5",
            details:
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        },
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    const addNewTodo = (title, details) => {
        const newTodo = {
            id: todoList.length + 1,
            title: title,
            details: details,
        };
        setTodoList([...todoList, newTodo]);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList
                        data={todoList}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.todoItem}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text
                                    style={styles.details}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.details}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                    <Button
                        title="Add Article"
                        onPress={() => setModalVisible(true)}
                    />
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <ModalScreen
                            onClose={() => setModalVisible(false)}
                            onAdd={addNewTodo}
                        />
                    </Modal>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    todoItem: {
        width: "48%",
        padding: 10,
        // borderWidth: 1,
        // borderColor: "gray",
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        color: "gray",
    },
});

export default App;
