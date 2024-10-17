import { UserService } from './Modules/join/services/user.service';
import { ModulesModule } from './Modules/modules.module';
import { ShareModule } from './share/share.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/session.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ModulesModule,
    ShareModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TelegrafModule.forRootAsync({
      botName: 'XhibalbaBot',
      useFactory: () => ({
        token: process.env.TELEGRAM_BOT_TOKEN,
        middlewares: [sessionMiddleware, LoggerMiddleware],
        include: [ModulesModule],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
        UserService, AppService],
})
export class AppModule {}
