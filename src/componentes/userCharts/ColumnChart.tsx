import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import styles from './userCharts.module.css';


type NumericArray = number[] | undefined;
interface EnergiaData {
    geracao: NumericArray;
    consumo: NumericArray;
    excedente: NumericArray;
}

export default function ColumnChart({ geracao, consumo, excedente }: EnergiaData) {
    useEffect(() => {
        if (!geracao || !consumo || !excedente) return;

        const categories = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        // Convertendo o objeto geracao para uma array de objetos com a estrutura { x: string, y: number }
        const geracaoData = Object.entries(geracao).map(([month, value]) => ({
            x: month,
            y: value,
            fillColor: '#7A8C68'
        }));

        const consumoData = Object.entries(consumo).map(([month, value]) => ({
            x: month,
            y: value,
            fillColor: '#4B5940'
        }));

        const excedenteData = Object.entries(excedente).map(([month, value]) => ({
            x: month,
            y: value,
            fillColor: '#f2b650'
        }));

        const series = [
            {
                name: 'Geração',
                data: geracaoData,
                color: '#7A8C68'
            },
            {
                name: 'Consumo',
                data: consumoData,
                color: '#4B5940'
          
            },
            {
                name: 'Excedente',
                data: excedenteData,
                color: '#f2b650'
            }
        ];

        const options = {
            chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                  show: false
                },
             
            },
            xaxis: {
                categories: categories
            },
            series: series
            
        };
        if (typeof window !== 'undefined') { // Ensure code only runs in the browser
            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();

            // Cleanup when component unmounts
            return () => {
                chart.destroy();
            };
        }
    }, [geracao, consumo, excedente]);

     
   // Empty dependency array ensures useEffect runs only once after the initial render

    return <div id="chart" className={styles.columnChart}></div>;
}
