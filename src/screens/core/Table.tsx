import React from 'react';
import { View, StyleSheet, ScrollView , Text} from 'react-native';
import { DataTable } from 'react-native-paper';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<DataTable>
  <DataTable.Header>
    <DataTable.Title>Name</DataTable.Title>
    <DataTable.Title>Favourite Food</DataTable.Title>
    <DataTable.Title>Age</DataTable.Title>
  </DataTable.Header>
  <DataTable.Row>
    <DataTable.Cell>Radhika</DataTable.Cell>
    <DataTable.Cell>Dosa</DataTable.Cell>
    <DataTable.Cell>23</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>Krishna</DataTable.Cell>
    <DataTable.Cell>Uttapam</DataTable.Cell>
    <DataTable.Cell>26</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>Vanshika</DataTable.Cell>
    <DataTable.Cell>Brownie</DataTable.Cell>
    <DataTable.Cell>20</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>Teena</DataTable.Cell>
    <DataTable.Cell>Pizza</DataTable.Cell>
    <DataTable.Cell>24</DataTable.Cell>
  </DataTable.Row>
</DataTable>`;

export default function TableScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>DataTable</Text>
      <Text style={styles.theory}>Displays data in a scrollable table format.</Text>

      <CodeBlock code={example} />

      <DemoBox>
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Favourite Food</DataTable.Title>
              <DataTable.Title>Age</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Radhika</DataTable.Cell>
              <DataTable.Cell>Dosa</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Krishna</DataTable.Cell>
              <DataTable.Cell>Uttapam</DataTable.Cell>
              <DataTable.Cell>26</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Vanshika</DataTable.Cell>
              <DataTable.Cell>Brownie</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Teena</DataTable.Cell>
              <DataTable.Cell>Pizza</DataTable.Cell>
              <DataTable.Cell>24</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333', marginBottom: 8 },
  tableHeader: { backgroundColor: '#DCDCDC' },
});
