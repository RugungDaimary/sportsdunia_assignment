import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CollegesModule } from './colleges/colleges.module';
import { CollegePlacementModule } from './college-placement/college-placement.module';
import { CollegeWiseCourseModule } from './college-wise-course/college-wise-course.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    CollegesModule,
    CollegePlacementModule,
    CollegeWiseCourseModule,
    CitiesModule,
    StatesModule,
    UsersModule,
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
