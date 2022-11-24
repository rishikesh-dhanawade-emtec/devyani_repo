"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConfiguration = void 0;
exports.TypeORMConfiguration = {
    username: 'root',
    password: 'root',
    port: 3306,
    database: 'blogManagerDB',
    type: 'mysql',
    host: 'localhost',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: false,
};
//# sourceMappingURL=typeorm.configuration.js.map