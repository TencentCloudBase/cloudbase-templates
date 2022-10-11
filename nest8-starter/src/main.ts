const express = require('express');
import {NestFactory} from '@nestjs/core';
import {
    ExpressAdapter,
} from '@nestjs/platform-express';

import {AppModule} from './app.module';

const expressApp = express();

const adapter = new ExpressAdapter(expressApp);

const PORT = process.env.PORT || 9000;

export async function bootstrap() {
    const app = await NestFactory.create(AppModule, adapter);
    if (process.env.NODE_ENV === 'development') {
        await app.listen(PORT);
    } else {
        await app.init();
    }
    return expressApp;
}

if (process.env.NODE_ENV === 'development') {
    bootstrap().then(() => {
        console.log(`App listen on http://localhost:${PORT}`);
    });
}
