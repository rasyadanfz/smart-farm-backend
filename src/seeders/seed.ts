import prisma from '../../prismaSingleton/prismaSingleClient';

function addHours(date: Date, hours: any) {
  const changeableDate = date;
  changeableDate.setTime(changeableDate.getTime() + hours * 60 * 60 * 1000);

  return changeableDate;
}

async function seedSeeder() {
  const bibit = ['sawi', 'bayam', 'cabai', 'tomat', 'mangga', 'kangkung'];

  for (let i = 0; i < bibit.length; i++) {
    const randomStock = Math.floor(Math.random() * 100) + 1;
    const randomSoilMoisture = parseFloat((Math.random() * 90 + 1).toFixed(2));
    const randommAirTemperature = parseFloat(
      (Math.random() * 15 + 20).toFixed(2)
    );
    const randomAirHumidity = parseFloat((Math.random() * 96 + 0.6).toFixed(2));
    const randomAirPressure = parseFloat(
      (Math.random() * 102 + 101).toFixed(2)
    );
    const randomPH = parseFloat((Math.random() * 7 + 5).toFixed(2));

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
    let soil_moisture = Math.floor(Math.random() * 90) + 1;
    let air_temperature = Math.floor(Math.random() * 46) + 11;
    let air_humidity = Math.floor(Math.random() * 96) + 0.6;
    let air_pressure = Math.floor(Math.random() * 102) + 101;
    let pH = Math.floor(Math.random() * 10) + 3.5;

    for (let j = 0; j < 10; j++) {
      soil_moisture = Math.round((soil_moisture + Math.floor(Math.random() * 10) - 5)*100)/100;
      air_temperature = Math.round((air_temperature + Math.floor(Math.random() * 10) - 5)*100)/100;
      air_humidity = Math.round((air_humidity + Math.floor(Math.random() * 10) - 5)*100)/100;
      air_pressure = Math.round((air_pressure + Math.floor(Math.random() * 10) - 5)*100)/100;
      pH = (Math.round(Math.max(5, Math.min(12, pH + Math.floor(Math.random() * 2) - 1)))*100)/100;

      const res = await prisma.monitor.create({
        data: {
          monitoredFieldId: fieldIds[i].id,
          soil_moisture,
          air_temperature,
          air_humidity,
          air_pressure,
          pH,
          timePosted: addHours(time, 1)
        }
      });
    }
  }
}

async function main() {
  await prisma.monitor.deleteMany({});
  await prisma.field.deleteMany({});
  await prisma.seed.deleteMany({});

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
