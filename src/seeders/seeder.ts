import prisma from "../../prismaSingleton/prismaSingleClient";

async function main() {
    const bibit = ['sawi', 'bayam', 'cabai', 'tomat', 'mangga', 'kangkung'];
    const randomStock = Math.floor(Math.random() * 100) + 1;
    const randomSoilMoisture = Math.floor(Math.random() * 90) + 1;
    const randommAirTemperature = Math.floor(Math.random() * 46) + 11;
    const randomAirHumidity = Math.floor(Math.random() * 96) + 0.6;
    const randomAirPressure = Math.floor(Math.random() * 102) + 101;
    const randomPH = Math.floor(Math.random() * 10) + 3.5;

    for (let i = 0; i < bibit.length; i++) {
        await prisma.seed.create({
            data: {
                name: bibit[i],
                stock: randomStock,
                soil_moisture: randomSoilMoisture,
                air_temperature: randommAirTemperature,
                air_humidity: randomAirHumidity,
                air_pressure: randomAirPressure,
                pH: randomPH
            }
        })
    }
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
    