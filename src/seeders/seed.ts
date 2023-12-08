import prisma from '../../prismaSingleton/prismaSingleClient';

function addHours(date: Date, hours: any) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
}

async function seedSeeder() {
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
    });
  }
}

async function fieldSeeder() {
  const seedIds = await prisma.seed.findMany({
    select: {
      id: true
    }
  });

  for (let i = 0; i < 10; i++) {
    const isPlanted = i % 2 === 0;
    const currentSeedId = isPlanted
      ? seedIds[Math.floor(Math.random() * seedIds.length)].id
      : null;

    await prisma.field.create({
      data: {
        name: `Lahan ${String.fromCharCode(65 + i)}`,
        numberId: i,
        isPlanted,
        currentSeedId
      }
    });
  }
}

async function monitorLogSeeder() {
  const fieldIds = await prisma.field.findMany({
    where: {
      isPlanted: true
    },
    select: {
      id: true
    }
  });

  const time = new Date();

  for (let i = 0; i < fieldIds.length; i++) {
    for (let j=0; j<10; j++) {
        const res = await prisma.monitor.create({
          data: {
            monitoredFieldId: fieldIds[i].id,
            soil_moisture: Math.floor(Math.random() * 90) + 1,
            air_temperature: Math.floor(Math.random() * 46) + 11,
            air_humidity: Math.floor(Math.random() * 96) + 0.6,
            air_pressure: Math.floor(Math.random() * 102) + 101,
            pH: Math.floor(Math.random() * 10) + 3.5,
            timePosted: addHours(time, j)
          }
        });
    }
  }
}

async function main() {
  await seedSeeder();
  await fieldSeeder();
  await monitorLogSeeder();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
