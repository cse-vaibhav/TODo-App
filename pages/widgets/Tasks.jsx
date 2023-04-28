import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBox from 'expo-checkbox';

export function Task({ task, toggled, onChange }) {
    return (
        <View style={styles.task}>
            <CheckBox value={toggled} onChange={onChange}/>
            <Text style={styles.taskText}>{task}</Text>
        </View>
    );
}

export function TaskList({ tasks }) {

    const taskItems = tasks.map((task, index) => {
        return {
            task: <Task text={task} key={index} />
        }
    })
    
    return (
        <FlatList style={styles.taskList}
            data={taskItems}
            renderItem={({ item }) => item}
        />
    );
}

const styles = StyleSheet.create({
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