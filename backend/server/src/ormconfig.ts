import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3000,
    username: 'root',
    password: '',
    database: 'my_nestjs_project',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],

    synchronize: false,

    migrationsRun: false,
    logging: true,
    logger: 'file',

    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = config