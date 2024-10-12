import { Module } from '@nestjs/common';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';
import { Gym } from './gym.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GymController],
  providers: [GymService],
  imports: [TypeOrmModule.forFeature([Gym])]
})
export class GymModule { }
