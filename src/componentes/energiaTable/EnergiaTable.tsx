import React from 'react'
import styles from './energiaTable.module.css'

type NumericArray = number[] | undefined;
interface EnergiaData {
    geracao: NumericArray;
    consumo: NumericArray;
    excedente: NumericArray;
}

export default function EnergiaTable({ geracao, consumo, excedente }: EnergiaData) {
    return (
        <table className={styles.energiaTable}>
            <thead>
                <tr className={styles.tableHead}>
                    <th>Mês</th>
                    <th>Geração</th>
                    <th>Consumo</th>
                    <th>Excedente</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {Object.entries(geracao || {}).map(([key, value]:any) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}Kwh</td>
                        <td>{consumo && consumo[key]}Kwh</td>
                        <td>{excedente && excedente[key]}Kwh</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
