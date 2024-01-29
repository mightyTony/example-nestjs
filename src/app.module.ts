import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    })
  ],
})
export class AppModule {}
