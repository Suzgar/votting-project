import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [UsersModule, VotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
