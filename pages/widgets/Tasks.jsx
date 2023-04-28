import React, { useState } from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBox from 'expo-checkbox';

function Task({ text}) {

    const [ isChecked, setChecked ] = useState(false);

    return (
        <View style={styles.task}>
            <CheckBox value={isChecked} onValueChange={setChecked} />
            <Text style={styles.taskText}>{text}</Text>
        </View>
    );
};

export function TaskList({ tasks }) {

    const taskItems = tasks.map((task, index) => {
        return {
            taskObj: <Task 
                text={task} 
                key={index} 
            />
        }
    })
    
    return (
        <FlatList 
            style={styles.taskList}
            data={taskItems}
            renderItem={({ item }) => item.taskObj}
        />
    );
}

const styles = StyleSheet.create({
    task: {
        display: 'flex',
        flexDirection: 'row',
        color: '#000000',
        marginVertical: '2%',
        gap: 8,
    },
    taskList: {
        maxHeight: 100,
        minHeight: 30
    },
    taskText: {
        color: "#000000"
    }
});