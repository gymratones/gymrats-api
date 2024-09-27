import { Module } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { DummyController } from './dummy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dummy } from './dummy.entity';

@Module({
  providers: [DummyService],
  controllers: [DummyController],
  imports: [TypeOrmModule.forFeature([Dummy])]
})
export class DummyModule { }
