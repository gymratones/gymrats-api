import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dummy } from './dummy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DummyService {
    constructor(
        @InjectRepository(Dummy)
        private dummyRepository: Repository<Dummy>,
    ) { }
    public createDummy(name: string) {
        let dummy: Dummy = this.dummyRepository.create({ name })
        this.dummyRepository.save(dummy)
        return dummy
    }
    public async getDummy(dummyId: string) {
        if (!dummyId) {
            return null
        }
        let id = Number(dummyId)
        const dummy = await this.dummyRepository.findOne({ where: { id } })
        if (!dummy) {
            throw new NotFoundException("Dummy no encontrado")
        }
        return dummy
    }
}
