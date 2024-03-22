'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './userCharts.module.css'
import EnergiaTable from '../energiaTable/EnergiaTable';
import dynamic from 'next/dynamic'

const ColumnChartDynamic = dynamic(() => import('./ColumnChart'), {
    ssr: false,
  })
  const LineChartDynamic = dynamic(() => import('./LineChart'), {
    ssr: false,
  })
  


interface User {
    _id: string;
    email: string;
    username: string;
}
type NumericArray = number[];

const getUser = async (email: string) => {
    const res = await fetch(`http://localhost:3000/api/user/${email}`, { next: { revalidate: 1200 } }) /* Atualiza e coloca os dados em cache a cada 1200s  */;
    if (!res.ok) {
        throw new Error('Erro ao buscar no banco de dados');
    }
    return res.json() as Promise<User>; // Define a resposta como uma Promise do tipo User
};

const getUserEnergia = async (userId: string) => {
    const res = await fetch(`http://localhost:3000/api/energia/${userId}`, { next: { revalidate: 1200 } }) /* Atualiza e coloca os dados em cache a cada 1200s  */;
    if (!res.ok) {
        throw new Error('Erro ao buscar no banco de dados');
    }
    const data = await res.json(); // Obtém o JSON retornado pela API

    // Verifica se há dados no array
    if (data.length === 0) {
        throw new Error('Nenhum dado de energia encontrado');
    }

    // Acessa o primeiro elemento do array
    const energiaData = data[0];

    // Desestrutura as propriedades do objeto
    const { _id, geracao, consumo, excedente } = energiaData;

    // Retorna os campos desestruturados
    return { _id, geracao, consumo, excedente };
};

export default function UserCharts() {
    const { data: session } = useSession();
    const [consumo, setConsumo] = useState<NumericArray>();
    const [geracao, setGeracao] = useState<NumericArray>();
    const [excedente, setExcedente] = useState<NumericArray>();

    useEffect(() => {
        async function fetchUsuario() {
            if (session?.user?.email) {
                try {
                    const userData = await getUser(session.user.email);
                    const energiaData = await getUserEnergia(userData._id);
                    setGeracao(energiaData.geracao);
                    setConsumo(energiaData.consumo);
                    setExcedente(energiaData.excedente);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        }
        fetchUsuario();
    }, [session?.user?.email]);

    return (
        <div className={styles.userCharts}>
            <EnergiaTable geracao={geracao} consumo={consumo} excedente={excedente} />
            <div className={styles.charts}>
                <ColumnChartDynamic geracao={geracao} consumo={consumo} excedente={excedente} />
                <LineChartDynamic geracao={geracao} consumo={consumo} excedente={excedente} />
            </div>
        </div>
    );
}
