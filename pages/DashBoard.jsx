import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import CheckBox from 'expo-checkbox';

const user_image = require("../resources/Franklin.png")
const clock_image = require("../resources/clock.png")
const addBtn_image = require("../resources/addBtn.png")

function Task({ text }) {

    let mark = false;
    return (
        <View style={styles.task}>
            <CheckBox />
            <Text style={styles.taskText}>{text}</Text>
        </View>
    );
};

export default function DashBoard({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={user_image}></Image>
                <Text style={styles.headerText}>Welcome Franklin</Text>
            </View>
            <View>
                {/* Clock Area */}
                <View style={styles.clockArea}>
                    <Text style={styles.clockText}>Good Afternoon</Text>
                    <Image source={clock_image}></Image>
                </View>

                {/* Tasks Area */}
                <View>
                    <Text style={styles.tasksHeading}>Tasks List</Text>
                    <View style={styles.taskBox}>
                        <View style={styles.taskHeader}>
                            <Text style={styles.taskHeading}>Daily Tasks</Text>
                            <TouchableOpacity onPress={() => console.log("Task Added")}>
                                <Image style={styles.addBtn} source={addBtn_image}></Image>
                            </TouchableOpacity>
                        </View>
                        {/* Tasks */}
                        <FlatList style={styles.taskList}
                            data={[
                                {taskName: "Go to school"},
                                {taskName: "Go to school"},
                                {taskName: "Go to school"},
                                {taskName: "Go to school"},
                            ]}
                            renderItem={({item}) => <Task text={item.taskName} />}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#9CD0C9',
    }, 
    header: {
        display: 'flex',
        backgroundColor: 'rgba(24, 155, 145, 1)',
        width: '100%',
        paddingTop: '20%',
        paddingBottom: '6%',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: 24,
        paddingTop: '3%'
    },
    clockText: {
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.58)',
        fontWeight: 700,
        fontSize: 18,
        left: '20%',
        top: '3%'
    },
    tasksHeading: {
        color: 'rgba(0, 0, 0, 1)',
        fontWeight: 700,
        fontSize: 18
    },
    taskBox: {
        backgroundColor: '#FFFFFF',
        margin: '10%',
        padding: '3%',
        width: '120%',
        alignSelf: 'center'
    },
    taskHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#000000'
    },
    taskHeading: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: 700,
        fontSize: 16,
        alignSelf: 'center'
    },
    addBtn: {
        height: 25,
        width: 25,
        resizeMode: 'stretch'
    },
    taskList: {
        height: '42%',
    },
    task: {
        display: 'flex',
        flexDirection: 'row',
        color: '#000000',
        marginVertical: '3%',
        gap: 8,
    },
    taskText: {
        color: "#000000"
    }
});
